import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

type IGridState = Readonly<typeof initialState>
type IGridProps = {}

const initGridProps = {
    rowData: [{}]
}

const initialState = {
    columnDefs: [
        {
            headerName: "Make",
            field: "make"
        },
        {
            headerName: "Model",
            field: "model"
        },
        {
            headerName: "Price",
            field: "price"
        }
    ],
    rowData: [{}]
}

export class Grid extends React.Component<IGridProps, IGridState> {
    readonly state = initialState
    readonly props = initGridProps

    componentDidMount() {
        console.log("Grid mounted!. Retrieving data from api...");
        //fetch("https://api.myjson.com/bins/15psn9")
        //    .then(result => result.json())
        //    .then(rowData => this.setState({ rowData }))
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: "500px",
                    width: "100%"}}
            >

                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.rowData}>
                </AgGridReact>

            </div>
        )
    }
}