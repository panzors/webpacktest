import * as React from "react";
import {Hello} from "./components/something";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <Hello stuff="test" ></Hello>,
    document.getElementById('root')
);