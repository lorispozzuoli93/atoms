import React from 'react';
import './NewsSection.css';
import tag from './../../assets/images/Tag.png';
import podcast from './../../assets/images/Podcast.png';
import details from './../../assets/images/Details.png';
import tag2 from './../../assets/images/Tag2.png';
import details2 from './../../assets/images/Details2.png';
import RightArrowIcon from '../../assets/Icons/RightArrowIcon';

const NewsSection: React.FC = () => {
  return (
    <>
    <div className="newsGrid">
      <div className="newsItem">
      </div>
    </div>
    <div className="secondBannerGrid">
      <div className="bannerItem large newsItem" id="leftImage"></div>
      <div className="newsItem" id="rightTopImage"></div>
      <div className="newsItem" id="rightBottomImage"></div>
    </div>
    <div className="secondBannerGridMobile">
      <div>
        <img src={tag} alt="Tag" />
      </div>
      <div>
        <img className='podcast' src={podcast} alt="Podcast" />
      </div>
      <div>
        <h2>Gli startupper? Li trovi al bistrot.
        Così il DumBo incuba relazioni</h2>
      </div>
      <div>
        <img src={details} alt="Details" />
      </div>
    </div>
    <div className="secondBannerGridMobile">
      <div>
        <img src={tag2} alt="Tag2" />
      </div>
      <div>
        <h2>Nelle città italiane tutti in piazza per
        e con Kiev</h2>
      </div>
      <div>
        <img src={details2} alt="Details2" />
      </div>
    </div>
    <div className="thirdBanner">
      <div>
        <h2>Il tuo supporto è fondamentale
        Dai il tuo contributo</h2>
      </div>
      <div className="thirdBannerContent">
        <h3>Dai il tuo contributo</h3>
        <RightArrowIcon/>
      </div>
    </div>
  </>
  );
};

export default NewsSection;