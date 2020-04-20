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
            title: '写真',
            picShow: picShow,
          }}
        />
      </div>
    );
  }
}
