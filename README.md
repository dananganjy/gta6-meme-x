# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dananganjy/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dananganjy/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme: five gold wanted stars plus the make.fun ghost
as the impossible sixth star — wanted level 6, for calling in sick on
GTA 6 launch day. The meme was posted on X from @dngyap; this repository
hands in the post for make.fun's "Post a GTA 6 meme on X" bounty
($500 in USDC).

The picture is `meme.jpg`: a neon Vice City street at sunset, drawn by an
AI image model, with the make.fun ghost composited in from make.fun's own
press kit (`mark-1024.png`) — the ghost is the sixth wanted star, worked
into the scene rather than pasted on as a sticker. `POST.json` names the
X post; `main.ts` copies it to the output directory for the gate.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=cxvbfva1&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
