import "../styles/home.css";
import codeImage from "../images/code.svg"
const Home = () => {
    return (
        <div className="home">
            <section className="landingSection">
                    <div className="landingText">
                        <h1 className="welcomeHeader">Hey, I'm <span className="accent name">Nate</span></h1>
                        <h2 className="welcomeSubheader">and I am a <span className="accent">front-end</span> web dev</h2>
                        <button className="projectsButton">Check Out My Projects</button>
                    </div>
                    <img alt="" className="landingImage" src={codeImage} />
            </section>

            <section className="aboutSection">
                <div className="aboutText">
                    <h1 className="aboutHeader">About Me</h1>
                    <p className="aboutParagraph firstParagraph">I am a passionate front-end developer with a drive to build clean, modern, and user friendly websites and web apps that provide a great user experience. I have some full-stack experience, however, I prefer to focus on the front-end. I am most comfortable when building within the MERN stack, but I am always eager to learn something new. </p>
                    <p className="aboutParagraph secondParagraph">As a self-taught developer, I have had to hold myself accountable for learning the next thing. With that being said, I have a lot of experience reading new documentation and implementing additional technologies into my projects. </p>
                </div>
                <div className="techSkills">
                    <h1 className="techSkillsHeader">My Technical Skils</h1>
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

            <section className="projectsSection">
                <div className="project">
                    <h1>This for sizing next thing</h1>
                </div>
            </section>
        </div>
    )
}

export default Home