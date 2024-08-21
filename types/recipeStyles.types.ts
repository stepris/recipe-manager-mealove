export interface StyledFormComponentProps {
  readonly $leftAlign?: boolean;
  readonly $isMedium?: boolean;
  readonly $isLarge?: boolean;
}

export type StyledImagePreviewProps = {
  src?: string | ArrayBuffer | null;
  alt: string;
  width: string;
  height: string;
};

export type StyledImageUpladContainerProps = {
  $isDragOver: boolean;
};
