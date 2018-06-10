import Contacts, { Header } from '../';
import Contact from '../../Contact';
import Pagination from '../../Pagination';

describe('Contacts', () => {
  const contacts = [
    {
      id: 1,
      name: 'test-name-1',
      title: 'test-title-1',
      birthDate: '1999-02-28T16:00:00.000Z',
      count: 1,
      isFavorite: 0,
    },
    {
      id: 2,
      name: 'test-name-2',
      title: 'test-title-2',
      birthDate: '2000-02-28T16:00:00.000Z',
      count: 2,
      isFavorite: 1,
    },
  ];
  let onPrevious;
  let onNext;
  let wrapper;

  beforeEach(() => {
    onPrevious = jest.fn();
    onNext = jest.fn();
    wrapper = shallow(<Contacts contacts={contacts} onPrevious={onPrevious} onNext={onNext} />);
  });

  it('should show header', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should show a list of contact', () => {
    expect(wrapper.find(Contact).length).toBe(contacts.length);
  });

  it('should show pagination', () => {
    expect(wrapper.find(Pagination).length).toBe(1);
  });

  it('should pass onPrevious to Pagination', () => {
    expect(wrapper.find(Pagination).props().onPrevious).toBe(onPrevious);
  });

  it('should pass onNext to Pagination', () => {
    expect(wrapper.find(Pagination).props().onNext).toBe(onNext);
  });
});

