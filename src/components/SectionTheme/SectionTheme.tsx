import React, { useState } from 'react';
import './SectionTheme.css'

const categoryItems: string[] = [
  "Ambiente",
  "Economia",
  "Mondo",
  "Non Profit",
  "Politica",
  "Società",
  "Welfare",
];

const buttonBackgroundColors: { [key: number]: string } = {
  0: "#E2F1E8",
  2: "#F1DADA",
  4: "#F1F1E2",
};

const SectionTheme: React.FC = () => {
  const [isButtonsVisible, setIsButtonsVisible] = useState<boolean>(true);

  const toggleButtonsVisibility = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };

  return (
    <div className="sectionContent">
      <div className='titleContainer'>
        <h1 className='title'>Tutti i temi</h1>
        <span onClick={toggleButtonsVisibility} className={`dropdownArrow ${isButtonsVisible ? 'open' : ''}`}>▼</span>
      </div>
      {isButtonsVisible && (
      <div className="categoryButtons">
        {categoryItems.map((item, index) => (
          <button key={index} className="categoryButton" style={{ backgroundColor: buttonBackgroundColors[index] }}>
            {item}
          </button>
        ))}
      </div>
      )}
    </div>
  );
};

export default SectionTheme;