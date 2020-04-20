import React, { Component } from 'react';
import { storeIntro } from './mock';
import './index.scss';
export default class index extends Component {
  render() {
    return (
      <div className="chatOur-wrap">
        {storeIntro.map((item, index) => (
          <div className="chatOur-card" key={index}>
            <img src={item.imgSrc} alt="" />
            <div className="desc-wrap">
              <p>QQ:{item.QQ}</p>
              <p>邮箱:{item.email}</p>
              <p>电话号码:{item.phoneNum}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
