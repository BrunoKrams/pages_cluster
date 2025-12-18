import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="#impressum" className="footer__link">Impressum</a>
          <span className="footer__separator">|</span>
          <a href="#contact" className="footer__link">Kontakt</a>
          <span className="footer__separator">|</span>
          <a href="#privacy" className="footer__link">Datenschutz</a>
        </div>
        <p className="footer__copyright">
          © {currentYear} Atelier Tälchen. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
