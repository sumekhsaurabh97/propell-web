import React from "react";
import { Fragment } from "react";

import MainCard from "../../components/MainCard/MainCard";


export default function DelightYourCustomers(props) {
  return (
    <div className="container">
      <div className={props.section_container}>
        <h1 className="section_heading">{props.section_heading}</h1>
        <p className="section_title">{props.section_title}</p>
      </div>
      <div className={`d-flex ${props.cards_dis}`}>
        {props.data.map((item, index) => {
          return (
            <Fragment key={index}>
              <MainCard
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                imgWidth={props.imgWidth}
                imgHeight={props.imgHeight}
                updateDate={item.updateDate}
                dateStyle={item.updateDate ? props.dateStyle : "dis_none"}
                cardDimension={props.cardDimension}
                cardImgStyle={props.cardImgStyle}
                title={item.title}
                titleStyle={item.title ? props.titleStyle : "dis_none"}
                para={item.para}
                paraStyle={item.para ? props.paraStyle : "dis_none"}
                summary={
                  <span>
                    <b>{item.summary ? item.summary.slice(0, 11) : null}</b>
                    {item.summary
                      ? item.summary.slice(11, item.summary.length - 1)
                      : null}
                  </span>
                }
                imgSrcShadow={item.imgSrcShadow}
                imgWidthShadow={80}
                imgHeightShadow={80}
                shadowStyle={item.imgSrcShadow ? props.shadowStyle : "dis_none"}
                summaryStyle={item.summary ? props.summaryStyle : "dis_none"}
                btnText={item.btnText}
                btnStyle={item.btnText ? props.btnStyle : "dis_none"}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
