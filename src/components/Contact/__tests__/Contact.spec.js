import moment from 'moment';
import Contact, { Name, Title, Age, Count, Star, StarBorder } from '../';

describe('Contacts', () => {
  const contact = {
    id: 'test-id-1',
    name: 'test-name-1',
    title: 'test-title-1',
    birthDate: '1999-02-28T16:00:00.000Z',
    count: 5,
    isFavorite: 0,
  };

  it('should show the name', () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find(Name).children().text()).toBe(contact.name);
  });

  it('should show the title', () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find(Title).children().text()).toBe(contact.title);
  });

  it('should show the age', () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find(Age).children().text()).toBe(`${moment().diff(moment(contact.birthDate), 'years')}`);
  });

  it('should show the detail count', () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find(Count).children().text()).toBe(`${contact.count}`);
  });

  it('should show start icon if it is favorite', () => {
    const wrapper = shallow(<Contact {...contact} isFavorite={1} />);
    expect(wrapper.find(Star).length).toBe(1);
    expect(wrapper.find(StarBorder).length).toBe(0);
  });

  it('should show star border icon if it is not favorite', () => {
    const wrapper = shallow(<Contact {...contact} isFavorite={0} />);
    expect(wrapper.find(Star).length).toBe(0);
    expect(wrapper.find(StarBorder).length).toBe(1);
  });
});

