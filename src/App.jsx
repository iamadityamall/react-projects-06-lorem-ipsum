import React, { useState } from "react";
import { useEffect } from "react";

import data from "./data";
import Modal from "./Modal";

const App = () => {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#f1f5f8";
    document.title = "Lorem Ipsum"
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (amount > data.length) {
      amount = data.length;
      setShowModal(true);
      setModal((modal) => {
        return {
          ...modal,
          title: "number is more than paragraph available",
          message: "showing maximum paragraphs of 8",
        };
      });
    }
    if (amount <= 0) {
      amount = 1;
      setShowModal(true);
      setModal((modal) => {
        return {
          ...modal,
          title: "number is less than zero",
          message: "showing minimum paragraphs of 1",
        };
      });
    }
    setTexts(() => {
      let newText = data.slice(0, amount);
      return newText;
    });
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <main className="mt-12 w-[80vw] mx-[10vw] sm:w-[60vw] sm:mx-[20vw] md:w-[50vw] md:mx-[25vw]">
      {showModal && <Modal {...modal} closeModal={closeModal}/>}
      <header className="capitalize font-mono text-center font-bold text-xl">
        <h1 className="py-2">tired of boring lorem ipsum?</h1>
      </header>
      <form className="flex p-2 justify-center space-x-5 font-semibold items-center mt-5">
        <label htmlFor="amount" className="px-2">
          Paragraphs :{" "}
        </label>
        <input
          type="number"
          id="amount"
          className="w-14 p-1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 rounded-sm text-white bg-blue-400"
        >
          generate
        </button>
      </form>
      <section className="flex flex-col space-y-5 mt-16">
        {texts.map((text, index) => {
          return (
            <article key={index}>
              <h4 className="font-semibold pb-1">Paragraph : {index + 1}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default App;
