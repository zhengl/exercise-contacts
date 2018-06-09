import AppBar, { Title } from '../';

describe('AppBar', () => {
  const title = 'test-title';

  it('should a list of contact', () => {
    const wrapper = shallow(<AppBar title={title} />);
    expect(wrapper.find(Title).children().text()).toBe(title);
  });
});

