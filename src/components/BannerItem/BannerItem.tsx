import React from 'react';
import './BannerItem.css';

interface BannerItemProps {
  tagImage: string;
  detailsImage: string;
  title: string;
  author: string;
  date: string;
  backgroundColor: string;
  arrowIcon: JSX.Element;
}

const BannerItem: React.FC<BannerItemProps> = ({ 
  tagImage, 
  detailsImage, 
  title, 
  author, 
  date, 
  backgroundColor,
  arrowIcon 
}) => {
// esempio
// <BannerItem
//         tagImage={tag1}
//         detailsImage={details1}
//         title="“Qui Odessa”, fotografie, progetti e solidarietà"
//         author="Di Redazione"
//         date="13 Luglio 2022"
//         backgroundColor="#e63036"
//         arrowIcon={<RightArrowWhiteIcon />}
//       />
  return (
    <div className="bannerItem" style={{ backgroundColor }}>
      <div>
        <img src={tagImage} alt="Tag" />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className="bannerContent">
        <div>
          <img src={detailsImage} alt="Details" />
        </div>
        <div>
          <h3>{author}</h3>
          <h4>{date}</h4>
        </div>
      </div>
      <div className="arrow">
        {arrowIcon}
      </div>
    </div>
  );
};

export default BannerItem;