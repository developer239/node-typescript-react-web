import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-grow: 1;
`

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error: any) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return (
        <Container>
          There was an error: {JSON.stringify(this.state.error)}
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
