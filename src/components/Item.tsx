import React from "react";

// Definierar typen för de props som Item-komponenten kommer att ta emot : title (sträng), year (nummer) och watched (boolean)
type ItemProps = {
  title: string;
  year: number;
  watched: boolean;
};

// Det är en presentational component som tar emot props för titel, år och om filmen är sett
const Item: React.FC<ItemProps> = ({ title, year, watched }) => {
  return (
    // Här definieras en div med klass "item" för CSS-styling
    <div className="item">
      {/* Här renderas filmens titel och årtal*/}
      <h3>{title} ({year})</h3>
      {/* Här används en ternary operator för att visa om filmen är sett eller inte */}
      {/* Om watched är true, visas en grön checkmark, annars visas ett rött kryss */}
      <p>{watched ? "✅ Sett" : "❌ Inte sett"}</p>
    </div>
  );
};

export default Item;
