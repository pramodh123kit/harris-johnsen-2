import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import giveback from '../../assets/Home-page.png';
import aaa1a from '../../assets/a.png';
import ciliona from '../../assets/ciliona.png'
import estate from '../../assets/estate.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={giveback}
          link="https://github.com/pramodh123kit/GiveBack-implementation"
          h3="GiveBack"
          p="MERN Stack Project"
        />
        <ProjectCard
          src={aaa1a}
          link="https://github.com/pramodh123kit/Java_Online_Shopping_Center_OOP_CW"
          h3="Shopping Manager System"
          p="Java OOP, Swing Project"
        />
        <ProjectCard
          src={ciliona}
          link="https://pramodh123kit.github.io/clientside-portfolio/"
          h3="Frontend Portfolio"
          p="HTML, CSS, JS Project"
        />
        <ProjectCard
          src={estate}
          link="https://github.com/pramodh123kit/ACS-CW"
          h3="React Frontend"
          p="Estate Agent Website"
        />
      </div>
    </section>
  );
}

export default Projects;
