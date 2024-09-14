import React from 'react';
import './FifthSection.css';
import RightArrowWhiteIcon from '../../assets/Icons/RightArrowWhiteIcon';
import tag17 from './../../assets/images/Tag17.png';
import details20 from './../../assets/images/Details20.png';
import tag18 from './../../assets/images/Tag18.png';
import details21 from './../../assets/images/Details21.png';
import tag20 from './../../assets/images/Tag20.png';
import details23 from './../../assets/images/Details23.png';
import tag21 from './../../assets/images/Tag21.png';
import details24 from './../../assets/images/Details24.png';
import tag22 from './../../assets/images/Tag22.png';
import details25 from './../../assets/images/Details25.png';

const FifthSection: React.FC = () => {
  return (
    <div className='gridContainerFifth'>
        <div className='gridContentFifth'>
            <div className='gridItemFifth' id='topImageFiftItem'>
                <div className='gridItemWrapperFitfh'>
                    <div className='gridItemTextFifth'>
                        <div>
                            <img src={tag17} alt="Tag17" />
                        </div>
                        <div>
                            <h2>Gli anziani del Sicomoro spopolano su TikTok</h2>
                        </div>
                        <div>
                            <img src={details20} alt="Details20" />
                        </div>
                    </div>
                    <div className='arrow'>
                        <RightArrowWhiteIcon />
                    </div>
                </div>
            </div>
            <div className='gridItemFifth' id='centerFirstImageFiftItem'>
                <div className='gridItemWrapperFitfh'>
                    <div className='gridItemTextFifth'>
                        <div>
                            <img src={tag18} alt="Tag18" />
                        </div>
                        <div>
                            <h2>"Emergenza sordi": quando un'app ti salva la vita</h2>
                        </div>
                        <div>
                            <img src={details21} alt="Details21" />
                        </div>
                    </div>
                    <div className='arrow'>
                        <RightArrowWhiteIcon />
                    </div>
                </div>
            </div>
            <div className='gridItemFifth' id='centerBottomImageFiftItem'>
                <div className='gridItemWrapperFitfh'>
                    <div className='gridItemTextFifth'>
                        <div>
                            <img src={tag21} alt="Tag21" />
                        </div>
                        <div>
                            <h2>Diego, il fruttivendolo che ha scelto la cooperazione sociale</h2>
                        </div>
                        <div>
                            <img src={details24} alt="Details24" />
                        </div>
                    </div>
                    <div className='arrow'>
                        <RightArrowWhiteIcon />
                    </div>
                </div>
            </div>
            <div className='gridItemFifth' id='bottomImageFiftItem'>
                <div className='gridItemWrapperFitfh'>
                    <div className='gridItemTextFifth'>
                        <div>
                            <img src={tag20} alt="Tag20" />
                        </div>
                        <div>
                            <h2>Pedalare "Sicily Coast to Coast" per essere più inclusivi</h2>
                        </div>
                        <div>
                            <img src={details23} alt="Details23" />
                        </div>
                    </div>
                    <div className='arrow'>
                        <RightArrowWhiteIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className='gridContentFifthRight' id="leftImageSeconSectionFifth">
            <div className='bannerItemFifth'>
                <div>
                    <img src={tag22} alt="Tag2" />
                </div>
                <div>
                    <h2>Leopoli, andata + ritorno</h2>
                </div>
                <div className='bannerContent'>
                    <div>
                        <img src={details25} alt="Details5" />
                    </div>
                <div>
                    <h3>Di Gilda Sciortino</h3>
                    <h4>14 Luglio 2022</h4>
                </div>
                </div>
                <div className='arrow'>
                    <RightArrowWhiteIcon />
                </div>
            </div>
        </div>
    </div>
  );
};

export default FifthSection;