vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0] + '/assets/mushies.mp4'
s0.init({src: vid})

vid.autoplay = false
vid.src = atom.project.getPaths()[0] + '/assets/vibe.mp4'
s0.init({src: vid})

src(s0)
  .scrollY(.7)
  .kaleid(() => (cc[42] * 10)  + .9)
  // .colorama(() => (a.fft[1] * .2))
  .modulateRotate(noise(() => (a.fft[0] * 2)))
  .color(() => cc[21], () => cc[22], ()=>cc[23])
  .saturate(4)
  .out()

a.show()
a.setSmooth(.9)
