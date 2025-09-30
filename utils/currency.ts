// Currency conversion rate (1 USD = 83 INR approximately)
const USD_TO_INR_RATE = 83;

export const formatIndianPrice = (usdPrice: number): string => {
  const inrPrice = usdPrice * USD_TO_INR_RATE;
  return `₹${inrPrice.toLocaleString('en-IN')}`;
};

export const convertUSDToINR = (usdPrice: number): number => {
  return usdPrice * USD_TO_INR_RATE;
};

export const formatIndianCurrency = (inrAmount: number): string => {
  return `₹${inrAmount.toLocaleString('en-IN')}`;
};
