import React from 'react';
import './FourthSection.css'
import RightArrowWhiteIcon from '../../assets/Icons/RightArrowWhiteIcon';
import tag13 from './../../assets/images/Tag13.png';
import details14 from './../../assets/images/Details14.png';
import video2 from './../../assets/images/Video2.png';
import tag14 from './../../assets/images/Tag14.png';
import details17 from './../../assets/images/Details17.png';
import tag15 from './../../assets/images/Tag15.png';
import details18 from './../../assets/images/Details18.png';
import tag3 from './../../assets/images/Tag3.png';
import details3 from './../../assets/images/Details3.png';
import tag16 from './../../assets/images/Tag16.png';
import details19 from './../../assets/images/Details19.png';

const FourthSection: React.FC = () => {
  return (
    <>
    <div className='gridContainerFourth'>
        <div className='alignToRightFourth'>
          <div>
            <img src={tag13} alt="Tag13" />
          </div>
          <div>
            <h2 className='textBottomRightFourth'>
                La Kasbah mazarese nella quale si gusta la cultura araba
            </h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details14} alt="Details14" />
            </div>
            <div>
              <h3>Di Giovanni Gavardi</h3>
              <h4>3 Luglio 2022</h4>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
    </div>
    <div className="leftImage large" id="bottomRightImageSeconSectionMobile">
        <div>
        <img className='videoLeftImage' src={video2} alt="Video2" />
        </div>
        <div>
          <img className='leftImageTag' src={tag13} alt="Tag13" />
        </div>
        <div>
            <h2>Donne e nuove generazioni: con loro riparte l’Italia</h2>
        </div>
        <div className='bannerContentLeftImage'>
          <div>
            <img src={details14} alt="Details14" />
          </div>
          <div>
            <h3>Di Giovanni Gavardi</h3>
            <h4>3 Luglio 2022</h4>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
      <div className='gridContainerFourthBottom'>
        <div className='bannerItem' id="leftImageSeconSectionFourth">
          <div>
            <img src={tag14} alt="Tag14" />
          </div>
          <div>
            <h2>“Qui Odessa”, fotografie, progetti e solidarietà</h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details17} alt="Details17" />
            </div>
            <div>
              <h3>Di Dynamo Academy</h3>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
        <div className='bannerItem' id="centerImageSeconSectionFourth">
          <div>
            <img src={tag15} alt="Tag15" />
          </div>
          <div>
            <h2>Uccisa ad Haiti suor Luisa, era l'angelo dei bambini</h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details18} alt="Details18" />
            </div>
            <div>
              <h3>Di Lucia Capuzzi</h3>
              <h4>1 luglio 2022</h4>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
        <div className='bannerItem' id="leftImageSeconSection">
          <div>
            <img src={tag3} alt="Tag3" />
          </div>
          <div>
            <h2>Il fundraising in rotta verso Giardini-Naxos</h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details3} alt="Details3" />
            </div>
            <div>
              <h3>Di Redazione</h3>
              <h4>1 Luglio 2022</h4>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
        <div className='bannerItem' id="rightImageSeconSectionMobile">
          <div>
            <img src={tag16} alt="Tag16" />
          </div>
          <div>
            <h2>Lisa, il modello Croce Rossa per l'inclusione lavorativa</h2>
          </div>
          <div className='bannerContent'>
            <div>
              <img src={details19} alt="Details19" />
            </div>
            <div>
              <h3>Di Francesco Palazzo</h3>
              <h4>20 giugno 2022</h4>
            </div>
          </div>
          <div className='arrow'>
            <RightArrowWhiteIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;