import './Header.css';
import NavTabs from './NavTabs';

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">
        <span className="header__icon" aria-hidden="true">
       </span>
        Tälchen Silvesterlauf
      </h2>
      <NavTabs />
    </header>
  );
};

export default Header;
