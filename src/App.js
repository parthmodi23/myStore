// App.js
import './App.css';
import Shoes from './pages/shoes';
import Mobile from './pages/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';
import Clothes from './pages/clothes';
import Books from './pages/Books';
import Footer from './pages/footer';
import Signup from './pages/signup';
import SignIn from './pages/signin';
import Nav2 from './pages/nav2';
function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Nav2/>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Search/:searchtext" element={<Search />} />
          <Route path="/Details/:productid" element={<Details/>}/>
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/Books" element={<Books />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<SignIn/>}/>


          <Route path="/*" element={<h1>error</h1>} />

        </Routes>
        <hr></hr>
        <Footer/>

</Router>
    </div>
  );
}

export default App;
