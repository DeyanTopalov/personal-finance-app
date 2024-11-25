type classNameProps = {
  className?: string;
};

type childrenProps = {
  children?: React.ReactNode;
};

type Step = {
  id: string;
  name: string;
  title: string;
  description: string;
  fields: Array<keyof TFormtSchema>;
};

type SignupState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string;
};

type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

type ForgotPasswordState = {
  errors?: {
    email?: string[];
  };
  message?: string;
  status?: "success" | "error" | undefined;
};

type ResetPasswordState = {
  errors?: {
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  status?: "success" | "error" | undefined;
};
