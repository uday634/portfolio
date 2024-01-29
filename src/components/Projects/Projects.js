import React from "react"; // Make sure to import React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; // Import the required FontAwesome icon
import GroupChat from "../../img/group-chat.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="project">
      <div className="project-section">
        <h1 className="project-sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={GroupChat} alt="Group Chat App" />
            <div className="layer">
              <h3>Group Chat App</h3>
              <p>
                Created a group chat application where users can login and send
                and receive messages
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="work">
            <img src={GroupChat} alt="Project 2" />
            <div className="layer">
              <h3>Group Chat App</h3>
              <p>
                Created a group chat application where users can login and send
                and receive messages
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="work">
            <img src={GroupChat} alt="Project 3" />
            <div className="layer">
              <h3>Group Chat App</h3>
              <p>
                Created a group chat application where users can login and send
                and receive messages
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn"> See more</a>
      </div>
    </div>
  );
};

export default Projects;
