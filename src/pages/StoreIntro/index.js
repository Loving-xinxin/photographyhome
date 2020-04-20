import React, { Component } from 'react';
import { storeIntro } from './mock';
import './index.scss';
export default class index extends Component {
  render() {
    return (
      <div className="store-wrap">
        {storeIntro.map((item, index) => (
          <div className="store-card" key={index}>
            <img src={item.imgSrc} alt="" />
            <div className="desc-wrap">
              <p>{item.title}</p>
              <p>{item.location}</p>
              <p>主营业务:{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
