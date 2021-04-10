import React from "react";
import "./styles.css";
import { useState } from "react";

const myAnimeList = {
  Romance: [
    { id: 1, name: "Your Lie in April", rating: "5/5" },
    { id: 2, name: "Snow White with the Red Hair", rating: "4.5/5" },
    { id: 4, name: "My Love Story", rating: "3.5/5" },
    { id: 5, name: 'Say "I Love You" ', rating: "3/5" }
  ],
  Comedy: [
    {
      id: 6,
      name: "My Ordinary Life",
      rating: "5/5"
    },
    {
      id: 7,
      name: "Gintama",
      rating: "4.5/5"
    },
    {
      id: 8,
      name: "The Devil Is A Part-Timer",
      rating: "4/5"
    }
  ],
  Adventure: [
    {
      id: 9,
      name: "Fullmetal Alchemist: Brotherhood",
      rating: "4.5/5"
    },
    {
      id: 10,
      name: "Magi: The Labyrinth of Magic",
      rating: "4/5"
    },
    {
      id: 11,
      name: "One Piece",
      rating: "4/5"
    }
  ],
  Shounen: [
    {
      id: 12,
      name: "Black Clover",
      rating: "4.5/5"
    },
    {
      id: 13,
      name: "Attack On Titan",
      rating: "4/5"
    },
    {
      id: 14,
      name: "Code Geass",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Romance");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> ^_^ Top Rated Animes ^_^ </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my collection of favourite Animes. Select a category to get
        started with.
      </p>

      <div>
        {Object.keys(myAnimeList).map((category) => (
          <button
            id={category}
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {myAnimeList[selectedCategory].map((anime) => (
            <li
              key={anime.id}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {anime.name} </div>
              <div style={{ fontSize: "smaller" }}> {anime.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
