import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${(props) => props["background-color"]};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    background-color: ${(props) => props.hoverBg};
  }
`;

export default CustomButton;