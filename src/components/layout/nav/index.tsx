import Logo from "./logo";
import MobileNav from "./mobile-nav";
import NavList from "./nav-list";

const Navbar = () => {
  return (
    <nav className="mb-4 mt-2 flex items-center justify-between gap-4" role="navigation">
      <Logo />

      <div className="hidden sm:block">
        <NavList />
      </div>

      <div className="block sm:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
