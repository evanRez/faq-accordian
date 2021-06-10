import React, { useState } from "react";
import "./App.css";
import mainImage from "./images/bg-pattern-desktop.svg";
import womanDesk from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";

const faqs = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password? ",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function App() {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="desktopImageBundle">
            <div className="bgWrap">
              <img className="bgImage" src={mainImage} alt="" />
            </div>
            <img className="imageWomanDesk" src={womanDesk} alt="" />
          </div>
          <img className="box" src={box} alt="" />
          <div className="faq">
            <h1 className="title-text">FAQ</h1>
            {faqs.map(({ question, answer }, index) => (
              <div
                key={`item-${index}`}
                className={`item ${selectedQuestion === index ? "open" : ""}`}
              >
                <p className="question" onClick={() => openQuestion(index)}>
                  {question}
                </p>
                <p className="answer">{answer}</p>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.reznitek.com/">Evan Reznicek</a>.
      </div>
    </div>
  );
}

export default App;
