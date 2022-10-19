import P from 'prop-types';
import { Component } from 'react';
import * as k from './styles';

export const Dummy = ({ children }) => {
  return (
    <k.Container>
      <h1>Dummy</h1>
    </k.Container>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
