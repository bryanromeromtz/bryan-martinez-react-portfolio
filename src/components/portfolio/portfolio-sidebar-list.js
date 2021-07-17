import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const portfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <div className="img-box">
            <img src={portfolioItem.thumb_image_url}></img>
          </div>
        </div>

        <div className="text-content">
          <div className="title">{portfolioItem.name}</div>
          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default portfolioSidebarList;
