import React, { Component } from 'react';
import { videoShow } from './mock';
import VideoShowPage from '../../components/videoShowPage';
import './index.scss';
export default class index extends Component {
  render() {
    return (
      <div className="wrap">
        <h2>毕业季视频</h2>
        <VideoShowPage videoShow={videoShow} />
      </div>
    );
  }
}
