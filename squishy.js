vid = document.createElement('video')
vid.autoplay = false
vid.loop = true
vid.src = atom.project.getPaths()[0] + '/assets/vibe.mp4'
s0.init({src: vid})

src(s0)
  .color(1,0.7,1)
  .saturate(3)
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .modulatePixelate(noise(() => (cc[41] * 20), .5), () => (a.fft[0] + .2))
  .out()
