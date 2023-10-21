function hitung(operasi) {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil;

  switch (operasi) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "x":
      hasil = angka1 * angka2;
      break;
    case "/":
      if (angka2 !== 0) {
        hasil = angka1 / angka2;
      } else {
        alert("Tidak bisa membagi dengan 0!");
        return;
      }
      break;
    case "sin":
      hasil = Math.sin(angka1);
      break;
    case "cos":
      hasil = Math.cos(angka1);
      break;
    case "tan":
      hasil = Math.tan(angka1);
      break;
    case "pangkat":
      hasil = Math.pow(angka1, angka2);
      break;
    case "akar":
      if (angka1 >= 0) {
        hasil = Math.sqrt(angka1);
      } else {
        alert("Tidak bisa menghitung akar dari angka negatif!");
        return;
      }
      break;
    case "log":
      if (angka1 > 0) {
        hasil = Math.log(angka1);
      } else {
        alert("Logaritma hanya didefinisikan untuk angka positif!");
        return;
      }
      break;
    default:
      break;
  }

  alert("Hasil: " + hasil);
}
