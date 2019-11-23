vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0] + '/assets/tweez.mov'
s0.init({src: vid})

vid.src = atom.project.getPaths()[0] + '/assets/vibe.mp4'
s0.init({src: vid})

// const gate = (level, threshold) =>
//   (level > threshold) ? 1 : 0

src(s0)
  .mask(noise(() => cc[41] * 8.02, () => cc[42]).diff(noise(() => cc[41] * 8, () => cc[42])))
  .saturate(() => (a.fft[1] * 7) + 0.4)
  .colorama(() => (a.fft[2] * 3) + .5)
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .out()
