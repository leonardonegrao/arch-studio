import styled from 'styled-components';

export const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 72px;

  max-width: 311px;

  .featured-title {
    margin-bottom: 48px;
  }
`;

export const FeaturedProjectsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
