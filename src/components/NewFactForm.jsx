/* eslint-disable react/jsx-key */
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

const NewFactForm = () => {
    return (
        <>
         <form className="fact-form">
        <input type="text" placeholder="Share a fact with the world..." />
        <span>200</span>
        <input type="text" placeholder="Trustworthy source..." />
        <select>
          <option value="">Choose category:</option>
          {CATEGORIES.map(cat => <option value={cat.name}>{cat.name.toLocaleUpperCase()}</option>)}
        </select>
        <button className="btn btn-large">Post</button>
      </form>   
        </>
    );
};

export default NewFactForm;