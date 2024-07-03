import styles from './HeroStyles.module.css';

import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Pramodh-CV (Updated).pdf';
import pramodh from '../../assets/pramodh.png';


function Hero() {

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={pramodh}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pramodh
          <br />
          Lihinikaduwa
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://github.com/pramodh123kit" target="_blank">
            <img src={githubDark} alt="Twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/pramodh-lihinikaduwa/" target="_blank">
            <img src={linkedinDark} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
        I am a full-stack developer skilled in front-end and back-end technologies. I create responsive web applications and have experience with databases and cloud services.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
