import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharInfo from "../charInfo/CharInfo";
import MainContent from "../MainContent/MainContent";


const Navbar = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainContent />}>
                    <Route index element={<MainContent />} />
                    <Route path="CharInfo" element={<CharInfo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Navbar;