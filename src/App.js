import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Sidhant Karbotkar</Link>}
          scroll>
            <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Aboutme">About Me</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Aboutme">About Me</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content
          style={{ backgroundImage: "url(images/bg1.jpg)",overflowY : 'auto'}}
        >
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
