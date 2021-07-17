import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

export default class TagCloudAbout extends Component {
  componentDidMount() {
    document.body.classList.add("color-change-body-about");
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  componentWillUnmount() {
    document.body.classList.remove("color-change-body-about");
  }



  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          <TagCloud

            className="tag-cloud"
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: '#3DCE65'
                }),
              padding: 5
            }}
          >
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}
            >
              javascript
            </div>
            <div style={styles.large} style={{
              fontFamily: 'Helvetica',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: randomColor()
            }}>ReactJS</div>
            <div style={styles.large}>VueJS</div>
            <div style={styles.large}>Jquery</div>
            <div style={styles.large}>Json</div>
            <div style={styles.large}
              style={{
                fontFamily: 'Verdana',
                fontSize: 50,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}
            >Sass</div>
            <div style={{ fontFamily: 'courier' }}>ES6</div>
            <div style={{ fontSize: 30 }}>Git</div>
            <div style={{ fontStyle: 'italic' }}>Code Pen</div>
            <div style={{ fontWeight: 200 }}>MongoDB</div>
            <div style={{ color: 'green' }}>Unity</div>


            <div>Phyton</div>
            <div>Django</div>
            <div>CSS</div>
            <div style={styles.small}>HTML</div>
            <div style={styles.small}>Redux</div>
            <div style={styles.small}>Node JS</div>
          </TagCloud>
        </div>
      </div>
    );
  }
}


