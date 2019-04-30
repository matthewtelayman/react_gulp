import * as React from "react";

type RibbonState = {}
type RibbonProps = {}
export class Ribbon extends React.Component<RibbonProps, RibbonState> {
    componentDidMount() {
        console.log("Ribbon mounted!");
    }

    render() {
        return (
            <div id="ribbon" className="officebar">
                <ul>
                    <li className="current">
                        <a href="#" rel="home">Home</a>
                        <div className="officetab">
                            <ul>
                                <li>
                                    <span>Bob</span>
                                    <button className="button">BobButton</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}