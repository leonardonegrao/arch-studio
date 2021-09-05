import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
`;


export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
