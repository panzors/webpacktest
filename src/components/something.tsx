import * as React from "react";
import * as styles from './boo.css';

export interface blah {
    stuff: string,
}

export class Hello extends React.Component<blah, {}>{
    render() {
        return <h1 className={styles.something}>Hello world from {this.props.stuff}</h1>;
    }
}

