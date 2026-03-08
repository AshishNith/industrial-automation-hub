import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, AlertTriangle } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorStr?: string;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        errorStr: undefined,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorStr: error.toString() };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, errorStr: undefined });
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
                    <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                        <AlertTriangle className="w-10 h-10 text-destructive" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
                        Something went wrong
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8 text-base md:text-lg">
                        An unexpected error occurred in the application. Don't worry, we've logged it and are working on a fix.
                    </p>

                    <div className="flex gap-4">
                        <Button onClick={this.handleReset} variant="default" size="lg" className="gap-2 rounded-full">
                            <RotateCcw className="w-4 h-4" />
                            Return Home
                        </Button>
                        <Button onClick={() => window.location.reload()} variant="outline" size="lg" className="rounded-full">
                            Try Again
                        </Button>
                    </div>

                    {process.env.NODE_ENV === 'development' && this.state.errorStr && (
                        <div className="mt-12 text-left max-w-2xl w-full bg-muted p-4 rounded-lg overflow-auto">
                            <p className="text-xs font-mono text-muted-foreground">{this.state.errorStr}</p>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
