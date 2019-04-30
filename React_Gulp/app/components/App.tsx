import * as React from "react";

import { Hello } from "./Hello";
import { Ribbon } from "./Ribbon/Ribbon";

type AppState = {}
type AppProps = {}

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <Ribbon />
                <Hello compiler="TypeScript" framework="React" />
            </div>
        )
    }
}