import React, { Component } from 'react';
import { config } from 'react-spring';
import Grid from '../components/atoms/grid';
import data from '../components/atoms/data';
import Cell from '../components/atoms/Cell';
import './styles.css';
import 'antd/dist/antd.css';

export default class App extends Component {
  state = { data };

  render() {
    return (
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={3}
        // Space between elements
        margin={20}
        // Removes the possibility to scroll away from a maximized element
        lockScroll
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow}
      >
        {(props, active, toggle) => <Cell {...props} active={active} toggle={toggle} />}
      </Grid>
    );
  }
}
