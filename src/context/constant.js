function formatAmount(amount) {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    });
  
    return formatter.format(amount);
  }

  export default formatAmount;