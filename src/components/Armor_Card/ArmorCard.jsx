/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import classes from "./ArmorCard.module.scss";

export function ArmorCard({ children, imgSrc, upgrades, materials }) {
  const [currentLevel, SetCurrentLevel] = useState(0);

  return (
    <div className={classes.card}>
      <img src={imgSrc}></img>
      <h3>{children}</h3>
      <div className={classes.levelContainer}>
        <button onClick={() => SetCurrentLevel(0)}>Base</button>
        <button onClick={() => SetCurrentLevel(1)}>1</button>
        <button onClick={() => SetCurrentLevel(2)}>2</button>
        <button onClick={() => SetCurrentLevel(3)}>3</button>
        <button onClick={() => SetCurrentLevel(4)}>4</button>
      </div>
      {upgrades[currentLevel].map((upgrade) => {
        const materialIndex = materials.indexOf();
        return (
          <div className={classes.materialContainer}>
            <div>{materials[materialIndex].imgSrc}</div>
            <div>{upgrade.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}