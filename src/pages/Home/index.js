import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import Banner from '../../components/Banner';
import PicCard from '../../components/picCard';
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
        height: ' 266px',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%A9%9A%E7%A4%BC%E8%B7%9F%E6%8B%8D.jpg',
        picWordHeight: '266px',
      },
      {
        title: '婚纱照',
        btnText: '立即浏览',
        btnLink: '/weddingPic',
        width: ' 400px',
        height: ' 266px',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%A9%9A%E7%BA%B1.jpg',
        picWordHeight: '266px',
      },
      {
        title: '写真',
        btnText: '立即浏览',
        btnLink: '/portrait',
        width: ' 400px',
        height: ' 266px',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%86%99%E7%9C%9F.jpg',
        picWordHeight: '266px',
      },
      {
        title: '毕业季',
        btnText: '立即浏览',
        width: ' 400px',
        btnLink: '/graduationTime',
        height: ' 266px',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E6%AF%95%E4%B8%9A%E5%AD%A3.jpg',
        picWordHeight: '266px',
      },
    ];
    const videoShow = [
      {
        width: '600px',
        hight: '400px',
        title: '婚礼',
        btnText: '立即浏览',
        btnLink: '/weddingVideo',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%A9%9A%E7%A4%BC%E8%B7%9F%E6%8B%8D.jpg',
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '婚纱',
        btnText: '立即浏览',
        btnLink: '/weddingDressVideo',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%A9%9A%E7%BA%B1.jpg',
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '写真',
        btnText: '立即浏览',
        btnLink: '/portraitVideo',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E5%86%99%E7%9C%9F.jpg',
        picWordHeight: '400px',
      },
      {
        width: '600px',
        hight: '400px',
        title: '毕业季',
        btnText: '立即浏览',
        btnLink: '/graduationTimeVideo',
        bgcImg:
          'https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E9%A6%96%E9%A1%B5_%E6%AF%95%E4%B8%9A%E5%AD%A3.jpg',
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
