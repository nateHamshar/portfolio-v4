import "../styles/home.css";
import codeImage from "../images/code.svg"
import ProjectCard from "./ProjectCard";
const Home = () => {
    return (
        <div className="home">
            <section className="landingSection">
                    <div className="landingText">
                        <h1 className="welcomeHeader">Hey, I'm <span className="accent name">Nate</span></h1>
                        <h2 className="welcomeSubheader">and I am a <span className="accent">front-end</span> web dev</h2>
                        <a className="projectsLink" href="#projects" >Check Out My Projects</a>
                    </div>
                    <img alt="" className="landingImage" src={codeImage} />
            </section>

            <section className="aboutSection">
                <div className="aboutText">
                    <h1 className="aboutHeader">About Me</h1>
                    <p className="aboutParagraph firstParagraph">I am a passionate front-end developer with a drive to build <span className="emphasis">clean</span>, <span className="emphasis">modern</span>, and <span className="emphasis">user-friendly</span> websites and web apps that provide a great user experience. I have some full-stack experience, however, I am more specialized in the front-end of projects. I am most comfortable when building within the <span className="emphasis">MERN stack</span>, but I am always eager to learn something new. </p>
                    <p className="aboutParagraph secondParagraph">As a self-taught developer, I have had to hold myself accountable for learning new technologies and best practices. Therefore, I have quite a bit of <span className="emphasis">problem solving</span> and <span className="emphasis">adaptive learning</span> experience with the help of reading documentation and asking questions on communities like Stack Overflow and Github. And now that I mentioned it, you should probably check out <a href="https://github.com/natehamshar" className="githubLink" target="_blank" rel="noreferrer">my GitHub!</a></p>
                </div>
                <div className="techSkills">
                    <h1 className="techSkillsHeader">My Technical Skills</h1>
                    <div className="techLists">
                        <div className="frontend">
                            <h1 className="frontendHeader">Front-End:</h1>
                        <div className="frontendIcons">
                            <img  className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img  className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                            
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" />
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        </div>
                        </div>
                        <div className="backend">
                            <h1 className="backendHeader">Back-End:</h1>
                        <div className="backendIcons">
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                            
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />          
                        </div>
                        </div>
                        <div className="tools">
                            <h1 className="toolsHeader">Tools:</h1>
                        <div className="toolsIcons">    
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projectsSection" id="projects">
                
                <h1 className="projectsHeader">My Projects</h1>

                <ProjectCard title={"Ticket Management System"}
                             imageSource={require("../images/ticket-image.jpeg")}
                             projectDescription={"This is a full-stack help ticket system built with React on the front-end, Express and Node for the server side, and Mongo for the Database. The user authorization and authentication is all handled with JSON Web Tokens to provide additional security to the application. The client side of this app is hosted on Netlify, and the server side is hosted on Render, so it may take a few seconds for them to both spin up. I have included a demo user button on the login page so you can easily test out the functionality for yourself. Feel free to add a ticket to test it out!"}
                             codeURL={"https://github.com/nateHamshar/ticket-frontend"}
                             liveURL={"https://ticketmanagingsystem.netlify.app/"}
                    />
                    <ProjectCard title={"Ticket Management System"}
                             imageSource={require("../images/ticket-image.jpeg")}
                             projectDescription={"This is a full-stack help ticket system built with React on the front-end, Express and Node for the server side, and Mongo for the Database. The user authorization and authentication is all handled with JSON Web Tokens to provide additional security to the application. The client side of this app is hosted on Netlify, and the server side is hosted on Render, so it may take a few seconds for them to both spin up. I have included a demo user button on the login page so you can easily test out the functionality for yourself. Feel free to add a ticket to test it out!"}
                             codeURL={"https://github.com/nateHamshar/ticket-frontend"}
                             liveURL={"https://ticketmanagingsystem.netlify.app/"}
                    />
            </section>

            <footer className="footer">
            </footer>
        </div>
    )
}

export default Home