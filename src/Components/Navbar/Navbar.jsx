import Container from "../../layouts/Container/Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

export const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <Logo />
        <UserMenu />
      </div>
    </Container>
  );
};
