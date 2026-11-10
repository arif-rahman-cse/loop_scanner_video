#!/bin/zsh
set -eu
cd -- "$(dirname -- "$0")"
if ! command -v ffmpeg >/dev/null 2>&1 || ! command -v ffprobe >/dev/null 2>&1; then
  print 'FFmpeg and FFprobe are required. Run this in Terminal first:'
  print 'brew install ffmpeg'
  read -r '?Press Return to close. '
  exit 1
fi
print 'Checking the exhibition composition…'
if ! npx hyperframes check --json > validation-output.json; then
  print 'Validation failed. See validation-output.json.'
  read -r '?Press Return to close. '
  exit 1
fi
print 'Exporting the 10-second exhibition video…'
npx hyperframes render --quality delivery -o loopscanner-exhibition.mp4
print 'Export details:'
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate:format=duration -of default=noprint_wrappers=1 loopscanner-exhibition.mp4
open -R loopscanner-exhibition.mp4
print 'Set your monitor player to repeat this MP4.'
read -r '?Press Return to close. '
