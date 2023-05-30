// import './css/style.css' 
// import Header from './components/Header'
// import Home from './components/Home'
// import Content from './components/Content'
// import Footer from './components/Footer'
// import './css/Page1.css'
// import Left from './pages/Left'
// import Right from './pages/Right';
// import Mapping from './assignment/Mapping';
// import './css/Responsive.css'
// import Responsive from './components/Responsive';
// import { useState } from 'react';
import{toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // let [Students, setStudents]=useState([{name:"kanyana", age:20}, {name:"passfique", age:21}]);
  const notify = () => {
    toast("basic notification")
  }
  return (
    <div className="App">
      {/* <Header />
      <Home />
      <Content />
      <Footer /> */}
      {/* <Left />
      <Right /> */}
    <button onClick={notify}>notify</button>
     <ToastContainer />
      {/* <ex_page /> */}
      {/* <Mapping Students={Students}/> */}
       {/* <Responsive /> */}
    </div>
  );
}

export default App;
