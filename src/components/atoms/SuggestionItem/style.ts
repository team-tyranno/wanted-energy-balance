import styled from 'styled-components';

export const Container = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#fc9700' : 'black')};
  background: ${(props) => (props.isActive ? '#808080' : '#d3d3d3')};
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  max-height: 100px;
  background-color: white;
`;