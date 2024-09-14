import React from 'react';
import './SecondSection.css'
import RightArrowWhiteIcon from '../../assets/Icons/RightArrowWhiteIcon';
import tag3 from './../../assets/images/Tag3.png';
import details3 from './../../assets/images/Details3.png';
import tag4 from './../../assets/images/Tag4.png';
import details4 from './../../assets/images/Details4.png';
import tag5 from './../../assets/images/Tag5.png';
import details5 from './../../assets/images/Details5.png';
import tag11 from './../../assets/images/Tag11.png';
import podcast from './../../assets/images/Podcast.png';
import details10 from './../../assets/images/Details10.png';
import details9 from './../../assets/images/Details9.png';


const SecondSection: React.FC = () => {

  return (
    <>
    <div className='gridContainer'>
      <div className='bannerItem' id="leftImageSeconSection">
        <div>
          <img src={tag3} alt="Tag3" />
        </div>
        <div>
          <h2>“Qui Odessa”, fotografie, progetti e solidarietà</h2>
        </div>
        <div className='bannerContent'>
          <div>
            <img src={details3} alt="Details3" />
          </div>
          <div>
            <h3>Di Redazione</h3>
            <h4>13 Luglio 2022</h4>
          </div>
        </div>
        <div className='arrow'>
          <RightArrowWhiteIcon />
        </div>
      </div>
      <div className='bannerItem' id="centerImageSeconSection">
      <div>
          <img src={tag4} alt="Tag4" />
        </div>
        <div>
          <h2>Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne</h2>
        </div>
        <div className='bannerContent'>
          <div>
            <img src={details4} alt="Details3" />
          </div>
          <div>
            <h3>Di Luca Cereda</h3>
            <h4>13 Luglio 2022</h4>
          </div>
        </div>
        <div className='arrow'>
          <RightArrowWhiteIcon />
        </div>
      </div>
      <div className='bannerItem' id="rightImageSeconSection">
        <div>
          <img src={tag5} alt="Tag5" />
        </div>
        <div>
          <h2>“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento</h2>
        </div>
        <div className='bannerContent'>
          <div>
            <img src={details5} alt="Details5" />
          </div>
          <div>
            <h3>Di Emiliano Moccia</h3>
            <h4>13 Luglio 2022</h4>
          </div>
        </div>
        <div className='arrow'>
          <RightArrowWhiteIcon />
        </div>
      </div>
    </div>
    <div className='gridContainerBottom'>
      <div className='bannerItem' id="bottomLeftImageSeconSection">
        <div>
          <img src={tag11} alt="Tag11" />
        </div>
        <div>
          <img className="podcast" src={podcast} alt="Podcast" />
        </div>
        <div>
          <h2>Troppi abusi nello sport minorile, il governo interviene</h2>
        </div>
        <div className='bannerContent'>
          <div>
            <img src={details9} alt="Details9" />
          </div>
          <div>
            <h3>Di Diletta Grella</h3>
            <h4>13 Luglio 2022</h4>
          </div>
        </div>
        <div className='arrow'>
          <RightArrowWhiteIcon />
        </div>
      </div>
      <div className='bannerItem' id="bottomRightImageSeconSection">
        <div>
          <div>
            <img src={tag11} alt="Tag11" />
          </div>
          <div>
            <h2>Società
                Donne e nuove generazioni: con loro riparte l’Italia
                Di Anna Spena
                7 Luglio 2022
            </h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details10} alt="Details10" />
            </div>
            <div>
              <h3>Di Anna Spenna</h3>
              <h4>13 Luglio 2022</h4>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SecondSection;