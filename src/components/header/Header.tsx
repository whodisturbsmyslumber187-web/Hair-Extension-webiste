import StatusBar from "./StatusBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full">
      <StatusBar />
      <Navigation />
    </header>
  );
};

export default Header;