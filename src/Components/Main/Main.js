import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { Profile } from "../../Pages/Profile";
import { Hello } from "../../Pages/Hello";

//import "./styles/App.css";

const Pages = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/hello" element={ <Hello />}/>
        </Routes>
    )
}

const Main = () =>{
    return(<main>
    <Pages/>
    </main>
    )
}
export default Main
