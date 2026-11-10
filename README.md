# Loop Scanner exhibition video

A 10-second product intro for [Loop Scanner](https://loopscanner.app/), made with HyperFrames for repeating playback on an exhibition monitor.

**1920 × 1080 · 30 fps · H.264 MP4 · silent**

[Download the exported video](./loopscanner-exhibition.mp4). Enable repeat in the monitor's media player.

## Preview

Open `preview.html` directly in a browser. It embeds the images and font, loops automatically, and requires no server. Click **Exhibition mode**, press **F**, or double-click for fullscreen. **Space** pauses; **Esc** exits fullscreen.

## Edit and render

Requires Node.js/npm and FFmpeg, including FFprobe. On macOS, install the latter with `brew install ffmpeg`.

```sh
npm install
npm run preview
```

Edit the project in the HyperFrames preview or desktop app. Then validate, review and render:

```sh
npm run verify
npm run check
npm run review
npm run render
```

On macOS, `Export Exhibition Video.command` also validates and exports the video.

## Project files

- `index.html`: root composition and editable variables.
- `compositions/exhibition.html`: the continuous animated sequence.
- `assets/`: real product screenshots, document samples, official branding, font and local GSAP runtime.
- `preview.html`: self-contained browser preview; it embeds a copy of the composition and must be refreshed if the source changes.
- `loopscanner-exhibition.mp4`: exported video.
- `STORYBOARD.md` and `REVIEW.md`: creative direction and review evidence.
- `versions/v1/`: original draft for reference.

## Verification

HyperFrames check passed with no lint, runtime, layout or contrast errors. Beat and transition snapshots were reviewed. Four reading-time warnings are retained because the opening copy returns at the end and continues on the next repeat.

The included MP4 was probed as exactly 10 seconds, 1920 × 1080, H.264 at 30 fps. An exported frame was decoded and inspected. Physical monitor readability has not been tested.

Visuals and marketing copy come from the local Loop Scanner website/app source. The GSAP runtime and font retain their upstream license notices where supplied.
