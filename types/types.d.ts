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
