// ========================Problem - 1============================== //
/*
function seerToMon(seer) {
  if (typeof seer != "number") {
    return "Please give how many seer u want";
  } else if (seer < 0) {
    return "Please give a positive number";
  } else {
    const mon = seer * 0.025;
    return mon;
  }
}

const riceMon = seerToMon(200);
const wheatMon = seerToMon(-2);
const wheatMon2 = seerToMon("wheat floor");
console.log(riceMon);
console.log(wheatMon);
console.log(wheatMon2);
*/

// ===============================xxx======================================== //

// =================================Problem - 2====================================== //
/*
function totalSales(shirts, pants, shoes) {
  if (typeof (shirts && pants && shoes) != "number") {
    return "Give me a number of how many u want to buy for Eid shopping 😀😀";
  } else if ((shirts && pants && shoes) < 0) {
    return "please, give positive value";
  } else {
    const numberOfShirts = shirts;
    const numberOfPants = pants;
    const numberOfShoes = shoes;

    const shirtsSales = 100 * numberOfShirts;
    const pantsSales = 200 * numberOfPants;
    const shoesSales = 500 * numberOfShoes;

    const salesInTotals = shirtsSales + pantsSales + shoesSales;

    return salesInTotals;
  }
}

let sumSales = totalSales("hello", "bangladesh", "dhaka");
let sumSales1 = totalSales(-2, -56, -1);
let sumSales2 = totalSales(2, 3, 5);
console.log(sumSales);
console.log(sumSales1);
console.log(sumSales2);
*/
// =====================================xxx================================== //

// ==============================Problem - 3============================== //
