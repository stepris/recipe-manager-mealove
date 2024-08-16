import { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant =
  | '$submit'
  | '$edit'
  | '$update'
  | '$cancel'
  | '$delete'
  | '$yes'
  | '$no';

type onClickBehavior = MouseEventHandler<HTMLButtonElement>;

export type ButtonTypeProps = {
  children?: ReactNode;
  variant: ButtonVariant;
  type: 'button' | 'submit' | 'reset';

  onClickBehavior?: onClickBehavior;
};

export type StyledButtonProps = {
  $variant: ButtonVariant;
  onClickBehavior?: onClickBehavior;
};
