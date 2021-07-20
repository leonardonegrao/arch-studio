import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;

  margin-left: auto;
  margin-right: auto;
`

export const PageContent = styled.div`

`

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
`