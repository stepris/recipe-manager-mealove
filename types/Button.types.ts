import { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant =
  | '$submit'
  | '$edit'
  | '$update'
  | '$cancel'
  | '$delete'
  | '$yes'
  | '$no';

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

type onClickBehavior = MouseEventHandler<HTMLButtonElement>;
