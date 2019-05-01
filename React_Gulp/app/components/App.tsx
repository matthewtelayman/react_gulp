import * as React from "react";

import { Ribbon } from "./Ribbon/ribbon"
import { Grid } from "./Grid/grid"

type IAppState = Readonly<typeof initAppState>
type IAppProps = {}

const initAppState = {
    gridData: [{}]
}

export class App extends React.Component<IAppProps, IAppState> {
    readonly state = initAppState

    myCallback = (dataFromChild: any) => {
        console.log("In Apps callback!");
        console.log(dataFromChild);
        this.setState({ gridData: dataFromChild });
    }

    render() {
        return (
            <div id="app">
                <Ribbon callbackFromParent={this.myCallback}/>
                <Grid rowData={this.state.gridData}/>
            </div>
        )
    }
}