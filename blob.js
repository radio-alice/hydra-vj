osc(10, .05)
  .add(noise(() => (cc[41] * 3) + 2, () => cc[42] * .5))
  .color(() => (a.fft[0] * 0.1),
      () => (a.fft[1] * 0.4),
      0.5, 0.4
    )
  .colorama(() => (a.fft[2] * .2) + 0.8 , (() => (a.fft[2]) * -0.5) + 1)
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
  .out()

a.show()
a.setSmooth(.9)
a.setCutoff(4)
a.setScale(4)
a.setBins(4)
a.settings[0].cutoff = 2
a.settings[0].scale = 4
