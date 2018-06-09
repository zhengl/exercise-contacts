import Contacts from '../';
import Contact from '../../Contact';

describe('Contacts', () => {
  const contacts = [
    {
      id: 'test-id-1',
      name: 'test-name-1',
    },
    {
      id: 'test-id-2',
      name: 'test-name-2',
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contacts contacts={contacts} />);
  });

  it('should a list of contact', () => {
    expect(wrapper.find(Contact).length).toBe(contacts.length);
  });
});

