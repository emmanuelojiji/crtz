import "./CodeCrackerWindow.scss";
import { useEffect, useState } from "react";

import Draggable from "react-draggable";

const CodeCracker = ({ changeFileView, file, window, image }) => {
  const codes = [
    { code: 458574, link: "google.com", product: "Brown cargos" },
    {
      code: 123456,
      link: "123.com",
      product: "Black Cargos",
      discount: "20% off",
    },
    { code: 238474, link: "google.com", product: "Black hoodie" },
  ];
  const [userInput, setUserInput] = useState([]);
  const userInputValue = userInput.join("");

  const [matchingCode, setMatchingCode] = useState();
  const [link, setLink] = useState("");
  const [result, setResult] = useState("");
  const [product, setProduct] = useState("");
  const [discount, setDiscount] = useState("");

  const handleNumberClick = (value) => {
    if (userInput.length < 6) {
      setUserInput([...userInput, value]);
    }
  };

  const checkCode = () => {
    codes.forEach((obj) => {
      if (obj.code == userInputValue) {
        setMatchingCode(obj.code);
        setLink(obj.link);
        setProduct(obj.product);
        setDiscount(obj.discount);
        setResult("success");
        console.log();
      } else {
        setUserInput([]);
      }
    });
  };

  return (
    <Draggable handle=".header">
      <div className="CodeCracker FileWindow">
        <div className="header">
          <h3>Code Cracker</h3>
          <div className="header-right">
            <button
              className="header-close"
              onClick={() => changeFileView(window.id, file.id, "minimized")}
            >
              -
            </button>
            <button
              className="header-close"
              onClick={() => changeFileView(window.id, file.id, "close")}
            >
              x
            </button>
          </div>
        </div>

        <div className="file-container">
          <h2>Code Cracker</h2>
          <input
            readOnly
            type="text"
            value={matchingCode ? matchingCode : userInputValue}
            style={{
              color: result === "success" && "green",
              fontWeight: result === "success" && "bold",
            }}
          ></input>
          {result === "success" && (
            <a className="link" href={link}>
              {product} - {discount}
            </a>
          )}
          <div className="number-row">
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              1
            </button>
            <button
              className="number-button"
              value="2"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              2
            </button>
            <button
              className="number-button"
              value="3"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              3
            </button>
          </div>
          <div className="number-row">
            <button
              className="number-button"
              value="4"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              4
            </button>
            <button
              className="number-button"
              value="5"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              5
            </button>
            <button
              className="number-button"
              value="6"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              6
            </button>
          </div>
          <div className="number-row">
            <button
              className="number-button"
              value="7"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              7
            </button>
            <button
              className="number-button"
              value="8"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              8
            </button>
            <button
              className="number-button"
              value="9"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              9
            </button>
          </div>
          <div className="number-row">
            <button className="number-button" value="0">
              0
            </button>
          </div>
          <button className="go" onClick={() => checkCode()}>
            Go
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default CodeCracker;
