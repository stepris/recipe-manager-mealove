export type TimeInputProps = {
  time: number;
  onTimeChange: (newPrepTime: number) => void;
  what: 'prep' | 'cooking';
};
