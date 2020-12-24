import { Component } from "react";
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

const resumeData = {
  experience: [
    {
      company: 'Teachable',
      dates: 'September 2019 - Present',
      title: 'Sr. Product Designer',
      description: 'Working on a whitelabel platform for online course creation. Researched, conceptualized and tested a coaching solution that accrued over 1MM in GMV in 6 months post-launch for content creators. I serve as a pin in between design and front end engineering regarding design system component construction.'
    },
    {
      company: 'Splice',
      dates: 'January 2018 - July 2019',
      title: 'Product Designer',
      description: 'I came to Splice through an acquisition and spent my time on the design team supporting the library and operations team, designing a new admin and bootstrapping it with a fledgling design system, working on experimental prototypes for complicated music business products, and conceptualizing an ontology/knowledge graph for recorded music.'
    },
    {
      company: 'Indaba Music',
      dates: 'October 2009 - December 2018',
      title: 'Product Designer, Product, Front-End Developer, Lead Content Producer',
      description: 'I worked at one of the earliest music content creator platforms. Produced remix contests and worked with all of the music companies in the world (more or less), pioneered the online sample library with Converse Rubber Tracks, designed ingestion tools and metadata solutions, amongst other things.',
      keyProjects: [
        {
          projectTitle: 'Converse Sample Library',
          projectDescription: 'A first of its kind sample library. I helped conceptualized a platform strategy, designed across the platform surface area (web, mobile and Ableton Live), participated in the day to day implementation of that strategy and worked with users in the field during a hack-a-thon , record-a-thon at Converse HQ that tested all portions of the platform from the API through the user experience.'
        },
        {
          projectTitle: 'Ampl Music',
          projectDescription: 'Ampl Music was a royalty bearing sample library that is currently in private beta under a different name. I designed complex flows that drew a line through complicated royalty splits; an admin with musical connections as models; content preparation and ingestion; and content consumption by users that included filtering, playback, metadata and download with a legal attachment.'
        }
      ]
    }
  ],
  philosophy: 'I believe quality products are holistic in their design. A great experience should span across the DB, devX, content administration, interaction and interface. Quality happens when these pieces sync.',
  skills: {
    conceptual: ['Whiteboarding', 'Wireframing', 'Domain Mapping'],
    concrete: [
      {
        skillType: 'Design tools',
        skillList: ['Sketch', 'Figma', 'Adobe Creative Cloud', '+ a laundry list of others']
      },
      {
        skillType: 'Languages shipped',
        skillList: ['HTML/CSS (+ frameworks)', 'Javascript (+ Angular 1, React, React Native, Angular 2+)', 'Clojurescript (Reagent, hiccup)']
      }
    ],
    musical: ['Modern DAW production', 'Sound recreation', 'Synthesis', 'Keyboard performance']
  },
  education: {
    school: 'University of Miami',
    graduationDate: '2009',
    degree: 'B.M. Studio Music and Jazz, Jazz Piano Performance'
  }
}

class ResumePage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  data = resumeData;

  render() {
    return (
      <main>
        <Header />
        <section>
          <h3>
            Resume
          </h3>
        </section>
        <div className="resume__wrapper">
          <section className="resume__experience">
            <h6 className="resume__small-header">Experience</h6>
            {this.data.experience.map(experience =>
              <div className="resume__experience-item">
                <div className="resume__experience-header">
                  <h3>{experience.company}</h3>
                  <h4 className="resume__date">{experience.dates}</h4>
                  <h4 className="resume__title">{experience.title}</h4>
                </div>
                <div className="resume__experience-details">
                  <p className="resume__description">{experience.description}</p>
                  {experience.keyProjects &&
                    experience.keyProjects.map(project =>
                      <div className="resume__experience-project">
                        <h4 className="resume__experience-project-title">{project.projectTitle}</h4>
                        <p className="resume__description">{project.projectDescription}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            )}
          </section>
          <div className="resume__details">
            <section className="resume__details-section">
              <h6 className="resume__small-header">Philosophy</h6>
              <p className="resume__description">{this.data.philosophy}</p>
            </section>
            <section className="resume__details-section">
              <h6 className="resume__small-header">Skills</h6>
              <section>
                <h5 className="resume__skill-header">Conceptual</h5>
                <div>
                  <ul className="resume__list">
                    {this.data.skills.conceptual.map(concepts =>
                      <li key={concepts} className="resume__list-item">{concepts}</li>
                    )}
                  </ul>
                </div>
              </section>
              <section>
                <h5 className="resume__skill-header">Concrete</h5>
                {this.data.skills.concrete.map(realSkill =>
                  <div>
                    <div>
                      <span>{realSkill.skillType}</span>
                      <ul className="resume__list">
                        {realSkill.skillList.map(skills =>
                          <li className="resume__list-item">{skills}</li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            </section>
            <section className="resume__details-section">
              <h6 className="resume__small-header">Education</h6>
              <h5 className="resume__skill-header">{this.data.education.school}, {this.data.education.graduationDate}</h5>
              <p>{this.data.education.degree}</p>
            </section>
          </div>
        </div>
        <div className="resume__footer">
          <h6 className="resume__small-header">Contact</h6>
          <div><a href="mailto:rvlouie@gmail.com">rvlouie@gmail.com</a> • <a href="https://twitter.com/RVLouie">@rvlouie</a> • <a href="https://www.linkedin.com/in/rilouie/">Linkedin</a></div>
        </div>
      </main>
    );
  }
}

export default ResumePage;