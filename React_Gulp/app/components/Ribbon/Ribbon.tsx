import * as React from "react";
import { RenderButton } from "../Buttons/render";

type IRibbonState = {}
type IRibbonProps = Readonly<typeof ribbonProps>

const ribbonProps = {
    callbackFromParent: function (rowData: Object) { }
}

export class Ribbon extends React.Component<IRibbonProps, IRibbonState> {
    componentDidMount() {
        console.log("Ribbon mounted!");
    }

    myCallback = (dataFromChild: any) => {
        console.log("In Ribbons callback!");
        console.log("Passing to the app...");
        this.props.callbackFromParent(dataFromChild);
    }

    render() {
        return (
            <div id="ribbon">
                <RenderButton callbackFromParent={this.myCallback}/>
            </div>
        )
    }
}