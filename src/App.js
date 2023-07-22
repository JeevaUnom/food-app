import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom"
  
  
  import Footer from "./components/Footer";
  
  import Home from "./pages/Home";
  import Recipes from "./pages/Recipes";
  import Settings from "./pages/Settings";
  import Signin from "./pages/Signin";
  import More from "./pages/More"
  import Recipedetail from "./pages/Recipedetail";
  import Login from "./pages/Login";
  import Account from "./pages/Account";
  import Navbar from "./components/Navbar";
  import FloatingButton from "./components/Floatbutton";
  import Chatbox from "./components/Chatbox";


  
  function App() {
    return (
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes  />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/more" element={<More />} />
            <Route path="/recipedetail" element={<Recipedetail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/chat" component={Chatbox} />
          </Routes>
        </div>
        <FloatingButton />
        <Footer />
      </Router>
    )
  }

  export default App;