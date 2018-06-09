import Contact, { Name, Favorite } from '../';

describe('Contacts', () => {
  const contact = {
    id: 'test-id-1',
    name: 'test-name-1',
  };

  beforeEach(() => {
  });

  it('should a name', () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find(Name).children().text()).toBe(contact.name);
  });

  it('should show icon if it is favorite', () => {
    const wrapper = shallow(<Contact {...contact} isFavorite />);
    expect(wrapper.find(Favorite).length).toBe(1);
  });

  it('should not show icon if it is not favorite', () => {
    const wrapper = shallow(<Contact {...contact} isFavorite={false} />);
    expect(wrapper.find(Favorite).length).toBe(0);
  });
});

