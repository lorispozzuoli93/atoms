import React, { useEffect, useState } from "react";
import './Navbar.css'; 
import AccountIcon from "../../assets/Icons/AccountIcon";
import MenuIcon from "../../assets/Icons/MenuIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import ToggleIcon from "../../assets/Icons/ToogleIcon";
import CancelIcon from "../../assets/Icons/CancelIcon";
import RightArrowIcon from "../../assets/Icons/RightArrowIcon";

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
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(menuItems[0]);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchDrawerToggle = () => {
    setSearchDrawerOpen(!searchDrawerOpen);
  };

  // Effect to toggle class on body or html element
  useEffect(() => {
    if (drawerOpen || searchDrawerOpen) {
      document.body.classList.add('drawer-open'); // Add class to body (or html)
    } else {
      document.body.classList.remove('drawer-open'); // Remove class when closed
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [drawerOpen, searchDrawerOpen]);

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
            {!searchDrawerOpen && (
              <div className="headeContentMenu" onClick={handleDrawerToggle}>
                  {drawerOpen ? <CancelIcon/> : <MenuIcon/>}
              </div>
            )}
            {!drawerOpen && (
              <div className="headeContentSearch searchBotton" onClick={handleSearchDrawerToggle}>
                {searchDrawerOpen ? <CancelIcon/>  : <SearchIcon/>}
              </div>
            )}
        </div>
        {/* Menu Drawer */}
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
         {/* Search Drawer */}
         <div className={`searchDrawer ${searchDrawerOpen ? 'open' : ''}`}>
          <div className="searchDrawerContent">
            <div className="gridContainerSearchDrawer">
            <div className="cardSearch">
            <div className="searchWrapper">
              <input
                type="text"
                className="searchInput"
                placeholder="Cerca"
              />
              <RightArrowIcon />
            </div>
              <p className="searchDescription">
                Cerca nel sito articoli, storie, interviste ed eventi
              </p>
            </div>
            <div className="cardSearch"></div>
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
