import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [resetToggle, setResetToggle] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  function handleResetClick() {
    props.resetClick();
  }
  function handleResetEnter() {
    setResetToggle(true);
  }
  function handleResetLeave() {
    setResetToggle(false);
  }

  function handleDropdownClick() {
    setShowToggle((prev) => {
      return !prev;
    });
    console.log(showToggle);
  }

  return (
    <react.Fragment>
      <div className="navbar">
        <div className="navbar-brand">
          <h4>tarot</h4>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownClick}>
            Options
          </button>
          {showToggle && (
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          )}
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
