import SortableHeader, { HeaderCell, Label } from '../';

const COLUMNS = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'birthDate',
    label: 'Age',
  },
  {
    name: 'count',
    label: 'Count',
  },
  {
    name: 'isFavorite',
    label: 'Favorite',
  },
];

describe('SortableHeader', () => {
  let onSort;
  let wrapper;

  beforeEach(() => {
    onSort = jest.fn();
    wrapper = shallow(<SortableHeader onSort={onSort} />);
  });

  COLUMNS.forEach((column, index) => {
    it(`should have ${column.name} column`, () => {
      expect(wrapper.find(HeaderCell).at(index).find(Label).children()
        .text()).toBe(column.label);
    });

    it(`should order ${column.name} column by asc by default`, () => {
      wrapper.find(HeaderCell).at(index).simulate('click');
      expect(onSort).toHaveBeenCalledWith({ column: column.name, order: 'asc' });
    });

    it(`should order ${column.name} column by desc after asc`, () => {
      const cell = wrapper.find(HeaderCell).at(index);
      cell.simulate('click');
      cell.simulate('click');
      expect(onSort).toHaveBeenCalledWith({ column: column.name, order: 'desc' });
    });
  });
});
