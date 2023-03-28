import "../styles/projectCard.css"

const ProjectCard = ({ title, imageSource, projectDescription, codeURL, liveURL }) => {
    return (
        <div className="projectCard">
            <div className="imageDiv">
                <img src={imageSource} alt="" className="projectImage" loading="lazy"/>
            </div>
            <div className="textDiv">
                <h1 className="projectTitle">{title}</h1>
                <p className="projectDescription">{ projectDescription }</p>
                
                <div className="linksDiv">
                    <a href={codeURL}
                    target="_blank"
                    rel="noreferrer"
                    className="codeLink">See The Code</a>
                    <p className="or">- or -</p>
                    <a href={liveURL}
                    target="_blank"
                    rel="noreferrer"
                    className="liveLink">View The Live Site</a>                
                </div>
            </div>
            
        </div>
    );
}
 
export default ProjectCard;