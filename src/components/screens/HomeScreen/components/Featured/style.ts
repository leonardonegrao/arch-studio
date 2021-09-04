import styled from 'styled-components';

export const FeaturedProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

export const FeaturedProject = styled.article`
  
`;
