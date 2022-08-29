type NavbarProps = {
  children?: string;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};
