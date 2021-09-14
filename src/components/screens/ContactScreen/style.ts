import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const StyledContactScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const StyledContactDetails = styled.div`
  max-width: 311px;
  margin: auto;
  margin-top: 72px;

  & > h1 {
    margin-bottom: 48px;
  }

  .office {
    display: flex;
    flex-direction: column;

    .office__title {
      font-weight: 700;
    }
  }

  .office + .office {
    margin-top: 40px;
  }

  .office__link {
    margin-top: 16px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.veryDarkBlue};

      div {
        display: flex;
        align-items: center;
        gap: 24px;

        font-weight: 700;
      }
    }
  }

  ${breakpointsMedia({
    md: css`
      max-width: 573px;

      .office {
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        width: 573px;

        .office__content {
          max-width: 350px;

          span {
            display: block;
          }
        }
      }
    `,
  })}
`;

export const MapWrapper = styled.div`
  margin-top: 72px;
  margin-bottom: 72px;
`;

export const FormWrapper = styled.div`
  max-width: 311px;
  margin: auto;

  h1 {
    max-width: 50%;
    margin-bottom: 48px;
  }

  form {
    display: flex;
    flex-direction: column;
    
    gap: 40px;

    .submit-button {
      margin-left: auto;
    }
  }

  ${breakpointsMedia({
    md: css`
      max-width: 573px;

      h1 {
        max-width: 100%;
      }
    `,
    lg: css`
      display: flex;
      max-width: 1110px;

      h1 {
        max-width: 350px;
        font-size: 56px;
        line-height: 56px;
      }

      form {
        width: 730px;
      }
    `,
  })}
`;
