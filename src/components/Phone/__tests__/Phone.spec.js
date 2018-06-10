import Phone, { Icon, Content } from '../';

describe('Phone', () => {
  const number = '12345';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Phone number={number} />);
  });

  it('should have an icon', () => {
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it('should have an icon', () => {
    expect(wrapper.find(Content).children().text()).toBe(number);
  });
});

