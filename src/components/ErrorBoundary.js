import React, {Component} from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error : null,
    }
  }


componentDidCatch(error, errorInfo) {
  console.log({error, errorInfo})
}

static getDerivedStateFromError(error) {
  return {error: error}
}

render() {
  if(this.state.error) {
    return <p>Something went wrong</p>;
  }
  return this.props.children
}
}