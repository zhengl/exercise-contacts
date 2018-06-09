import App from '../';
import AppBar from '../../components/AppBar';
import Contacts from '../../components/Contacts';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App contacts={[]} />);
  });

  it('should have an appbar', () => {
    expect(wrapper.find(AppBar).length).toBe(1);
  });

  it('should have contacts', () => {
    expect(wrapper.find(Contacts).length).toBe(1);
  });
});

