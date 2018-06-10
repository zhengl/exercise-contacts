import List from '../';
import Contacts from '../../components/Contacts';

describe('List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List contacts={[]} />);
  });

  it('should have contacts', () => {
    expect(wrapper.find(Contacts).length).toBe(1);
  });
});

