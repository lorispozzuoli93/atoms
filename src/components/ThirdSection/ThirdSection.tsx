import React from 'react';
import './ThirdSection.css'
import details12 from './../../assets/images/Details12.png';
import details13 from './../../assets/images/Details13.png';
import details14 from './../../assets/images/Details14.png';
import details15 from './../../assets/images/Details15.png';
import details16 from './../../assets/images/Details16.png';

const ThirdSection: React.FC = () => {
  return (
    <div className='gridContainerThird'>
      <div className='cardThird'>
        <h2>Il blog</h2>
      </div>
      <div className='cardThird'>
        <div className='cardThirdImg'>
          <img src={details12} alt="Details12" />
        </div>
        <div>
          <h3>Il becco dell'oca</h3>
          <h4>Di Paolo Dell'Oca</h4>
        </div>
      </div>
      <div className='cardThird'>
        <div className='cardThirdImg'>
          <img src={details13} alt="Details13" />
        </div>
        <div>
          <h3>Disarmato</h3>
          <h4>Di Pasquale Pugliese</h4>
        </div>
      </div>
      <div className='cardThird'>
        <div className='cardThirdImg'>
          <img src={details14} alt="Details14" />
        </div>
        <div>
          <h3>Battitiperminuto</h3>
          <h4>Di Lorenzo Maria Alvaro</h4>
        </div>
      </div>
      <div className='cardThird'>
        <div className='cardThirdImg'>
          <img src={details15} alt="Details15" />
        </div>
        <div>
          <h3>La zanzarella</h3>
          <h4>Di Elena Zanella</h4>
        </div>
      </div>
      <div className='cardThird'>
        <div className='cardThirdImg'>
          <img src={details16} alt="Details16" />
        </div>
        <div>
          <h3>Impact Q&A</h3>
          <h4>Di Laura Orestano</h4>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;