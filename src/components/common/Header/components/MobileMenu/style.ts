import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.veryLightGrey};

  max-width: 343px;
  padding: 48px;

  z-index: 10;

  ul {
    list-style: none;

    li div {
      display: flex;

      border: none;
      width: 247px;

      padding: 16px 0;
      
    }
  }
`;
