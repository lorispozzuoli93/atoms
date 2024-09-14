import React from 'react';
import './NewsSection.css';
import RightArrowIcon from '../../assets/Icons/RightArrowIcon';
import RightArrowWhiteIcon from '../../assets/Icons/RightArrowWhiteIcon';
import tag from './../../assets/images/Tag.png';
import podcast from './../../assets/images/Podcast.png';
import details from './../../assets/images/Details.png';
import tag2 from './../../assets/images/Tag2.png';
import details2 from './../../assets/images/Details2.png';
import tag7 from './../../assets/images/Tag7.png';
import details7 from './../../assets/images/Details7.png';
import tag8 from './../../assets/images/Tag8.png';
import details8 from './../../assets/images/Details8.png';
import video from './../../assets/images/Video.png';
import tag9 from './../../assets/images/Tag9.png';
import details9 from './../../assets/images/Details9.png';
import tag10 from './../../assets/images/Tag10.png';
import details10 from './../../assets/images/Details10.png';

const NewsSection: React.FC = () => {
  return (
    <>
    <div className="firstBannerGrid">
      <div className='topImage'>
        <div>
          <img className='topImageTag' src={tag7} alt="Tag7" />
        </div>
        <div>
            <h2>Roccella Jonica, la Lampedusa che l'Italia ignora</h2>
        </div>
        <div className='bannerContent'>
          <div>
            <img src={details7} alt="Details7" />
          </div>
          <div>
            <h3>Di Alessandro Puglia</h3>
            <h4>20 giugno 2022</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="secondBannerGrid">
      <div className="leftImage large">
        <div>
        <img className='videoLeftImage' src={video} alt="Video" />
        </div>
        <div>
          <img className='leftImageTag' src={tag8} alt="Tag8" />
        </div>
        <div>
            <h2>Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura
                Un viaggio nel tempo che ha permesso al fotografo Fabiano Ventura di documentare gli sconvolgenti effetti dei cambiamenti climatici, mettendo a confronto le foto scattate durante i suoi 13 anni di ricerca con quelle realizzate dai fotografi-esploratori di fine ‘800 e inizio ‘900.
                Di Ugo Lombi
                14 Luglio 2022
            </h2>
        </div>
        <div className='bannerContentLeftImage'>
          <div>
            <img src={details8} alt="Details8" />
          </div>
          <div>
            <h3>Di Ugo Lombi</h3>
            <h4>14 luglio 2022</h4>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
      <div className='rightImage' id='rightTopImage'>
        <div>
          <img src={tag9} alt="Tag9" />
        </div>
        <div>
          <img className="podcast" src={podcast} alt="Podcast" />
        </div>
        <div>
            <h2>Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni</h2>
        </div>
        <div className='bannerContentLeftImage'>
          <div>
            <img src={details9} alt="Details9" />
          </div>
          <div>
            <h3>Di Diletta Grella</h3>
            <h4>14 luglio 2022</h4>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
      <div className='rightImage' id='rightBottomImage'>
        <div>
          <img src={tag10} alt="Tag10" />
        </div>
        <div>
            <h2>Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni</h2>
        </div>
        <div className='bannerContentLeftImage'>
          <div>
            <img src={details10} alt="Details10" />
          </div>
          <div>
            <h3>Di Anna Spenna</h3>
            <h4>14 luglio 2022</h4>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
    </div>
    <div className="secondBannerGridMobile">
      <div>
        <img src={tag} alt="Tag" />
      </div>
      <div>
        <img className="podcast" src={podcast} alt="Podcast" />
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