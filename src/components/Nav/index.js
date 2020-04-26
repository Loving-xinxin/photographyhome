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
          src="https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB_%E5%A9%9A%E7%A4%BC%E8%B7%9F%E6%8B%8D.jpg"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/weddingPic`}>婚纱照</Link>}>
      <NavLink to="/weddingPic" className="submenu submenu2">
        <img
          src="https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB_%E5%A9%9A%E7%BA%B1.jpg"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/portrait`}>写真</Link>}>
      <NavLink to="/portrait" className="submenu submenu3">
        <img
          src="https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB_%E5%86%99%E7%9C%9F.jpg"
          alt=""
        />
      </NavLink>
    </SubMenu>
    <SubMenu title={<Link to={`/graduationSeason`}>毕业季</Link>}>
      <NavLink to="/graduationSeason" className="submenu submenu4">
        <img
          src="https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/%E4%BA%A7%E5%93%81%E5%88%86%E7%B1%BB_%E6%AF%95%E4%B8%9A%E5%AD%A3.jpg"
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
                src="https://loving-xinxin.coding.net/p/sheyingtupian/d/sheyingtupian/git/raw/master/logo.png"
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
