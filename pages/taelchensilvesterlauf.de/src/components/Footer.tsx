import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © {currentYear} Tälchen Silvesterlauf. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

