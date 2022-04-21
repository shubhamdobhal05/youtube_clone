import React, { useState } from "react"
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from "./screen/homescreen/Homescreen";
import Login from "./screen/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./_app.scss";




const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
      
  const handleSidebar = () => {
    setSidebar(value => !value);
  }
  return (
    <>
      <Header handleSidebar={handleSidebar}/>
      <div className="app__container border border-info">
        <Sidebar sidebar= {sidebar} handleSidebar = {handleSidebar}/>
        <Container fluid className="app__main border border-warning">
            {children}
        </Container>
      </div>
    </>
  )
}
function App() {

  
  return (
    
    <Router>
     <Routes>
      <Route path ="/" element = {<Layout>
         <Homescreen/>
       </Layout>}/>
       
      
      <Route path ="login" element={<Login/>}/>
        
      
      <Route path ="/search" element={<Layout>
         <h1>Search</h1>
       </Layout>}/>
       
      
      </Routes>
    </Router>
    
  ) 
}

export default App;
