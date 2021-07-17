import React, { Component } from 'react';
import TagCloudAbout from '../tag-cloud/tag-cloud-about';
import { Link } from 'react-router-dom';


export default class About extends Component {
  constructor() {
    super();

    this.state = {
      active: true,
      className: ["m-left"]
    }
  }


  render() {

    return (
      <div className="main-info-section" >
        <div className="left-column text">
          <h1 className="container-text-animation"
          >
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              H
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              i
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              ,
            </span>
            <br />
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              I
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              '
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              m
            </span>

            <span
              className="name space-between"
            >
              B
            </span>
            <span
              className="name"
            >
              r
            </span>
            <span
              className="name"
            >
              y
            </span>
            <span
              className="name"
            >
              a
            </span>
            <span
              className="name"
            >
              n
            </span>
            <span
              className="name"
            >
              ,
            </span>
            <br />
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              W
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              e
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              b
            </span>

            <span

              className={this.state.active ? "space-between" : "jello-vertical space-between"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              D
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              e
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              v
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              e
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              l
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              o
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              p
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              e
            </span><span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              r
            </span>
            <span
              className={this.state.active ? "" : "jello-vertical"}
              onMouseEnter={() => this.setState({ active: false })}
              onMouseOut={() => this.setState({ active: true })}
            >
              .
            </span>
            <br />
          </h1>
          <p>CSS / JavaScript / React</p>
          <Link className="a" to="/contact">Contact me</Link>
        </div>

        <div className="right-column">
          <TagCloudAbout />
        </div>
      </div >
    );
  }
}
