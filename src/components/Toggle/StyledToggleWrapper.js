/**
 *
 * StyledToggleWrapper
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const StyledToggleWrapper = styled.div`
  width: fit-content;
  height: 34px;
  border: 1px solid ${colors.lightGrey};
  label {
    display: inline-block;
    width: fit-content;
    height: 100%;
    position: relative;
    text-align: center;
    color: ${colors.black};
  }
  span {
    display: inline-block;
    width: 53px;
    height: 100%;
    line-height: 32px;
  }
`;

export default StyledToggleWrapper;
