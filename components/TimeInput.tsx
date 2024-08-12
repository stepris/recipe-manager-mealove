import styled, { css } from 'styled-components';

export default function TimeInput({ time, onTimeChange, what }) {
  let hours;
  let minutes;
  if (time <= 59) {
    hours = 0;
    minutes = time;
  } else {
    hours = Math.floor(time / 60);
    minutes = time % 60;
  }

  const handleChangeHours = (event) => {
    const { value } = event.target;
    if (value === '') {
      const sum = 0 * 60 + minutes;
      onTimeChange(sum);
    } else {
      const sum = parseInt(value) * 60 + minutes;
      onTimeChange(sum);
    }
  };

  const handleChangeMinutes = (event) => {
    const { value } = event.target;
    if (value === '') {
      const sum = hours * 60;
      onTimeChange(sum);
    } else if (value > 59) {
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

const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  padding-bottom: var(--spacing-2);
  text-transform: capitalize;
`;

const StyledElementGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-2);
`;

const StyledLabelSmall = styled.label`
  font: var(--font-headline-3);
`;

const StyledInput = styled.input`
  height: 2rem;
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  text-align: center;
  font: var(--font-input);
  ${({ $isMedium }) =>
    $isMedium &&
    css`
      width: 60px;
    `}
  ${({ $leftAlign }) =>
    $leftAlign &&
    css`
      text-align: left;
    `}
`;
