import React from "react";
import Image from "next/image";

export default function MainCard(props) {
  return (
    <div className={props.cardDimension}>
      <div className={props.cardImgStyle}>
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
        />
        {/* ony for carousel shadow from hare */}
        <div className={props.shadowStyle} style={props.dis}>
          <Image
            src={props.imgSrcShadow}
            alt={props.imgAltShadow}
            width={props.imgWidthShadow}
            height={props.imgHeightShadow}
          />
        </div>
        {/* to here */}
      </div>
      <div>
      <p className={props.dateStyle}>{props.updateDate}</p>
      <p className={props.titleStyle}>{props.title}</p>
      <p className={props.paraStyle}>{props.para}</p>
      <p className={props.summaryStyle}>{props.summary}</p>
      <button className={props.btnStyle}>{props.btnText}</button>
      </div>
    </div>
  );
}
