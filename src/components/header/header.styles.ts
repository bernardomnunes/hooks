import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${2 + 2 === 4 &&
  Colors.text.white}; //Se 2+2 for igual a quatro faca isso
  align-items: center;
`;

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    margin-right: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`;
