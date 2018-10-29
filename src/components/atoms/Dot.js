import React, { Component } from 'react';
import { Icon } from 'antd';
import { Slug, Fade } from './Primitives';
import 'antd/dist/antd.css';

export default class Cell extends Component {
  render() {
    const { toggle, name, height, description, css, active } = this.props;
    return (
      <div
        className="cell"
        style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="circle" style={{ background: css }} />
              <div className="close">
                <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
          delay={active ? 0 : 400}
        >
          <div className="default">
            <div style={{ zIndex: 1 }}>{name}</div>
          </div>
        </Fade>
      </div>
    );
  }
}
