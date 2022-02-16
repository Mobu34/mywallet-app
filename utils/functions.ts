export const transformAmount = (amount: number) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const getFontSize = (size: string): string => {
  switch (size) {
    case "x-small":
      return "14px";
    case "small":
      return "17px";
    case "large":
      return "24px";
    case "title":
      return "30px";
    case "medium":
    default:
      return "20px";
  }
};

export const getFontWeight = (weight: string): number => {
  switch (weight) {
    case "light":
      return 300;
    case "bold":
      return 700;
    case "medium":
    default:
      return 500;
  }
};
