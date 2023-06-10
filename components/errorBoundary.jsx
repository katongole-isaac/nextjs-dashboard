/**
 * Error Boundary - Used to catch errors in child tree components.
 * 
 */

import React from "react";

class ErrorBoundary extends React.Component {

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    
    console.log(`Logging to sanity`, info.componentStack);

  }

  render() {
    if (this.state.hasError) return this.props.fallback;

    return this.props.children;
  }
}

export default ErrorBoundary;
