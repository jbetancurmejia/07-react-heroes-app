import { useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { useNavigate } from "react-router-dom";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }
  const {
    id,
    superhero,
    publisher,
    alter,
    first,
    characters,
    alter_ego,
    first_appearance,
  } = hero;

  const imagePath = `/assets/images/${id}.jpg`;
  return (
    <div className="row mt-05">
      <div className="col-4 animate__animated animate__backInDown">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
