export const lowercase = () => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
};

export const uppercase = () => {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
};

export const digits = () => {
  return Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i));
};

export const all = () => {
  return [...lowercase(), ...uppercase(), ...digits()];
};
