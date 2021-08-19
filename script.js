// ==========Problem - 1=========== //

function seerToMon(seer) {
  if (typeof seer != "number") {
    return "Please give how many seer u want";
  } else if (seer < 0) {
    return "Please give a positive number";
  } else {
    const mon = seer / 40;
    return mon;
  }
}

// ==================xxx=============== //

// =================Problem - 2============= //

function totalSales(shirts, pants, shoes) {
  if (
    typeof shirts != "number" ||
    typeof pants != "number" ||
    typeof shoes != "number"
  ) {
    return "Give me a number of how many u want to buy for Eid shopping 😀😀";
  } else if (shirts < 0 || pants < 0 || shoes < 0) {
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

// =====================================xxx================================== //

// ============Problem - 3=========== //

function deliveryCost(shirts) {
  const firstHundredShirtsPerPrice = 100;
  const secondHundredShirtsPerPrice = 80;
  const restShirtsPerPrice = 50;

  if (typeof shirts != "number") {
    return "please give me a number of shirts";
  } else if (shirts < 0) {
    return "please give a positive number";
  } else {
    if (shirts <= 100) {
      const firstHundredShirtsCosts = shirts * firstHundredShirtsPerPrice;
      return firstHundredShirtsCosts;
    } else if (shirts <= 200) {
      const firstHundredShirtsCosts = 100 * firstHundredShirtsPerPrice;
      const restShirts = shirts - 100;
      const secondHundredShirtsCosts = restShirts * secondHundredShirtsPerPrice;
      const totalShirtsDeliveryCosts =
        firstHundredShirtsCosts + secondHundredShirtsCosts;
      return totalShirtsDeliveryCosts;
    } else {
      const firstHundredShirtsCosts = 100 * firstHundredShirtsPerPrice;
      const secondHundredShirtsCosts = 100 * secondHundredShirtsPerPrice;
      const restShirts = shirts - 200;
      const restShirtsCosts = restShirts * restShirtsPerPrice;
      const totalShirtsDeliveryCosts =
        firstHundredShirtsCosts + secondHundredShirtsCosts + restShirtsCosts;

      return totalShirtsDeliveryCosts;
    }
  }
}

// =================xxx========== //

// ==============Problem - 4 ========= //
const friendsName = [
  "abdullah", "samia","nishi", "zaman","hailey", "selena", "mushfiqur"];

function perfectFriend(friendsName) {
  if (typeof friendsName == "number") {
    return "Hey, We are searching for your friends name, not a number 😁😁";
  } else if (friendsName.length == 0) {
    return "please give a valid array";
  } else if (typeof friendsName == "boolean") {
    return "Don't give boolean please 😃";
  } else {
    for (const name of friendsName) {
      if (name.length == 5) {
        return name;
      }
    }
  }
}

// =================xxx============= //
