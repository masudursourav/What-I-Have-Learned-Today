/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "../style.css"

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const NewFactForm = ({ setFacts, setShowFrom }) => {
  const [text,setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setSCategory] =  useState("");
  let textLength = text.length;

  function handelSubmit(e){
    e.preventDefault();
    if(text && isValidHttpUrl(source) && category && textLength <= 200){
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),        
      };
      setFacts((facts) => [newFact, ...facts]);

      setText("");
      setSource("");
      setSCategory("");

      setShowFrom(false)
    }   

  }
    return (
        <>
         <form className="fact-form" onSubmit={handelSubmit}>
        <input type="text" value = {text} onChange={(e)=> setText(e.target.value)} placeholder="Share a fact with the world..." />
        <span>{(200 - textLength) > 0 ? 200  - textLength : alert("Limit is 200") }</span>
        <input type="text" value = {source} onChange={(e)=> setSource(e.target.value)} placeholder="Trustworthy source..." />
        <select value = {category} onChange={(e)=> setSCategory(e.target.value)}>
          <option value="">Choose category:</option>
          {CATEGORIES.map(cat => <option key={cat.name} value={cat.name}>{cat.name.toLocaleUpperCase()}</option>)}
        </select>
        <button className="btn btn-large">Post</button>
      </form>   
        </>
    );
};

export default NewFactForm;