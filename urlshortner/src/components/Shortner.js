import React, { useState } from "react";
import img4 from "../Images/img4.gif";
function Shortner() {
  const [userUrl, setUserUrl] = useState("");
  const [short, setShort] = useState("http://localhost:8001/______");
  const handleChange = (e) => {
    setUserUrl(e.target.value);
  };

  async function sendData(e) {
    e.preventDefault();
    if (userUrl === "") {
      alert("Enter the URL");
    } else {
      try {
        const response = await fetch("http://localhost:8001/url/postnewurl", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            extendedURL: userUrl,
          }),
        });
        const data = await response.json();
        console.log(data);
        setShort("http://localhost:8001/" + data.id);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className="spage">
      <div className="user-input">
        <div className="div1">
          <h1 className="header-text">Get a shortend form of your website!</h1>
          <input
            type="name"
            value={userUrl}
            name="URL"
            onChange={handleChange}
            placeholder="Enter the looong URL here..."
          />
          <button className="sendButton" onClick={sendData}>
            Send
          </button>
          <div className="final-url-container">
            <text>
              Your Shortened URL is: <span>{short}</span>
            </text>
          </div>
        </div>
        <div className="div2">
          <img src={img4} alt="none"></img>
        </div>
      </div>
    </div>
  );
}

export default Shortner;
