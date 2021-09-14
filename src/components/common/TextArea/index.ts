import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  border: none;
  outline: none;

  border-bottom: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};

  width: 100%;
  height: 95px;
  resize: none;

  &::placeholder {
    font-family: 'Spartan', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export default StyledTextArea;
