import "../style.css";

const Fact = ({ fact }) => {
    return (
        <>
          <li className="fact" key = {fact.id}>
              <p>
                {fact.text}
                <a className="source" href={fact.source} target="_blank"
                  >(Source)</a>
              </p>
              <span className="tag">{fact.category}</span
              >
              <div className="vote-buttons">
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯 {fact.votesMindblowing}</button>
                <button>⛔️ {fact.votesFalse}</button>
              </div>
            </li>   
        </>
    );
};

export default Fact;