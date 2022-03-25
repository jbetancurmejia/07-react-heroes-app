import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter,
  first,
  characters,
  alter_ego,
  first_appearance
}) => {
  const imagePath = `/assets/images/${id}.jpg`;

  
  return (
    <div className="col animate__animated animate__shakeX">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imagePath} className="card-img " />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego} </p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted"> {first_appearance} </small>
              </p>
              <Link to={`/hero/${id}`}>
                  Más...
              </Link>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
