function hitung(operator) {
  let angka1 = document.getElementById("angka1").value;
  let angka2 = document.getElementById("angka2").value;
  let hasil = document.getElementById("hasil");

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    switch (operator) {
        case '+':
            hasil.value = parseFloat(angka1) + parseFloat(angka2);
            break;
        case '-':
            hasil.value = parseFloat(angka1) - parseFloat(angka2);
            break;
        case '*':
            hasil.value = parseFloat(angka1) * parseFloat(angka2);
            break;
        case '/':
            if (angka2 == 0) {
            alert("Maaf, tidak bisa membagi dengan angka 0");
            } else {
            hasil.value = parseFloat(angka1) / parseFloat(angka2);
            }
            break;
        case '^':
            hasil.value = Math.pow(parseFloat(angka1), parseFloat(angka2));
            break;
            default:
            alert("Operator yang Anda masukkan salah");
            break;
            }
        }
    }