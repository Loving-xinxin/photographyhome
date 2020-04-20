import React, { Component } from 'react';
import './index.scss';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Intro } = this.props;
    console.log(Intro);
    return (
      <div className="pic-wrap">
        <div className="pic-containner">
          <h2>{Intro.title}</h2>
          <div className="pic-show">
            {Intro.picShow.map((item, index) => (
              <img src={item.img} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default index;
