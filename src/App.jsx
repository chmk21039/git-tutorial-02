import React, { useState } from 'react';
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}


export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");
  const [customName, setCustomName] = useState("Bob");
  const [weight, setWeight] = useState("");
  const [tem, setTem] = useState("");

  const arrX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const arrY = ["the soup kitchen", "Disneyland", "the White House"];
  const arrZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
  const weights = ["pounds", "stone"];
  const tempalture = ["fahrenheit", "centigrade"];

  function handleClick() {
    setXItem(randomValueFromArray(arrX));
    setYItem(randomValueFromArray(arrY));
    setZItem(randomValueFromArray(arrZ));
    setShowStory(true);
    if(ukus === "us"){
        weight = setUkus(weights[0]);
        tem = setTem(tempalture[0]);
    } else {
        weight = setUkus(weights[1]);
        tem = setTem(tempalture[1]);
    }
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text"
        placeholder=""
        value={customName}
        onChange={(e)=> setCustomName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input 
            type="radio" 
            value="us" 
            checked={ukus === "us"} 
            onChange={() => setUkus("us")} 
        />
        <label htmlFor="uk">UK</label>
        <input 
            type="radio" 
            value="uk" 
            checked={ukus === "uk"} 
            onChange={() => setUkus("uk")} 
        />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 {tempalture} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {customName} saw the whole thing, but was not surprised — {xItem} weighs 300
          {weights}, and it was a hot day.
        </p>
      )}
    </>
  );
}