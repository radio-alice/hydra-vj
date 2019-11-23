a.show()
a.setBins(4)
a.setSmooth(.9)

noise(() => cc[43] * 20, .1)
  .add(noise(() => (a.fft[2] * 8)))
  .color(.2,.7,1)
  .colorama(2)
  .kaleid(() => cc[42] * 12)
  .rotate(() => (a.fft[0] * .8))
  .pixelate(() => (cc[41] * -990) + 1000,() => (cc[41] * -790) + 800) // comment / uncomment
  .color(() => cc[21], ()=>cc[22], ()=>cc[23])
.out(o0)
