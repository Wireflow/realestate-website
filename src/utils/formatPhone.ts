const formatPhone = (number: number | string) => {
  const contact = String(number);
  const area_code = contact.slice(0, 3);
  const phone = contact.slice(3).slice(0, 3) + "-" + contact.slice(-4);
  return `+1 (${area_code}) ${phone}`;
};

export default formatPhone;
