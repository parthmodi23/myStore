// App.js
import './App.css';
import Shoes from './pages/Shoescompo/shoes';
import Mobile from './pages/Mobilecompo/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/Navbarcompo/nav';
import Home from './pages/Homepagecompo/Home';
import Search from './pages/Search';
import Clothes from './pages/clothescompo/clothes';
import Books from './pages/Bookscompo/Books';
import Footer from './pages/Footer/footer';
import Signup from './pages/authentication/signup';
import SignIn from './pages/authentication/signin';
import Nav2 from './pages/Navbarcompo/nav2';
import Cartpage from './pages/cartcompo/cartpage';
import Shoesdetails from './pages/Shoescompo/shoesdetail';
import Clothesdetails from './pages/clothescompo/clothesdetails';
import Mobiledetails from './pages/Mobilecompo/mobiledetails';
import Bookdetails from './pages/Bookscompo/bookdetails';
// import Shoesdetails from './pages/shoesDetails';
// import Buy from './pages/buy';
function App() {
  return (
    <div className="App">
      <Router>

        <Nav/>
        <Nav2/>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search/:searchtext" element={<Search />} />
          <Route path="/shoesdetail/:productid" element={<Shoesdetails/>}/>
          <Route path="/clothesdetails/:productid" element={<Clothesdetails/>}/>
          <Route path="/Mobiledetails/:productid" element={<Mobiledetails/>}/>
          <Route path="/Bookdetails/:productid" element={<Bookdetails/>}/>
          <Route path="/Books" element={<Books />} />


          <Route path="/shoes" element={<Shoes />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          {/* <Route path='/buy' element={<Buy/>}/> */}


          <Route path="/*" element={<h1>error</h1>} />
        </Routes>
        
        <Footer/>

</Router>
    </div>
  );
}

export default App;