export const getOrderStatus = (statusCode) => {
  switch(parseInt(statusCode)) {
    case 0:
      return 'need admin input';
    case 1:
      return 'approved';
    case 2:
      return 'waiting customer payment';
    case 3:
      return 'waiting payment approval from admin';
    case 4:
      return 'sent';
    case 9:
      return 'expired or canceled';
    default:
      return 'Invalid';
  }
};
