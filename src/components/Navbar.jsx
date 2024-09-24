import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [resetToggle, setResetToggle] = useState(false);

  function handleResetClick() {
    props.resetClick();
  }
  function handleResetEnter() {
    setResetToggle(true);
  }
  function handleResetLeave() {
    setResetToggle(false);
  }

  return (
    <react.Fragment>
      <div className="navbar">
        <div className="navbar-brand">
          <h4>Pick a Card</h4>
        </div>
        <div>
          <button
            className="setting-button"
            onClick={handleResetClick}
            onMouseEnter={handleResetEnter}
            onMouseLeave={handleResetLeave}
          >
            <FontAwesomeIcon
              icon={faSpinner}
              width={50}
              height={50}
              className="reset-icon"
            />
          </button>

          {resetToggle ? (
            <div className="reset-text">
              <p>reset</p>
            </div>
          ) : null}
        </div>
      </div>
    </react.Fragment>
  );
}
export default Navbar;
