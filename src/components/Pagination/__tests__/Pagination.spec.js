import Pagination, { PreviousButton, NextButton } from '../';

describe('Contacts', () => {
  let onPrevious;
  let onNext;
  let wrapper;

  beforeEach(() => {
    onPrevious = jest.fn();
    onNext = jest.fn();
    wrapper = shallow(<Pagination
      start={0}
      end={0}
      total={0}
      onPrevious={onPrevious}
      onNext={onNext}
    />);
  });

  it('should call onPrevious on clicking the previous button', () => {
    wrapper.find(PreviousButton).simulate('click');
    expect(onPrevious).toHaveBeenCalled();
  });

  it('should call onPrevious on clicking the next button', () => {
    wrapper.find(NextButton).simulate('click');
    expect(onNext).toHaveBeenCalled();
  });
});

