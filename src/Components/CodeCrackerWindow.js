import "./CodeCrackerWindow.scss";
import { useEffect, useState } from "react";

import Draggable from "react-draggable";

const CodeCracker = ({ changeView, window }) => {
  const codes = [
    {
      code: 123456,
      link: "http://link.com",
      product: "Black Cargos",
      discount: "20% off",
    },

    {
      code: 243898,
      link: "http://link.com",
      product: "White vest",
      discount: "15% off",
    },
    {
      code: 243898,
      link: "http://link.com",
      product: "Oversized Tee",
      discount: "10% off",
    },
  ];
  const [userInput, setUserInput] = useState([]);
  let userInputValue = userInput.join("");

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

  useEffect(() => {
    console.log(userInputValue);
  });

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
          <h3>Calculator</h3>
          <div className="header-right">
            <button
              className="header-close"
              onClick={() => changeView(window.id, "minimized")}
            >
              -
            </button>
            <button
              className="header-close"
              onClick={() => changeView(window.id, "close")}
            >
              x
            </button>
          </div>
        </div>

        <div className="file-container">
          <input
            readOnly
            type="text"
            value={
              matchingCode
                ? matchingCode
                : userInputValue > 0
                ? userInputValue
                : "0."
            }
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
          <div className="row">
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              MC
            </button>
            <button
              className="number-button number"
              value="7"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              7
            </button>
            <button
              className="number-button number"
              value="8"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              8
            </button>
            <button
              className="number-button number"
              value="9"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              9
            </button>
            <button
              className="number-button"
              value="/"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              /
            </button>
          </div>

          <div className="row">
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              MR
            </button>
            <button
              className="number-button number"
              value="4"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              4
            </button>
            <button
              className="number-button number"
              value="5"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              5
            </button>
            <button
              className="number-button number"
              value="6"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              6
            </button>
            <button
              className="number-button"
              value="*"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              *
            </button>
          </div>

          <div className="row">
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              MS
            </button>
            <button
              className="number-button number"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              1
            </button>
            <button
              className="number-button number"
              value="2"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              2
            </button>
            <button
              className="number-button number"
              value="3"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              3
            </button>
            <button
              className="number-button"
              value="-"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              -
            </button>
          </div>

          <div className="row">
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              M+
            </button>
            <button
              className="number-button number"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              0
            </button>
            <button
              className="number-button"
              value="1"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              +/-
            </button>
            <button
              className="number-button"
              value="+"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              +
            </button>
            <button
              className="number-button"
              onClick={(e) => handleNumberClick(e.target.value)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default CodeCracker;
