import React from "react";
import ReactDOM from "react-dom";
import "./common/style/style.css";
import RouteSetting from "./RoutesSetting";
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <RouteSetting />
    </Provider>,
     document.getElementById("root")
     );
