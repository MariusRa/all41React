import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Custom.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () =>{
    return(<div className="container-fluid">
            <Header />

            <Main />

           <Footer />

        </div>
    )
}

export default App