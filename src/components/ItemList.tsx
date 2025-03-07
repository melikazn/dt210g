import React from "react";
// Importerar Item-komponenten som används för att visa varje film i listan
import Item from "./Item";

// Definierar en array med filmobjekt, varje objekt innehåller titel, år och en boolean som anger om filmen är sett
const movies = [
  { title: "Inception", year: 2010, watched: true },
  { title: "Breaking Bad", year: 2008, watched: false },
  { title: "The Matrix", year: 1999, watched: true },
  { title: "The Shawshank Redemption", year: 1994, watched: false },
  { title: "The Godfather", year: 1972, watched: true },
  { title: "12 Angry Men", year: 1957, watched: true }
];

//  en lista med filmer renderas genom att iterera över movies-arrayen och skapa en Item-komponent för varje film
const ItemList: React.FC = () => {
  return (
    // En div med klass "item-list" som omsluter alla filmkomponenter
    <div className="item-list">
      {/* Här används .map() för att iterera över movies-arrayen och skapa en Item-komponent för varje film */}
      {/* Varje Item får sina props från filmobjektet, där title, year och watched skickas vidare */}
      {movies.map((movie, index) => (
        // En unik key ges till varje Item-komponent för att React ska kunna spåra varje element i listan
        <Item key={index} title={movie.title} year={movie.year} watched={movie.watched} />
      ))}
    </div>
  );
};

export default ItemList;
