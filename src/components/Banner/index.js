import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.scss";
class home extends Component {
  state = {};
  render() {
    return (
      <div className="home-wrap">
        <Carousel autoplay dots={true}>
          <div>
            <h3>
              <img
                src="https://open.youtu.qq.com/static/img/banner_rlsb.6f9a428.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://open.youtu.qq.com/static/img/banner_rltx.2790d51.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://open.youtu.qq.com/static/img/bk_rtsb.194b25e.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://open.youtu.qq.com/static/img/banner_you_video.e219c9f.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://open.youtu.qq.com/static/img/banner_pic_recognition.974c774.jpg"
                alt=""
              />
            </h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default home;
