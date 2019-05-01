import * as React from "react";

type IRenderButtonState = Readonly<typeof renderButtonState>
type IRenderButtonProps = Readonly<typeof renderButtonProps>

const renderButtonProps = {
    callbackFromParent: function (rowData: Object) {}
}

const renderButtonState = {
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

export class RenderButton extends React.Component<IRenderButtonProps, IRenderButtonState> {
    readonly state = renderButtonState

    componentDidMount() {
        console.log("RenderButton mounted!");
    }

    private _fetchGridData() {
        console.log("Fetching grid data...");
        fetch("https://api.myjson.com/bins/15psn9")
            .then(result => result.json())
            .then((rowData) => {
                this.props.callbackFromParent(rowData);
            });
    }

    render() {
        return (
            <div id="button"> 
                <button onClick={this._fetchGridData.bind(this)}>Populate Grid</button>
            </div>
        )
    }
}