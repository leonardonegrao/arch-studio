import { StyledBurger } from './style';

interface BurgerProps {
  open: boolean;
  setOpen: Function;
}

export default function Burger({ open, setOpen }: BurgerProps) {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      title="Open menu"
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
