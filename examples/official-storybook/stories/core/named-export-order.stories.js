import React from 'react';

export default {
  title: 'Core/Named Export Order',
};

export const Story1 = () => 'story1';
export const Story2 = () => 'story2';

// eslint-disable-next-line no-underscore-dangle
export const __namedExportsOrder = ['Story2', 'Story1'];
