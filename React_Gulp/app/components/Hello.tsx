import * as React from "react";

type HelloState = {}
type HelloProps = { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, HelloState> {
    render() {
        return (
            <div id="bob">
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        )
    }
}