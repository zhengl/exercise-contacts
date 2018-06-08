import App from '../';

it('renders correctly', () => {
  const result = shallow(<App contacts={[]} />);
  expect(result).toMatchSnapshot();
});
