import { func, number } from 'prop-types';
import styled from 'styled-components';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

export const PreviousButton = styled.button`
  border: none;
  background: none;
`;

export const NextButton = styled.button`
  border: none;
  background: none;
`;

const Pagination = ({
  start, end, total, onPrevious, onNext,
}) => (
  <Wrapper>
    <PreviousButton onClick={onPrevious} disabled={start === 0}>
      <NavigateBeforeIcon />
    </PreviousButton>
    <NextButton onClick={onNext} disabled={end >= total}>
      <NavigateNextIcon />
    </NextButton>
  </Wrapper>
);

Pagination.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  total: number.isRequired,
};

export default Pagination;
