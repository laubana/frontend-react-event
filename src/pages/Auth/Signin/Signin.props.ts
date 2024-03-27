export interface SigninProps {
  userId?: string;
  userPassword?: string;

  handleOnChangeInputUserId: (inputUserId: string) => void;
  handleOnChangeInputUserPassword: (inputUserPassword: string) => void;
  handleOnSignin: () => void;
  handleOnGoBack: () => void;
  handleOnSigninWithGoogle: () => void;
}
