import React from "react"

import styles from "../styles/conponents/image.module.scss"
// import { Link } from "gatsby"
class image extends React.Component {
  render() {

    const imgEffect = 'c_lfill,g_auto,f_auto,e_colorize:40,co_rgb:000000';
    const imgPlacehoderEffect = imgEffect + ',e_blur:600';
    const imgFileName = 'taylors-van.jpg';

    const imgWidth = 1920;
    const imgHeight = 700;

    const imgWidthTablet = 668;
    const imgHeightTablet = 244;

    const imgMobileSize = 420;

    let imgUrlBuilder = (w, h, e) => {
      return (
        `https://res.cloudinary.com/nickjohn/image/upload/w_` + w + `,h_` + h + `,` + e + `/v1547737894/taylors/` + imgFileName
      )
    }
    const imgUrl = imgUrlBuilder(imgWidth, imgHeight, imgEffect);

    const imgUrlD = `${imgUrlBuilder(imgWidth, imgHeight, imgEffect)} 1x, ${imgUrlBuilder((imgWidth * 2), (imgHeight * 2), imgEffect)} 2x`;
    const imgUrlT = `${imgUrlBuilder(imgWidthTablet, imgHeightTablet, imgEffect)} 1x, ${imgUrlBuilder((imgWidthTablet * 2), (imgHeightTablet * 2), imgEffect)} 2x`;
    const imgUrlM = `${imgUrlBuilder(imgMobileSize, imgMobileSize, imgEffect)} 1x, ${imgUrlBuilder((imgMobileSize * 2), (imgMobileSize * 2), imgEffect)} 2x`;

    return (

      // <section className={styles.image} style={{ backgroundImage: `url(${imgUrlBuilder(((imgWidth / 10) / 2), ((imgHeight / 10) / 2), imgPlacehoderEffect)})` }}>
      <picture>
        <source media="(min-width: 769px)"
          srcSet={imgUrlD} />
        <source media="(min-width: 481px)"
          srcSet={imgUrlT} />
        <source media="(min-width: 200px)"
          srcSet={imgUrlM} />
        <img src={imgUrl} alt="Taylor Domestic Appliances Van" />
      </picture>
      // </section >
    )
  }

}

export default image