import styled from 'styled-components'
import is from 'styled-is'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9;
`

export const Message = styled.div<{
  isSuccess: boolean
  isError: boolean
  isInfo: boolean
}>`
  width: 80%;
  background-color: #fff;
  padding: 1rem 1.5rem;
  color: #fff;
  opacity: 0.9;
  margin-top: 1.25rem;
  border-radius: 0.125rem;

  ${is('isSuccess')`
    background-color: #308732;
  `}

  ${is('isError')`
    background-color: #d32f2f;
  `}

  ${is('isInfo')`
    background-color: #1565c0;
  `}
`
