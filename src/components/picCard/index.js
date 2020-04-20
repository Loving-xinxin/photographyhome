import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './index.scss';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { picCard } = this.props;
    return (
      <div className="pic-wrap">
        {picCard.map((item, index) => (
          <div
            className="picCard"
            key={index}
            style={{
              backgroundImage: 'url(' + item.bgcImg + ')',
              width: item.width,
              height: item.height,
            }}
          >
            <div
              className="picWord"
              style={{
                height: item.picWordHeight,
              }}
            >
              <h4>{item.title}</h4>
              <NavLink to={item.btnLink} className="toUnderstand">
                <Button>{item.btnText}</Button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default index;
