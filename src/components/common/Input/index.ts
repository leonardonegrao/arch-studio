import styled, { css } from 'styled-components';

interface InputProps {
  isValid?: boolean;
}

const StyledInput = styled.input<InputProps>`
  border: none;
  outline: none;

  border-bottom: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};

  width: 100%;
  height: 47px;

  &::placeholder {
    font-family: 'Spartan', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  ${({ isValid }) => (isValid === false) && css`
    border-bottom: 1px solid red;
  `}
`;

export default StyledInput;
