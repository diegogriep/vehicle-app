import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  background-color: #f6f6f6;
  color: black;
  font-size: 1.6rem;

  ${media.greaterThan('small')`
    column-gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
  `}
`
