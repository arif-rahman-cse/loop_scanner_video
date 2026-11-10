const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');process.chdir(path.resolve(__dirname,'..'));
const html=fs.readFileSync('compositions/exhibition.html','utf8');
const markup=html.split('<script>')[0],ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Unique scene IDs');
const animations=[];const elements=new Map(ids.map(id=>[id,{id,animate(frames,options){const a={id,frames,options,pause(){this.paused=true},currentTime:0};animations.push(a);return a}}]));const handlers={};
const context={document:{getElementById(id){assert(elements.has(id),'Missing '+id);return elements.get(id)}},window:{addEventListener(n,fn){handlers[n]=fn}}};
vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],context);
assert(animations.length>=12);
for(const a of animations){assert(a.paused);assert.equal(a.options.duration,10000);assert.equal(a.frames[0].offset,0);assert.equal(a.frames.at(-1).offset,1);for(let i=1;i<a.frames.length;i++)assert(a.frames[i].offset>=a.frames[i-1].offset,a.id+' frame order');const first=a.frames[0],last=a.frames.at(-1);assert.equal(first.opacity,last.opacity,a.id+' opacity at loop boundary');if(first.opacity!==0){assert.equal(first.transform,last.transform,a.id+' transform at loop boundary');assert.equal(first.clipPath,last.clipPath,a.id+' crop at loop boundary')}}
for(const t of [0,.55,1.6,2.5,4.5,6,7.8,9.6,10,5,0]){context.window.loopScannerSeek(t);for(const a of animations)assert.equal(a.currentTime,t*1000)}
handlers['hf-seek']({detail:{time:3}});for(const a of animations)assert.equal(a.currentTime,3000);
const preview=fs.readFileSync('preview.html','utf8');assert(!preview.includes('src="assets/'),'Preview assets embedded');assert(!preview.includes('url(\'assets/'),'Preview font embedded');assert(preview.includes('requestFullscreen'));assert(preview.includes('time%10')||preview.includes('t%10'));
console.log(`PASS: ${ids.length} unique IDs; ${animations.length} paused 10s animations; keyframe order; visible loop endpoints; seek and seek-back; hf-seek integration; embedded assets; fullscreen controls.`);
