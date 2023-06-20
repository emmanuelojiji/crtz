import "./AlertWindow.scss";
import Draggable from "react-draggable";
import errorIcon from "../Media/error.png";

const AlertWindow = ({ onClick }) => {
  return (
    <div className="alert-window-container">
      <Draggable>
        <div className="alert-window">
          <div className="header">
            <h3>System Virus</h3>
          </div>

          <div class="alert-window-wrap">
            <div className="icon-text-wrap">
              <div>
                <img src={errorIcon} draggable="false"></img>
              </div>

              <p>
                Your system has been compromised Your files and sensitive
                information may be exposed.
              </p>
            </div>
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default AlertWindow;
