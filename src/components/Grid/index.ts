import styled from 'styled-components'
import { mq } from 'styles/mq'

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.md} {
    flex-direction: row;
  }
`

export const Column = styled.div<{ md: number }>`
  flex: 1;

  ${mq.md} {
    flex: ${props => props.md / 12};
  }
`
