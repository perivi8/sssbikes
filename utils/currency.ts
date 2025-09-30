// Format Indian currency - prices are already in INR
export const formatIndianCurrency = (inrAmount: number): string => {
  return `₹${inrAmount.toLocaleString('en-IN')}`;
};

// For backward compatibility - now just formats the INR price
export const formatIndianPrice = (inrPrice: number): string => {
  return `₹${inrPrice.toLocaleString('en-IN')}`;
};
