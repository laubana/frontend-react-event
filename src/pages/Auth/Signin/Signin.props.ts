export interface SigninProps {
  userId: string;
  userPassword: string;

  handleChangeUserId: (userId: string) => void;
  handleChangeUserPassword: (userPassword: string) => void;
  handleSignin: () => void;
  handleGoBack: () => void;
  handleSigninWithGoogle: () => void;
}
