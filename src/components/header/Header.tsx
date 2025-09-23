import StatusBar from "./StatusBar";
import Navigation from "./Navigation";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className="w-full">
      <StatusBar />
      <div 
        className={`fixed top-10 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Navigation />
      </div>
    </header>
  );
};

export default Header;