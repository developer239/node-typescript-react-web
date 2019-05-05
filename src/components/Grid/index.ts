import styled from 'styled-components'
import mediaQueries from 'mediaQueries'

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.md} {
    flex-direction: row;
  }
`

export const Column = styled.div<{ md: number }>`
  flex: 1;

  ${mediaQueries.md} {
    flex: ${props => props.md / 12};
  }
`
