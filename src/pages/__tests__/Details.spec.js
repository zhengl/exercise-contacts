import Details, { Name, Star, StarBorder } from '../details';
import Email from '../../components/Email';
import Phone from '../../components/Phone';

describe('Details', () => {
  const contact = {
    id: 1,
    name: 'test-name-1',
    title: 'test-title-1',
    birthDate: '1999-02-28T16:00:00.000Z',
    isFavorite: 0,
    types: {},
  };
  const email = [
    'user1@mail.com',
    'user1@mail.com',
  ];
  const phone = [
    '12344',
    '12344',
  ];

  it('should show the name', () => {
    const wrapper = shallow(<Details {...contact} />);
    expect(wrapper.find(Name).children().text()).toBe(`${contact.title} ${contact.name}`);
  });

  it('should show start icon if it is favorite', () => {
    const wrapper = shallow(<Details {...contact} isFavorite={1} />);
    expect(wrapper.find(Star).length).toBe(1);
    expect(wrapper.find(StarBorder).length).toBe(0);
  });

  it('should show star border icon if it is not favorite', () => {
    const wrapper = shallow(<Details {...contact} isFavorite={0} />);
    expect(wrapper.find(Star).length).toBe(0);
    expect(wrapper.find(StarBorder).length).toBe(1);
  });

  it('should show emails', () => {
    const wrapper = shallow(<Details {...contact} types={{ email }} />);
    wrapper.find(Email).forEach((el, index) => {
      expect(el.props().address).toBe(email[index]);
    });
  });

  it('should show phone numbers', () => {
    const wrapper = shallow(<Details {...contact} types={{ phone }} />);
    wrapper.find(Phone).forEach((el, index) => {
      expect(el.props().number).toBe(phone[index]);
    });
  });
});
