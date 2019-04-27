import * as React from "react";
import * as ReactDOM from "react-dom";

import { Ribbon } from "./components/Ribbon/Ribbon"
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Ribbon compiler="bob1" framework ="bob2" />,
    //<Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
)