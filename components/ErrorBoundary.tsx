import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error('Error boundary caught an error:', error);
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Redirect to home if there's an error
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-red-600">Something went wrong</h1>
            <p className="mb-4 text-xl text-gray-600">Redirecting to home page...</p>
            <a href="/" className="text-blue-500 underline hover:text-blue-700">
              Go to Home immediately
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;