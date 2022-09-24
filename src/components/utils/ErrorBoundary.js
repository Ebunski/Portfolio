import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="center">
          <h2>Something went wrong.</h2>
          <p>If error persists, contact developer</p>
        </div>
      );
    }

    return this.props.children;
  }
}
