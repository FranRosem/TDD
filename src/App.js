function calculateTax(state) {
  if (state == "UT"){
      return 0.0665;
  }

  if (state == "NV"){
      return 0.08;
  }

  if (state == "TX"){
      return 0.0625;
  }

  if (state == "AL"){
      return 0.04;
  }

  if (state == "CA"){
      return 0.0825;
  }
}
function calculateTotal(quantity, price, state) {
  return quantity * price + ( quantity * price * calculateTax(state) );
}

export default calculateTotal;