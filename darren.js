img = document.createElement('img')
img.src = atom.project.getPaths()[0] + '/assets/darren.jpg'

s0.init({src: img})
src(s0)
  .thresh(0.6, 0.1)
  // .scrollX(() => (a.fft[0] * .1) + .1)
  .scrollY(.35)
  .kaleid(() => (cc[44] * 4) + 2)
  .scrollX(() => (a.fft[0]))
  .repeatY(() => (cc[41] * 8))
  .repeatX(() => (cc[42] * 8))
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .luma(() => cc[43])
  .modulateRotate(voronoi(3, 2).color(1,1,1,.5).luma(() => (a.fft[0] * -1) + .6))
  .out()

a.setSmooth(.9)
