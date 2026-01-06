export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePasswordBasic = (password: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,20}$/;
  return passwordRegex.test(password);
};
