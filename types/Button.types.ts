import { ReactNode } from 'react';

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
};

export type StyledButtonProps = {
  $variant: ButtonVariant;
};
