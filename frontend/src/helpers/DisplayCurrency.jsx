import React from "react";

const DisplayPkrCurrency = (num) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 2,
  });

  return formatter.format(num);
};

export default DisplayPkrCurrency;
