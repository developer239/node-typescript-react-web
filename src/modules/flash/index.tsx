import React, { useContext } from 'react'
import { map } from 'ramda'
import FlashMessagesContext from './context'
import { Container, Message } from './styled'

const Flash = () => {
  const {
    state: { messages },
  } = useContext(FlashMessagesContext)
  return (
    <Container>
      {map(
        ({ message, id, type }) => (
          <Message
            isSuccess={type === 'success'}
            isError={type === 'error'}
            isInfo={type === 'info'}
            key={id}
          >
            {message}
          </Message>
        ),
        messages
      )}
    </Container>
  )
}

export default Flash
