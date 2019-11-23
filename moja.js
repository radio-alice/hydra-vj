img = document.createElement('img')
img.src = atom.project.getPaths()[0] + '/assets/mojabb.png'

s0.init({src: img})
src(s0)
  .pixelate(() => (a.fft[3] * -600) + 400, () => (a.fft[3] * -600) + 400)
  .scrollX(() => (a.fft[0] * .05))
  .modulateScale(osc(30, .1), () => (a.fft[0] * 0.2) + .1)
  .repeatY(() => (cc[41] * 8))
  .repeatX(() => (cc[42] * 8))
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .luma(() => cc[43])
  .out()
