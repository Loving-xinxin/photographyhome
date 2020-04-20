import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import Banner from '../../components/Banner';
import PicCard from '../../components/picCard';
import img_01 from './images/img_01.jpg';
import img_02 from './images/img_02.jpg';
import img_03 from './images/img_03.jpg';
import './index.scss';
class home extends Component {
  state = {};
  render() {
    const picCard = [
      {
        title: '婚礼跟拍',
        btnText: '立即浏览',
        btnLink: '/weddingFollow',
        width: ' 400px',
        height: ' 550px',
        bgcImg: img_02,
        picWordHeight: '550px',
      },
      {
        title: '婚纱照',
        btnText: '立即浏览',
        btnLink: '/weddingPic',
        width: ' 400px',
        height: ' 550px',
        bgcImg: img_01,
        picWordHeight: '550px',
      },
      {
        title: '写真',
        btnText: '立即浏览',
        btnLink: '/portrait',
        width: ' 400px',
        height: ' 550px',
        bgcImg: img_03,
        picWordHeight: '550px',
      },
      {
        title: '毕业季',
        btnText: '立即浏览',
        width: ' 400px',
        height: ' 550px',
        btnLink: '/graduationTime',
        bgcImg: img_02,
        picWordHeight: '550px',
      },
    ];
    const videoShow = [
      {
        width: '600px',
        hight: '400px',
        title: '婚礼',
        btnText: '立即浏览',
        btnLink: '/weddingVideo',
        bgcImg: img_02,
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '婚纱',
        btnText: '立即浏览',
        btnLink: '/weddingDressVideo',
        bgcImg: img_01,
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '写真',
        btnText: '立即浏览',
        btnLink: '/portraitVideo',
        bgcImg: img_03,
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '毕业季',
        btnText: '立即浏览',
        btnLink: '/graduationTimeVideo',
        bgcImg: img_02,
        picWordHeight: '400px',
      },
    ];

    return (
      <div className="homeWrap">
        <div className="containner">
          <div className="banner">
            <Banner />
          </div>
          <section>
            <div className="picDesc">
              <div className="h2Contain">
                <h2>照片展示</h2>
              </div>
              <div className="picDescContainner">
                <div className="picDesc-left">
                  <PicCard picCard={picCard} />
                </div>
                <div className="picDesc-rigth">
                  <div className="picCard">
                    <h4>最美证件照</h4>
                    <NavLink to="/idPhoto" className="toUnderstand">
                      <Button>立即体验</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="picDesc">
              <div className="h2Contain">
                <h2>视频展示</h2>
              </div>
              <div className="picDescContainner">
                <PicCard picCard={videoShow} />
              </div>
            </div>
            <div className="picDesc">
              <div className="h2Contain">
                <h2>团队介绍</h2>
              </div>
              <div className="picDescContainner">
                <div className="picCard teamPic">
                  <div className="team">
                    <NavLink to="/teamIntro">
                      <Button>立即了解</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default home;
