import React, { Component } from 'react';
import { teamList } from './mock';
import './index.scss';
export default class index extends Component {
  render() {
    // console.log(teamList);
    return (
      <div className="teamwrap">
        <div className="teamDesc">
          <div className="teamDesc-containner">
            <h2>团队简历</h2>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们影像从事影视发展十二年，主要承接大学、中学、小学毕业季、婚礼跟拍、
              婚纱旅拍及企事业宣传片等业务。
              秉承口碑传承、个性创新的服务理念，注重客户至上、品质优先的服务宗旨。
              用瞬间为您记录意义的永恒，就这样，一直做下去，我们——在路上…
            </p>
            <p> ——我们影像</p>
          </div>
        </div>
        <div className="picDesc">
          <div className="picDescContainner" key={index}>
            {teamList.map((item, index) => (
              <img src={item.img} alt="" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
