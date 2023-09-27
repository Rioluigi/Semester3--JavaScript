const nilaiUjianStan = 85;
const nilaiAbsensi = 70;

const lulusUjianKamari = nilaiUjianStan > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjianKamari || lulusAbsensi;
console.log (lulus)