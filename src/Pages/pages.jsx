import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/productos" element={<productos />}/>
                <Route exact path="/contacto" element={<contacto />}/>
            </Routes>
        </BrowserRouter>
    );
}