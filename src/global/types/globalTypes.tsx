type RegisterFormValues = {
  fullName: string;
  nickname: string;
  phoneNumber: number;
  email: string;
  category: string;
  password: string;
  repeatPassword: string;
  agreeTerms: boolean;
};

type LoginFormValues = {
  nickname: string;
  password: string;
};

type OTPCodeFormValues = {
  codeOTP: string;
};

export type { LoginFormValues, OTPCodeFormValues, RegisterFormValues };
