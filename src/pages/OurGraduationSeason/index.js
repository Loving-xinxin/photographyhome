import React, { Component } from 'react';
import PicShowPage from '../../components/picShowPage';
import { picShow } from './mock';
import './index.scss';
export default class index extends Component {
  render() {
    return (
      <div className="teamwrap">
        <PicShowPage
          Intro={{
            title: '我们影像专属毕业季',
            picShow: picShow,
          }}
        />
      </div>
    );
  }
}
