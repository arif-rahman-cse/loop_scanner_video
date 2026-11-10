# Exhibition loop / review

The ten-second intro uses one continuous dark teal stage, large type, real document outputs and real app screens. The opening scan returns at the end for repeated monitor playback. Branding and the URL persist for visitors arriving mid-loop. Silent by design.

HyperFrames check passed after loading the bundled GSAP library locally, fixing the doubled opening punctuation, shortening the result label, and marking the intentional scan glow overflow. Lint, runtime, layout and contrast report zero errors and zero warnings. All 49 sampled contrast checks passed.

Four craft warnings are deliberately retained: the audit treats the opening copy returning around 9.6 seconds as a new closing line visible for only 0.4 seconds. In repeat playback it continues into the opening two seconds. Enable repeat on the monitor player.

Visually inspected the HyperFrames beat sheet, phone sheet, and transition samples at 0, 1.8, 2.0, 2.2, 4.3, 4.6, 7.2, 7.35, 9.5, 9.75 and 9.97 seconds. Adjusted headline exits/entrances so outgoing and incoming copy do not overlap. Verified visible endpoints match in the offline timeline check.

Weakest shot: the app review-to-export transition uses real screenshots, not a recording of a complete interaction. Small UI labels are supporting evidence; large headlines carry the distance-reading message. Physical monitor readability has not been tested. Deployed website parity is unverified; visuals and copy came from the local website source.

The editor preview was opened through the user's Terminal workflow. Starting another editor server here remains blocked by the sandbox's localhost binding restriction. Browser-based check and snapshot commands now work with the installed CLI. History-cache writes outside the workspace are denied; this does not prevent artifact generation.

MP4 export verification is recorded in README.md after rendering. No audio was added or listened to.

Export attempt: the normal render-lock directory was denied by this sandbox. Retried with a writable temporary cache and the existing installed headless browser. The render then stopped because FFmpeg and FFprobe are not installed. No MP4 exists, so no encoded-file verification is claimed. Export Exhibition Video.command is ready for local execution after installing FFmpeg; its shell syntax was checked.

## Export verified

The local Terminal workflow subsequently produced loopscanner-exhibition.mp4. FFprobe confirms 10.000000 seconds, H.264, 1920 × 1080 and 30/1 fps. A frame at 6 seconds was decoded and inspected before repository preparation. Earlier missing-dependency notes describe the initial attempts and are superseded by this verification.
