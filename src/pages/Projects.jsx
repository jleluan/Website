import { Link } from "react-router-dom";
import ProjectLink from "../components/ProjectLink";
import exampleimage from '../assets/images/exampleimage.png';


function Projects() {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>My Projects</h2>
      <p>Here are some of the projects I&apos;ve worked on.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/projects/project1" style={{ color: "lightblue" }}>Project 1</Link></li>
        <li><Link to="/projects/project2" style={{ color: "lightblue" }}>Project 2</Link></li>
        <li><Link to="/projects/project3" style={{ color: "lightblue" }}>Project 3</Link></li>
        <li><Link to="/projects/project4" style={{ color: "lightblue" }}>Project 4</Link></li>
      </ul>
      <ProjectLink text="Example text Example text Example text Example text Example text Example text Example text Example text Example text Example text" imageUrl={exampleimage} to="project1"/>
      <ProjectLink text="Example text2 Example text2 Example text2 Example text2 Example text2 Example text2 Example text2 Example text2 Example text2 Example text2" imageUrl={exampleimage} to="project2"/>
    </div>
  );
}

export default Projects;