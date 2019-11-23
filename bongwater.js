vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0] + '/assets/oak.mp4'
s0.init({src: vid})

src(s0)
  .saturate(() => (cc[41] * 1.5) + 1)
  .colorama(() => (a.fft[0] * .2))
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .out()
