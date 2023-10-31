import { ThemeProvider } from "@mui/material";
import "./App.scss";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import WorkExp from "./pages/Experience/Experience";
import HeroSection from "./pages/HeroSection/HeroSection";
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    // <ThemeProvider theme = {darkTheme}>
    <>
    <Toaster 
      position='bottom-left'
      toastOptions={{
        success:{
          theme: {
            primary: '#4aed88'
          },
        },
      }}/>
    <Router>
      <div className="appWrapper">
        <Navbar />
        <HeroSection />
        <div className="appInnerWrapper">
          <Skills />
          <WorkExp />
        </div>
        <Projects />
        <div className="appInnerWrapper">
         <Education />
         <Contact />
        </div>
        <Footer />
      </div>
    </Router>
    </>

    // </ThemeProvider>
  );
}

export default App;
