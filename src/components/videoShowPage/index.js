import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './index.scss';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { videoShow } = this.props;
    return (
      <div className="video-wrap">
        <div className="video-containner">
          {videoShow.map((item, index) => (
            <Video
              className="video"
              // autoPlay
              loop
              muted
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              poster="http://sourceposter.jpg"
              key={index}
            >
              <source src={item.videoSrc} type="video/webm" />
            </Video>
          ))}
        </div>
      </div>
    );
  }
}
export default index;
