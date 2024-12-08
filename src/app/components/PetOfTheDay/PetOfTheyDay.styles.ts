import styled from "styled-components"

export const Container = styled.div`
  min-height: 140px;
`
export const StyledButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 2px solid ${({ disabled }) => (disabled ? "#ccc" : "#2C4751")};
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? "#ddd" : "#06232C")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "white")};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#2C4751")};
    border-color: ${({ disabled }) => (disabled ? "#ccc" : "#2C4751")};
  }
`
