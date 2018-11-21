/* global tw */
import React from 'react';
import PropTypes from 'prop-types';

const CurrentNode = ({ currentNode }) => <div>{currentNode.data ? currentNode.data.name : ''}</div>;

CurrentNode.propTypes = {
  currentNode: PropTypes.object.isRequired,
};

export default CurrentNode;
