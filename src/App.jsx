import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Project1 from "./pages/Projects/Project1";
import Project2 from "./pages/Projects/Project2";
import Project3 from "./pages/Projects/Project3";
import Project4 from "./pages/Projects/Project4";
import TestPage from './pages/TestPage';

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/projects/project4" element={<Project4 />} />
            <Route path="/about" element={<About />} />
            <Route path="/TestPage" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
