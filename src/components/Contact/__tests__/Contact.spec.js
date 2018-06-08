import Contact from '../';

it('renders correctly', () => {
  const result = shallow(<Contact name="test-name" />);
  expect(result).toMatchSnapshot();
});
