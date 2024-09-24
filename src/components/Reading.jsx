import react, { useState } from "react";

function Reading(props) {
  const [meaningToggle, setMeaningToggle] = useState(false);
  const [descriptionToggle, setDescriptionToggle] = useState(false);

  const cardTitle = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  function handleQualitiesClick() {
    setMeaningToggle((prev) => {
      return !prev;
    });
  }

  function handleDescriptionClick() {
    setDescriptionToggle((prev) => {
      return !prev;
    });
  }
  return (
    <react.Fragment>
      <div className="reading-content">
        <h3>Congrats! Let's dive into you destiny.</h3>
        <h2>
          Your card : <span>{cardTitle}</span>
        </h2>
        <img className="choosen-card" src={props.image} alt="card-image.png" />
        <div className="container-fluid">
          <div className="row">
            <div className="col lg-6 col-md-6 col-sm-12">
              <button
                className="btn btn-large btn-dark"
                onClick={handleQualitiesClick}
              >
                Qualities
              </button>
              {meaningToggle ? <p>{props.meaning}</p> : null}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <button
                className="btn btn-large btn-dark"
                onClick={handleDescriptionClick}
              >
                Description
              </button>
              {descriptionToggle ? <p>{props.description}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </react.Fragment>
  );
}
export default Reading;
