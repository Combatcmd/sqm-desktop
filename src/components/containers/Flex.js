import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

export const FlexItem = styled.div`
  flex: ${props => props.flex};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  align-self: ${props => props.align }
`