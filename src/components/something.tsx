import * as React from "react";

export interface blah {
    stuff: string,
}

export class Hello extends React.Component<blah, {}>{
    render() {
        return <h1>Hello world from {this.props.stuff}</h1>;
    }
}

