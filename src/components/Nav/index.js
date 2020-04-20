import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.scss';
const { SubMenu } = Menu;
const menu = (
  <Menu visible={true}>
    <SubMenu title={<Link to={`/weddingFollow`}>婚礼跟拍</Link>}>
      <NavLink to="/weddingFollow" className="submenu submenu1">
        <img
          src="https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/weddingPic`}>婚纱照</Link>}>
      <NavLink to="/weddingPic" className="submenu submenu2">
        <img
          src="https://pic3.pocoimg.cn/image/poco/works/62/2020/0402/18/15858228552490092_201206925.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/portrait`}>写真</Link>}>
      <NavLink to="/portrait" className="submenu submenu3">
        <img
          src="https://pic3.pocoimg.cn/image/poco/works/36/2020/0329/10/15854488091352054_200047878.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/graduationSeason`}>毕业季</Link>}>
      <NavLink to="/graduationSeason" className="submenu submenu4">
        <img
          src="https://pic3.pocoimg.cn/image/poco/works/62/2020/0402/18/15858228552490092_201206925.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&"
          alt=""
        />
      </NavLink>
    </SubMenu>
  </Menu>
);
class nav extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="nav-bar">
          <h1>
            <NavLink to="/home">
              <img
                src="https://open.youtu.qq.com/static/img/navibar_logo_youtuai.5ee86d5.png"
                alt=""
              />
            </NavLink>
          </h1>
          <div className="nav">
            <NavLink to="/home" activeclassname="active">
              首页
            </NavLink>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link "
                onClick={(e) => e.preventDefault()}
              >
                产品分类 <DownOutlined />
              </a>
            </Dropdown>
            <NavLink to="/storeIntro" activeclassname="active">
              店面介绍
            </NavLink>
            <NavLink to="/teamIntro" activeclassname="active">
              团队简介
            </NavLink>
            <NavLink to="/chatOur" activeclassname="active">
              联系我们
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default nav;
