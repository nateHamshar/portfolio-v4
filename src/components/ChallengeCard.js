import '../styles/challengeCard.css'

const ChallengeCard = ({title, image, codeLink, liveLink}) => {
    return (
        <div className="challengeCard">
            <div className="challengeImageDiv">
                <img src={image} alt="" className="challengeImage" loading="lazy"/>
            </div>
            <div className="challengeInfo">
                <h1 className="challengeTitle">{title}</h1>
                <div className="challengeLinks">
                    <a href={codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="challengeCode">See The Code</a>
                    <p className="or">- or -</p>
                    <a href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="challengeLive">View The Live Site</a>
                </div>
            </div>
        </div>
    )
}
 
export default ChallengeCard;