import styled, { css } from 'styled-components';

interface ProjectProps {
  isFeatured: boolean;
}

const Project = styled.article<ProjectProps>`
  position: relative;

  width: 311px;
  height: 240px;

  img {
    filter: brightness(65%);
  }

  a {
    text-decoration: none;
    margin-top: 4px;
    opacity: .75;
  }

  ${({ isFeatured }) => {
    if (isFeatured) {
      return css`
        .number-wrapper {
          position: absolute;

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            display: none;
          }

          z-index: 1;
        }
      `;
    }

    return css`
      .number-wrapper {
        display: none;
      }
    `;
  }}

  .text-content-wrapper {
    position: absolute;

    bottom: 24px;
    left: 24px;

    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 573px;
    height: 240px;

    .number-wrapper {
      top: 16px;
      right: 16px;
    }

    .text-content-wrapper {
      bottom: 40px;
      left: 40px;
    }

    & + & {
      margin-top: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 560px;
    max-width: 350px;

    .number-wrapper {
      top: 32px;
      right: -5px;
    }

    .text-content-wrapper {
      bottom: 40px;
      left: 40px;
    }

    & + & {
      margin-top: 0;
    }
  }
`;

export default Project;
