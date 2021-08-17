import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  position: relative;

  .content {
    position: absolute;
    z-index: 1;

    h1 {
      margin-bottom: 26px;
    }
  }

  .about-us-background {
    filter: brightness(70%);
  }

  @media(min-width: ${({ theme }) => theme.breakpoints.md}) {
    .content {
      top: 168px;
      left: 58px;

      width: 445px;
    }

    width: 573px;
    height: 560px;
  }

  @media(min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .content {
      top: 180px;
      left: 190px;

      width: 544px;
    }

    width: 1110px;
    height: 560px;
  }
`;
