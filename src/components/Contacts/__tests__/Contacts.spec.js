import Contacts from '../';

it('renders correctly', () => {
  const contacts = [
    {
      id: 'test-id-1',
      name: 'test-name-1',
    },
    {
      id: 'test-id-2',
      name: 'test-name-2',
    },
    {
      id: 'test-id-3',
      name: 'test-name-3',
    },
  ];
  const result = shallow(<Contacts contacts={contacts} />);
  expect(result).toMatchSnapshot();
});
