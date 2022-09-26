import "./AlertWindow.scss";
import Draggble from "react-draggable";
import errorIcon from "../Media/error.png";

const AlertWindow = () => {
  return (
    <div className="alert-window-container">
      <Draggble>
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
              <button>OK</button>
     
          </div>
        </div>
      </Draggble>
    </div>
  );
};

export default AlertWindow;
