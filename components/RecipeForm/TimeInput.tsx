import {
  StyledInputElement,
  StyledH2,
  StyledElementGroup,
  StyledInput,
  StyledLabelSmall,
} from '@/components/RecipeForm/recipeStyles';
import { ChangeEvent } from 'react';
import { TimeInputPros } from '@/types';

export default function TimeInput({ time, onTimeChange, what }: TimeInputPros) {
  let hours;
  let minutes;
  if (time <= 59) {
    hours = 0;
    minutes = time;
  } else {
    hours = Math.floor(time / 60);
    minutes = time % 60;
  }

  const handleChangeHours = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      const sum = 0 * 60 + minutes;
      onTimeChange(sum);
    } else {
      const sum = parseInt(value) * 60 + minutes;
      onTimeChange(sum);
    }
  };

  const handleChangeMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      const sum = hours * 60;
      onTimeChange(sum);
    } else if (parseInt(value) > 59) {
      const sum = hours * 60;
      onTimeChange(sum);
    } else {
      const sum = hours * 60 + parseInt(value);
      onTimeChange(sum);
    }
  };

  return (
    <StyledInputElement>
      <StyledH2>{what} Time</StyledH2>
      <StyledElementGroup>
        <StyledInput
          type='number'
          id={`${what}TimeHours`}
          name={`${what}TimeHours`}
          $isMedium
          value={hours}
          onChange={handleChangeHours}
          min={0}
          max={99}
          maxLength={2}
        />
        <StyledLabelSmall htmlFor={`${what}TimeHours`}>h</StyledLabelSmall>

        <StyledInput
          type='number'
          id={`${what}TimeMins`}
          name={`${what}TimeMins`}
          $isMedium
          value={minutes}
          onChange={handleChangeMinutes}
          min={0}
          max={59}
          maxLength={2}
        />
        <StyledLabelSmall htmlFor={`${what}TimeMins`}>min</StyledLabelSmall>
      </StyledElementGroup>
    </StyledInputElement>
  );
}
