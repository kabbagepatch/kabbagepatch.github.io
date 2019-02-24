const letters = {
  a: [0, 0, 0, 896, 960, 1984, 1984, 1760, 3680, 4080, 4080, 8176, 6200, 14392, 14392, 0],
  b: [0, 0, 0, 2032, 4080, 3120, 3120, 3888, 4080, 8176, 7216, 6192, 7216, 8176, 4080, 0],
  c: [0, 0, 0, 4064, 8176, 7224, 6200, 24, 24, 24, 24, 6168, 7224, 8176, 4064, 0],
  d: [0, 0, 0, 2040, 4088, 3608, 7192, 7192, 6168, 7192, 7192, 7192, 3608, 4088, 2040, 0],
  e: [0, 0, 0, 8176, 8176, 48, 48, 48, 4080, 4080, 48, 48, 48, 8176, 8176, 0],
  f: [0, 0, 0, 4080, 4080, 48, 48, 48, 2032, 2032, 48, 48, 48, 48, 48, 0],
  g: [0, 0, 0, 4064, 8176, 14392, 14392, 24, 24, 15896, 15896, 12344, 14392, 16368, 16352, 0],
  h: [0, 0, 0, 6192, 6192, 6192, 6192, 6192, 8176, 8176, 6192, 6192, 6192, 6192, 6192, 0],
  i: [0, 0, 0, 384, 384, 384, 384, 384, 384, 384, 384, 384, 384, 384, 384, 0],
  j: [0, 0, 0, 3072, 3072, 3072, 3072, 3072, 3072, 3072, 3072, 3168, 3680, 4064, 2016, 0],
  k: [0, 0, 0, 3608, 1816, 920, 984, 504, 248, 504, 952, 1944, 1816, 3608, 7704, 0],
  l: [0, 0, 0, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 4080, 4080, 0],
  m: [0, 0, 0, 14392, 14392, 15480, 15480, 15480, 16120, 14040, 14040, 14296, 14296, 13208, 13208, 0],
  n: [0, 0, 0, 6256, 6256, 6384, 6384, 6640, 7088, 7088, 7984, 7728, 7728, 7216, 7216, 0],
  o: [0, 0, 0, 4064, 8176, 14392, 14392, 12312, 12312, 12312, 12312, 14392, 14392, 8176, 4064, 0],
  p: [0, 0, 0, 4080, 8176, 7216, 6192, 7216, 7728, 4080, 1008, 48, 48, 48, 48, 0],
  q: [0, 0, 0, 2032, 4088, 7196, 7196, 6156, 6156, 6156, 6156, 7964, 7964, 8184, 16368, 6144],
  r: [0, 0, 0, 4088, 4088, 3096, 3096, 3864, 4088, 2040, 3608, 3608, 3096, 3096, 7192, 0],
  s: [0, 0, 0, 1008, 2040, 3608, 3608, 248, 1016, 2016, 3840, 3612, 3612, 2040, 2032, 0],
  t: [0, 0, 0, 8184, 8184, 384, 384, 384, 384, 384, 384, 384, 384, 384, 384, 0],
  u: [0, 0, 0, 6192, 6192, 6192, 6192, 6192, 6192, 6192, 6192, 6192, 7280, 8176, 4064, 0],
  v: [0, 0, 0, 7180, 7196, 3100, 3608, 1592, 1840, 1904, 880, 992, 992, 480, 448, 0],
  w: [0, 0, 0, 25027, 29127, 29671, 29670, 13158, 13166, 16254, 7804, 7740, 7740, 7740, 3096, 0],
  x: [0, 0, 0, 3612, 3640, 1904, 1008, 992, 448, 480, 992, 1904, 1848, 3644, 7196, 0],
  y: [0, 0, 0, 3598, 3612, 1852, 952, 1008, 496, 224, 192, 192, 192, 192, 192, 0],
  z: [0, 0, 0, 8160, 8160, 7168, 3584, 1792, 1920, 896, 448, 224, 240, 8176, 8176, 0],
  '!': [0, 0, 0, 384, 384, 384, 384, 384, 384, 384, 384, 384, 0, 384, 384, 0],
  1: [0, 0, 0, 3072, 3840, 3968, 3456, 3072, 3072, 3072, 3072, 3072, 3072, 3072, 3072, 0],
  2: [0, 0, 0, 2016, 4080, 3696, 3120, 3584, 3840, 1920, 960, 480, 240, 4080, 4080, 0],
  3: [0, 0, 0, 992, 2032, 1584, 1552, 1920, 1984, 3968, 3584, 3120, 3632, 2032, 2016, 0],
  4: [0, 0, 0, 1792, 1792, 1920, 1984, 1728, 1760, 1648, 1584, 4080, 4080, 1536, 1536, 0],
  5: [0, 0, 0, 2032, 2032, 48, 48, 2032, 2032, 3632, 3584, 3632, 3632, 2032, 992, 0],
  6: [0, 0, 0, 2016, 2032, 3696, 48, 2032, 2032, 3632, 3632, 3632, 3696, 2032, 2016, 0],
  7: [0, 0, 0, 4064, 4064, 3072, 3584, 1536, 1792, 1792, 768, 896, 384, 384, 448, 0],
  8: [0, 0, 0, 2016, 2032, 1648, 1648, 2032, 992, 2032, 3696, 3632, 3632, 4080, 2016, 0],
  9: [0, 0, 0, 992, 2032, 3632, 3632, 3632, 4080, 4064, 4032, 3632, 1584, 2032, 992, 0],
  0: [0, 0, 0, 992, 2032, 3696, 3632, 3632, 3120, 3120, 3632, 3632, 3696, 2032, 992, 0],
};

export default letters;