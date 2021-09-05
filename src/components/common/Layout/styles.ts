import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  margin: auto;
`;

export const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 573px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1110px;
  }  
`;

export const HeaderMarkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageMarker = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  div {
    height: 104px;
    width: 1px;
    background: ${({ theme }) => theme.colors.lightGrey};
    margin-bottom: 48px;
  }

  p {
    text-transform: uppercase;
    writing-mode: vertical-rl;
    letter-spacing: 15px;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  
  @media (min-width: 768px) {
    display: flex;
    margin-right: 33px;
  }

  @media (min-width: 1200px) {
    margin-right: 76px;
  }
`;
