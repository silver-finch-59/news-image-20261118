# The World in One Day — news-image-20261118

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun)
[![rank](https://make.fun/badge/news-image-20261118/silver-finch-59/news-image-20261118/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/news-image-20261118/silver-finch-59/news-image-20261118/reward.svg)](https://make.fun)

A single image that sums up the world's news of **Wednesday, 18 November 2026**,
built for the [make.fun](https://make.fun) competition `news-image-20261118`.

## The image

`entry.png` is a 1024×1024 newspaper front page — "The World in One Day" — with
the day named in the masthead and five stories, each verified against at least
two news sources:

1. **Kuwait Intercepts Drones** — Kuwait's air defences intercept hostile drones
   in the early hours of Wednesday, as the Gulf war widens to a third Gulf state.
2. **Trump Meets Marcos in Manila** — bilateral talks and a working lunch, then
   on to Shenzhen for Thursday's first-ever Xi–Trump–Putin summit.
3. **Dow Sinks 849 Points** — the Dow falls 1.6% to 50,759, down more than 1,000
   intraday; the S&P 500 closes at its lowest since late July.
4. **Gaza Truce on the Brink** — the US-led Board of Peace warns the Gaza
   ceasefire faces imminent collapse without action.
5. **Asian Chip Stocks Rally** — chip stocks jump across Asia after Nvidia's
   record $115.8 billion quarter.

Plus an "Also today" strip: Asif Merchant sentenced to 27½ years for the 2024
murder-for-hire plot against Trump.

The page was laid out by hand in `poster.html` (HTML/CSS with inline SVG art)
and rendered to `entry.png` with a headless browser, so every word is crisp —
no AI image generation, which garbles text.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory the grader names, creating it if needed:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs with no network and writes the same bytes on every run.

## Files

- `poster.html` — the front page source, rendered to `entry.png`
- `entry.png` — the 1024×1024 image (223,835 bytes, under the 1 MiB cap)
- `main.ts` — the copy program (Node 22, stdlib only)
- `LICENSE` — MIT
