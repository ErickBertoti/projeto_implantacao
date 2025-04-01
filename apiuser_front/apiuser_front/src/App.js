import GlobalStyle from "./styles/global";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Usuarios from "./components/Usuarios.js";
import Sobre from './components/Sobre.js';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 1px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  
  return (
    <>
      <Container>
        <Router basename="/apiuserprof">
          <div>
            <Navbar />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/usuarios" Component={Usuarios} />
              <Route path="/sobre" Component={Sobre} />

            </Routes>
          </div>
        </Router>        
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
