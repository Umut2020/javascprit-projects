const month = 3; // yilin ucuncu ayi --- mart
const day = 12; // ayin gunu

//**********************/

if (month == 1) {
  if (22 <= day <= 31) {
    console.log("Burcunuz Kova");
  } else if (1 <= day <= 21) {
    console.log("Burcunuz Oglak");
  }
} else if (month == 2) {
  if (1 <= day <= 19) {
    console.log("Burcunuz Kova");
  } else if (20 <= day <= 29) {
    console.log("Burcunuz Balik");
  }
} else if (month == 3) {
  if (1 <= day <= 20) {
    console.log("Burcunuz Balik");
  } else if (21 <= day <= 31) {
    console.log("Burcunuz Koc");
  }
} else if (month == 4) {
  if (1 <= day <= 20) {
    console.log("Burcunuz Koc");
  } else if (21 <= day <= 30) {
    console.log("Burcunuz Boga");
  }
} else if (month == 5) {
  if (1 <= day <= 21) {
    console.log("Burcunuz Boga");
  } else if (22 <= day <= 31) {
    console.log("Burcunuz Ikizler");
  }
} else if (month == 6) {
  if (1 <= day <= 22) {
    console.log("Burcunuz Ikizler");
  } else if (23 <= day <= 30) {
    console.log("Burcunuz Yengec");
  }
} else if (month == 7) {
  if (1 <= day <= 22) {
    console.log("Burcunuz Yengec");
  } else if (23 <= day <= 31) {
    console.log("Burcunuz Aslan");
  }
} else if (month == 8) {
  if (1 <= day <= 22) {
    console.log("Burcunuz Aslan");
  } else if (23 <= day <= 31) {
    console.log("Burcunuz Basak");
  }
} else if (month == 9) {
  if (1 <= day <= 22) {
    console.log("Burcunuz Basak");
  } else if (23 <= day <= 30) {
    console.log("Burcunuz Terazi");
  }
} else if (month == 10) {
  if (1 <= day <= 22) {
    console.log("Burcunuz Terazi");
  } else if (23 <= day <= 31) {
    console.log("Burcunuz Akrep");
  }
} else if (month == 11) {
  if (1 <= day <= 23) {
    console.log("Burcunuz Akrep");
  } else if (24 <= day <= 30) {
    console.log("Burcunuz Yay");
  }
} else if (month == 12) {
  if (1 <= day <= 21) {
    console.log("Burcunuz Yay");
  } else if (22 <= day <= 31) {
    console.log("Burcunuz Oglak");
  }
}

//**********************/
