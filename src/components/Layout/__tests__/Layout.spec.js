import Layout from '../';
import AppBar from '../../AppBar';

describe('Layout', () => {
  it('should have an appbar', () => {
    const wrapper = shallow(<Layout><div /></Layout>);
    expect(wrapper.find(AppBar).length).toBe(1);
  });
});
