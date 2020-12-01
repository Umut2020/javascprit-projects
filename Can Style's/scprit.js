let mark = "BWM";
let color = "kirmizi";
let year = 2012;
let costumerYear = 4;

/*********************************/

if (costumerYear <= 5) {
  if (color === "kirmizi" || color === "siyah") {
    if (mark === "BMW" || mark === "Audi" || mark === "VW") {
      if (mark === "BMW") {
        if (year >= 2020) {
          if (color === "siyah") {
            console.log("Araciniz bize emanet");
          } else {
            console.log("Uzgunuz aracinizin tamirini yapamayacagiz");
          }
        } else {
          if (2010 <= year <= 2019 && color === "kirmizi") {
            console.log("Araciniz bize emanet");
          } else {
            console.log("Uzgunuz aracinizin tamirini yapamayacagiz");
          }
        }
      } else {
        if (mark === "Audi" && (2005 <= year <= 2010 || 2014 <= year <= 2020)) {
          console.log("Araciniz bize emanet");
        } else {
          if (mark === "VW" && color === "siyah" && 2001 <= year <= 2010) {
            console.log("Araciniz bize emanet");
          } else {
            console.log("Uzgunuz aracinizin tamirini yapamayacagiz");
          }
        }
      }
    } else {
      console.log("Uzgunuz aracinizin tamirini yapamayacagiz");
    }
  } else {
    console.log("Uzgunuz aracinizin tamirini yapamayacagiz");
  }
} else {
  console.log("Araciniz bize emanet");
}

/*********************************/
