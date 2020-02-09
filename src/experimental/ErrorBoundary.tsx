import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-grow: 1;
`

export class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error: any) {
    this.setState({ error })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (
        <Container>
          There was an error: {JSON.stringify(error)}
        </Container>
      )
    }

    return children
  }
}
