import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  position: relative;

  height: 560px;
  width: 100%;

  .content {
    position: absolute;
    z-index: 1;
    top: 180px;
    left: 32px;

    max-width: 311px;

    h1 {
      margin-bottom: 32px;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
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
