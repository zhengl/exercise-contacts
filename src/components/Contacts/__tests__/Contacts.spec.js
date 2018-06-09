import Contacts, { Header } from '../';
import Contact from '../../Contact';

describe('Contacts', () => {
  const contacts = [
    {
      id: 'test-id-1',
      name: 'test-name-1',
      title: 'test-title-1',
      birthDate: '1999-02-28T16:00:00.000Z',
      count: 1,
      isFavorite: true,
    },
    {
      id: 'test-id-2',
      name: 'test-name-2',
      title: 'test-title-2',
      birthDate: '2000-02-28T16:00:00.000Z',
      count: 2,
      isFavorite: false,
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contacts contacts={contacts} />);
  });

  it('should show header', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should show a list of contact', () => {
    expect(wrapper.find(Contact).length).toBe(contacts.length);
  });
});

