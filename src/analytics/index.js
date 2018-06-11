import mixpanel from 'mixpanel-browser';

mixpanel.init('37addadec8e78dc7bb605e44accf5cd8');

function track(name, options) {
  mixpanel.track(name, options);
}

export default track;
