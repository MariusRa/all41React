import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../../Pages/Profile";
import { Hello } from "../../Pages/Hello";
import "../../sass/Custom.scss"
import {Home} from "../../Pages/Home";



const Pages = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/hello" element={ <Hello />}/>
        </Routes>
    )
}

const Main = () =>{
    return(<main className="mainPage">
    <Pages/>
    </main>
    )
}
export default Main
