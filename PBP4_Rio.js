function hitungKomisi(pendapatan) {
    let uangJasa = 0;
    let uangKomisi = 0;
  
    if (pendapatan <= 200000) {
      uangJasa = 10000;
    } else {
      uangJasa = 20000;
    }
  
    switch (pendapatan) {
      case 200000:
        uangKomisi = pendapatan * 0.1;
        break;
      case 500000:
        uangKomisi = pendapatan * 0.15;
        break;
      default:
        uangKomisi = pendapatan * 0.2;
        break;
    }

    return uangJasa + uangKomisi;
  }
  
  let pendapatan = 500000;
  let komisi = hitungKomisi(pendapatan);
  console.log("Komisi salesman: Rp.", komisi);
  