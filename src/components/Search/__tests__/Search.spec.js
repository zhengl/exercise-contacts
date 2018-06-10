import Search, { Icon, Input } from '../';

describe('Search', () => {
  const query = 'test-query';
  let onQueryChange;
  let wrapper;

  beforeEach(() => {
    onQueryChange = jest.fn();
    wrapper = shallow(<Search query={query} onQueryChange={onQueryChange} />);
  });

  it('should have an icon', () => {
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it('should show an input', () => {
    expect(wrapper.find(Input).length).toBe(1);
  });

  it('should show value from query', () => {
    expect(wrapper.find(Input).props().value).toBe(query);
  });

  it('should call onQueryChange on change', () => {
    wrapper.find(Input).simulate('change', { target: { value: query } });
    expect(onQueryChange).toHaveBeenCalledWith(query);
  });
});
