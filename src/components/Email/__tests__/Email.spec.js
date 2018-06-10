import Email, { Icon, Content } from '../';

describe('Email', () => {
  const address = 'test-address';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Email address={address} />);
  });

  it('should have an icon', () => {
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it('should have an icon', () => {
    expect(wrapper.find(Content).children().text()).toBe(address);
  });
});

