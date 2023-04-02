import "../styles/home.css";
import codeImage from "../images/code.svg"
import ProjectCard from "./ProjectCard";
import ChallengeCard from "./ChallengeCard";
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
            <section className="socialsSection">
                <div className="socialsIconsDiv">
                    <h1 className="findMeHeader">Find me on </h1>
                    
                    <div className="icons">
                        <a href="https://github.com/nateHamshar" target="_blank" rel="noreferrer" className="socialLink"><i className="devicon-github-original-wordmark socialIcon"></i></a>
                        <a href="https://www.linkedin.com/in/william-hamshar/" target="_blank" rel="noreferrer" className="socialLink"><i className="devicon-linkedin-plain socialIcon"></i></a>
                    </div>
                </div>
                <h1 className="dividerWord">- or -</h1>
                <div className="contactCTA">
                    <a href="#contactSection" className="contactMeLink" rel="noreferrer">Send me a message!</a>
                </div>
            </section>
            <section className="aboutSection">
                <div className="aboutText">
                    <h1 className="aboutHeader">About Me</h1>
                    <p className="aboutParagraph firstParagraph">I am a passionate front-end developer with a drive to build <span className="emphasis">clean</span>, <span className="emphasis">modern</span>, and <span className="emphasis">user-friendly</span> websites and web apps that provide a great user experience. I have some full-stack experience, however, I am more specialized in the front-end of projects. I am most comfortable when building within the <span className="emphasis">MERN stack</span>, but I am always eager to learn something new. </p>
                    <p className="aboutParagraph secondParagraph">Now let's talk about my technicals skills. I should preface by saying that I am proficient in HTML, CSS, and Javascript. For frameworks, I am most familiar with React, and I have some experience using Next. For data visualization, I have experience using D3 and Chart.js. Most of my builds also use some form of third-party libraries like Bootstrap, ReactStrap, Tailwind, SASS, etc. On the backend, I have experience connecting my projects to MongoDb and FireBase. And most of those connections use Express and Node.js. I use Git for version control, and most of the projects I've worked on are on my Github. And now that I mentioned it, you should probably check out <a href="https://github.com/natehamshar" className="githubLink" target="_blank" rel="noreferrer">my GitHub!</a></p>
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
                            
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"  />
                            
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
                                
                            <img className="techIcon" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />

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
            <section className="contactFormSection" id="contactSection">
                <h1 className="contactFormHeader">Let's get in touch!</h1>
                <form id="contactForm" action="https://formsubmit.co/williamhamshar@gmail.com" method="POST">
                    <input placeholder="Name or Company Name" type="text" name="name" required className="contactInput" />
                    <input placeholder="Email Address" type="email" name="email" required className="contactInput" />
                    <textarea placeholder="Type your message here!" type="text" name="message" className="contactMessageInput" required />
                    <button type="submit" className="submitButton">Send</button>
                </form>
            </section>
            <section className="projectsSection" id="projects">
                
                <h1 className="projectsHeader">My Projects</h1>

                <ProjectCard title={"Ticket Management System"}
                             imageSource={require("../images/ticket-image.jpeg")}
                             projectDescription={"This is a full-stack help ticket system made for desktop. It was built with React on the front-end, Express and Node for the server side, and Mongo for the Database. The user authorization and authentication is all handled with JSON Web Tokens to provide additional security to the application. The client side of this app is hosted on Netlify, and the server side is hosted on Render, so it may take a few seconds for them to both spin up and log you in. I have included a demo user button on the login page so you can easily test out the functionality for yourself. Feel free to add a ticket to test it out!"}
                             codeURL={"https://github.com/nateHamshar/ticket-frontend"}
                             liveURL={"https://ticketmanagingsystem.netlify.app/"}
                    />
                    <ProjectCard title={"Loan Payment Calculator"}
                             imageSource={require("../images/loan-calculator.jpeg")}
                             projectDescription={"An easy-to-use web application that requires the user to input different properties for a loan, and then provides the projected payments for the lifetime of the loan. Then, I used Chart.js to show a visualized version of an amortization schedule for that loan. This project was made with React, and does not require any connections to APIs or databases so it has a very quick functionality. It is currently being hosted on Github Pages, so it should load very quickly."}
                             codeURL={"https://github.com/nateHamshar/loan-calculator-app"}
                             liveURL={"https://natehamshar.github.io/loan-calculator-app/"}
                    />
                    <ProjectCard title={"Business Tracker"}
                             imageSource={require("../images/business-tracker.jpeg")}
                             projectDescription={"This business tracker allows the user to input sales and expenses that they encounter, and then provides some oversite to total expenses, total sales, and net profit. This app was built with React on the front-end, and connects to Firebase on the back-end. I used Axios to make the requests Firebase, and it allows the app to have quick response times and a better user experience. As of now, there is no user authentication system in place. The front-end is currently being hosted on Github Pages."}
                             codeURL={"https://github.com/nateHamshar/business-tracker"}
                             liveURL={"https://natehamshar.github.io/business-tracker/"}
                    />
            </section>

            <section className="challengesSection">
                <div className="challengesIntro">
                    <h1 className="challengesHeader">Code Challenges</h1>
                    <p className="challengesDescription">To keep my skills sharp, I started doing some popular coding challenges in my free time. I took this a step further and built out UIs for them and deployed them to Github Pages. The challenges are all pretty self explanatory, but if you want to see the code, they are all posted on my <a href="https://github.com/natehamshar" className="githubLink" target="_blank" rel="noreferrer">GitHub</a>.</p>
                </div>
                <div className="challengesDiv">
                    <ChallengeCard 
                        title={"Pokedex"}
                        image={require('../images/pokedex-image.jpeg')}
                        liveLink={"https://natehamshar.github.io/offbrand-pokedex/"}
                        codeLink={"https://github.com/nateHamshar/offbrand-pokedex"}     />
                    <ChallengeCard 
                        title={"Enhanced Fizz-Buzz"}
                        image={require('../images/fizz-buzz.jpeg')}
                        liveLink={"https://natehamshar.github.io/fizz-buzz/"}
                        codeLink={"https://github.com/nateHamshar/fizz-buzz"}     />
                    <ChallengeCard 
                        title={"Money Counting"}
                        image={require('../images/money-counting.jpeg')}
                        liveLink={"https://natehamshar.github.io/interactive-money-counting/"}
                        codeLink={"https://github.com/nateHamshar/interactive-money-counting"}     />
                    <ChallengeCard 
                        title={"Reverse && Palindrome"}
                        image={require('../images/string-challenge.jpeg')}
                        liveLink={"https://natehamshar.github.io/string-challenge/"}
                        codeLink={"https://github.com/nateHamshar/string-challenge"}     />
                </div>
            </section>
        </div>
    )
}

export default Home