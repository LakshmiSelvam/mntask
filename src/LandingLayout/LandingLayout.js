import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./Component/SignInPage";
import PageNotFound from "../common/component/PageNotFound";
import "./Style/style.css";
function LandingLayout() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="content-container">
                    
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/user/login" />} />
                        <Route path="/login" element={<SignInPage />} />
                         <Route path="/:PageName" element={<PageNotFound />} />
                    </Routes>
                </div>
             
            </div>

        </React.Fragment>
    );
}

export default LandingLayout;
