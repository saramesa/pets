import styled from "styled-components"

export const StyledSelect = styled.select`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid #06232C;
  border-radius: 5px;
  background-color: white;
  color: #333;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2C4751;
    outline: none;
  }

  &:hover {
    border-color: #2C4751;
  }
`
export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #333;
`