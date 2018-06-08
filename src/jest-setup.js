import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // eslint-disable-line import/no-extraneous-dependencies

global.React = React;
global.shallow = (element) => {
  const renderer = new ShallowRenderer();
  renderer.render(element);
  return renderer.getRenderOutput();
};
