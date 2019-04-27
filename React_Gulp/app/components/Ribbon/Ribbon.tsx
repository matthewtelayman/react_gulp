import * as React from "react";

type RibbonState = {}
type RibbonProps = { compiler: string; framework: string; }

export class Ribbon extends React.Component<RibbonProps, RibbonState> {
    render() {
        return (
            <div id="bob">
                <h1>Ribbon from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        )
    }
}