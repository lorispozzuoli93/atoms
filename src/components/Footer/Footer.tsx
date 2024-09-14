import React from "react";
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footerContainer">
        <div className="footerLinks">
            <p>Il gruppo</p>
            <p>Note Legali</p>
            <p>Chi siamo</p>
            <p>Condizioni d'uso</p>
            <p>Privacy</p>
            <p>Servizi</p>
            <p>Pubblicità</p>
            <div className="footerCopyrightMobile">© 1994-2023 Vita Società Editrice S.p.A.</div>
        </div>   
        <div className="footerCopyrightDesktop">© 1994-2023 Vita Società Editrice S.p.A.</div>
    </footer>
  );
};

export default Footer;