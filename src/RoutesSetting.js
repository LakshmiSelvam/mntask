import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import LandingLayout from "./LandingLayout/LandingLayout";
import HomeLayout from "./HomeLayout/HomeLayout";
import PageNotFound from "./common/component/PageNotFound";

function RouteSetting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/user/login" />} />
                <Route path="/user/*" element={<LandingLayout />} />
                <Route path="/home/*" element={<HomeLayout />} />
                <Route path="/:PageName" element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>
    );
}

export default RouteSetting;
