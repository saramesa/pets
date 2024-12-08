import styled from "styled-components"

export const PetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3em 2.5em;
`
export const PetCard = styled.button`
  padding: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

export const PetCardContent = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-auto-flow: column;
`
export const PetDescription = styled.div`
  display: grid;
  grid-auto-flow: rows;
  gap: 0.5em;
`
