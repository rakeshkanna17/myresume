function Skills() {
  return (
    <div>
      <div className="full-bleed" id="skills" style={{ padding: "6rem 2rem" }}>
        <div className="skills-section">
          <div className="section-label">What I work with</div>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">

      <div className="skill-card">
        <div className="skill-category">Frontend Development</div>
        <div className="skill-name">Modern Web Technologies</div>
        <div className="skill-tags">
          <span className="tag">HTML5</span>
          <span className="tag">CSS3</span>
          <span className="tag">SCSS</span>
          <span className="tag">JavaScript ES6+</span>
          <span className="tag">Responsive Design</span>
        </div>
      </div>

      <div className="skill-card">
        <div className="skill-category">Frameworks</div>
        <div className="skill-name">Frontend Frameworks</div>
        <div className="skill-tags">
          <span className="tag">Vue.js</span>
          <span className="tag">Angular</span>
          <span className="tag">Angular Material</span>
          <span className="tag">Bootstrap</span>
          <span className="tag">Flex Layout</span>
        </div>
      </div>

      <div className="skill-card">
        <div className="skill-category">Tools & Platforms</div>
        <div className="skill-name">Development Ecosystem</div>
        <div className="skill-tags">
          <span className="tag">Git</span>
          <span className="tag">GitHub</span>
          <span className="tag">VS Code</span>
          <span className="tag">SQL Developer</span>
        </div>
      </div>

      <div className="skill-card">
        <div className="skill-category">Professional Skills</div>
        <div className="skill-name">Engineering Practices</div>
        <div className="skill-tags">
          <span className="tag">REST APIs</span>
          <span className="tag">Agile</span>
          <span className="tag">Code Reviews</span>
          <span className="tag">Performance Optimization</span>
          <span className="tag">UI/UX</span>
        </div>
      </div>

    </div>
  </div>
</div>

<section id="experience">
  <div className="section-label">Where I've worked</div>
  <h2 className="section-title">Experience</h2>
  <div className="exp-timeline">
    <div className="exp-item">
      <div className="exp-date">Mar 2022 — PRESENT</div>
      <div className="exp-role">Custom Software Engineering Senior Analyst</div>
      <div className="exp-company">Accenture Private Limited</div>
      <p className="exp-desc">Worked on Accenture's CIO Adobe Transformation platform, developing interactive and responsive user interfaces using Vue.js and modern frontend technologies. Built reusable components, implemented advanced animations, optimized application performance, and collaborated with global teams to deliver enterprise-grade digital experiences.</p>
    </div>
    <div className="exp-item">
      <div className="exp-date">Jul 2020 — Feb 2022</div>
      <div className="exp-role">UI Developer</div>
      <div className="exp-company">Mantra Technologies Private Limited</div>
      <p className="exp-desc">Worked on responsive UI components and web applications. Applying best practices in Angular-based frontend architecture and delivering production-grade interfaces.</p>
    </div>
    <div className="exp-item">
      <div className="exp-date">Jan 2019 — Apr 2020</div>
      <div className="exp-role">UI Developer</div>
      <div className="exp-company">Snovasys Software Solutions</div>
      <p className="exp-desc">Worked on the Time champ — an enterprise HR and project management platform. Applied Angular Material Design, FlexLayout, and CSS3 to deliver cutting-edge UI components. Collaborated closely with the team on development, debugging, and GitHub version control.</p>
    </div>
  </div>
</section>

<section id="projects" style={{paddingTop: 0}}>
  <div className="section-label">Things I've built</div>
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <div className="project-num">01</div>
      <div className="project-title">CIO Adobe Transformation</div>
      <p className="project-desc">Enterprise platform developed for Accenture. Designed and implemented responsive user interfaces, reusable Vue.js components, advanced animations, and scalable frontend architecture while ensuring performance and accessibilit.</p>
      <div className="project-tech">
        <span className="tech-pill">Vanila JavaScript</span>
        <span className="tech-pill">Vue.js & React js</span>
        <span className="tech-pill">Notebook & sparta</span>
        <span className="tech-pill">HTML5</span>
        <span className="tech-pill">CSS3</span>
      </div>
    </div>
    <div className="project-card">
      <div className="project-num">02</div>
      <div className="project-title">500 apps</div>
      <p className="project-desc">500apps is an all-in-one suite of apps to enhance the team's productivity for growing a business to run like Fortune 500. It offers solutions such as activity monitoring, project budgeting, time tracking, CRM integration, schedule meetings, multi-media marketing, project management tools, document automation, collaboration tools, invoices, recruiting, web engagement, bot path, site recording visual workflow, lead generation solutions, audio, and video conferences</p>
      <div className="project-tech">
        <span className="tech-pill">vue js</span>
        <span className="tech-pill">Bootstrap 4</span>
        <span className="tech-pill">JavaScript</span>
        <span className="tech-pill">CSS3</span>
      </div>
    </div>
    <div className="project-card">
      <div className="project-num">03</div>
      <div className="project-title">Time champ</div>
      <p className="project-desc">Time champ Objective is to provide the status of the Employees activity for the particular company. Knowing the project status for the particular employee, updating the assets of the employee, hr details for the particular employee. It is used to track project progress and view burndown reports along with a Status Report of each assigned employee every day, view each task updates on Snovasys Suite. Snovesys suite have tools like HR management, Timesheets, Project Management, Testcase Management, Asset Management, Activity Watcher etc.</p>
      <div className="project-tech">
        <span className="tech-pill">Angular 6</span>
        <span className="tech-pill">Angular Material</span>
        <span className="tech-pill">HTML5</span>
        <span className="tech-pill">CSS3</span>
      </div>
    </div>
  </div>
</section>


<section id="education" style={{paddingTop: 0}}>
  <div className="section-label">Academic background</div>
  <h2 className="section-title">Education</h2>
  <div className="edu-grid">
    <div className="edu-card">
      <div className="edu-degree">M.Tech</div>
      <div className="edu-school">DVR College of Engineering and Technology, Hyderabad</div>
      <div className="edu-score">68%</div>
    </div>
    <div className="edu-card">
      <div className="edu-degree">B.Tech</div>
      <div className="edu-school">DRK Institute of Sci. & Tech., Hyderabad</div>
      <div className="edu-score">66.6%</div>
    </div>
    <div className="edu-card">
      <div className="edu-degree">Intermediate</div>
      <div className="edu-school">RD Jr. College, Hanamkonda</div>
      <div className="edu-score">93.4%</div>
    </div>
    <div className="edu-card">
      <div className="edu-degree">SSC</div>
      <div className="edu-school">ZPSS, Kolkonda</div>
      <div className="edu-score">76%</div>
    </div>
  </div>
</section>


<section id="contact" style={{paddingTop: 0, maxWidth: 1100}}>
  <div className="contact-wrapper">
    <div>
      <div className="section-label">Say hello</div>
      <h2 className="contact-tagline">
        Let's build something <span>great</span> together.
      </h2>
      <p style={{color: 'var(--text2)', fontSize: '0.92rem', marginTop: '1.25rem', lineHeight: '1.7'}}>
        I'm always open to new opportunities, collaborations, or just a good conversation about UI development.
      </p>
    </div>
    <div className="contact-links">
      <a href="mailto:rakeshkanna39@gmail.com" className="contact-item">
        <div className="contact-icon">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div>
          <div className="contact-label">Email</div>
          <div className="contact-value">rakeshkanna39@gmail.com</div>
        </div>
      </a>
      <a href="#" className="contact-item">
        <div className="contact-icon">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.16 6.16l1.02-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div>
          <div className="contact-label">Phone</div>
          <div className="contact-value">+91 ***** 53512</div>
        </div>
      </a>
      <a href="https://github.com/rakeshkanna17" target="_blank" className="contact-item">
        <div className="contact-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path
              d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2z"
              fill="#56b531"/>
          </svg>
        </div>

        <div>
          <div className="contact-label">GitHub</div>
          <div className="contact-value">github.com/rakeshkanna17</div>
        </div>
      </a>
      <div className="contact-item" style={{cursor: 'default'}}>
        <div className="contact-icon">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div className="contact-label">Location</div>
          <div className="contact-value">Hyderabad, Telangana</div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <p>@ 2026 Kanna Rakesh &nbsp;·&nbsp; UI Developer &nbsp;·&nbsp; Hyderabad</p>
</footer>

</div>
  );
}

export default Skills;