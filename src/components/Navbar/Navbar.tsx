import React, { useState } from "react";
import './Navbar.css'; 
import AccountIcon from "../../assets/Icons/AccountIcon";
import MenuIcon from "../../assets/Icons/MenuIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import ToggleIcon from "../../assets/Icons/ToogleIcon";
import CancelIcon from "../../assets/Icons/CancelIcon";

const menuItems = [
    "Tutti i temi",
    "Ambiente",
    "Economia",
    "Mondo",
    "Non Profit",
    "Politica",
    "Società",
    "Welfare",
  ];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(menuItems[0]);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
       <div className="statusBar"></div>
         <div className="menu">
            <div className="menuItem">Contribuisci</div>
            <div className="vl"></div>
            <div className="menuItem">Abbonati</div>
            <div className="menuLogin">
                <AccountIcon/>
                <div>Accedi</div>
            </div>
        </div>
        <div className="header">
            <div className="headeContentMenu" onClick={handleDrawerToggle}>
                {drawerOpen ? <CancelIcon/> : <MenuIcon/>}
            </div>
            {!drawerOpen && (
            <div className="headeContentSearch">
                 <SearchIcon/>
            </div>
            )}
        </div>
        <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
          <div className="drawerContent">
            <div className="gridContainer">
              <div className="card">Articoli<br/><span>Trend, dati e notizie dal terzo settore.</span></div>
              <div className="card">Storie<br/><span>Lettere ed approfondimenti dai fornitori complessi.</span></div>
              <div className="card">Interviste<br/><span>Racconti e voci di persone ed organizzazioni.</span></div>
              <div className="card">Opinioni<br/><span>Riflessioni e contributi dei nostri opinionisti.</span></div>
              <div className="card">Podcast<br/><span>Un luogo per dare voce a progetti visibili e sostenibili.</span></div>
              <div className="card">Bookazine<br/><span>Una rivista da leggere e un libro da conservare.</span></div>
            </div>
            <div className="gridContainerLower">
              <div className="lowerCard">Chi Siamo</div>
              <div className="lowerCard">Comitato editoriale</div>
              <div className="lowerCard">Servizi</div>
              <div className="lowerCard">Agenda / Eventi</div>
              <div className="lowerCard">Mappa dell’attivismo</div>
              <div className="lowerCard">Inchieste crowdfunding</div>
            </div>
          </div>
        </div>
        <div className="menuListContainer">
            <ul className="menuList">
            {menuItems.map((item) => (
                <li
                key={item}
                className={`menuListItem ${activeItem === item ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
                >
                {item}
                </li>
            ))}
            </ul>
            <div className="containerToggle">
                <ToggleIcon/>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
