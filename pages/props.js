import React from 'react';
import Loading from '../components/Loading';

export default function Props() {
  return (
    <div>
      <Loading /> {/* OPEN THE LOADING COMPONENT TO SEE HOW THE PROPS ARE HANDLED */}
      <Loading color="green" />
      <Loading color="goldenrod" />
      {/* CHILDREN */}
      <Loading color="blue">
        <p>The children are between BOTH opening and closing tag for the component</p>
      </Loading>
    </div>
  );
}
