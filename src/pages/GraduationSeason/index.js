import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
class graduationSeason extends Component {
  state = {};
  render() {
    const picCard = [
      {
        title: '我们影像专属毕业季',
        img:
          'https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&',
        btnLink: '/ourGraduationSeason',
        btnText: '立即浏览',
      },
      {
        title: '同班同学服装制作',
        img:
          'https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&',
        btnLink: '/costumeMaking',
        btnText: '立即浏览',
      },
      {
        title: '燕大日记校园纪念品',
        img:
          'https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&',
        btnLink: '/campusSouvenirs',
        btnText: '立即浏览',
      },
      {
        title: '强强联合酒店聚餐',
        img:
          'https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&',
        btnLink: '/hotelDinner',
        btnText: '立即浏览',
      },
    ];
    return (
      <div className="graduation-wrap">
        <div className="graduation-containner">
          {picCard.map((item, index) => (
            <div
              className="picCard"
              key={index}
              style={{ backgroundImage: 'url(' + item.img + ') ' }}
            >
              <div className="picCardWrap">
                <p>{item.title}</p>
                <NavLink to={item.btnLink}>
                  <Button>{item.btnText}</Button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default graduationSeason;
