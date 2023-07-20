/* eslint-disable react/prop-types */
import "../style.css"
const Header = ({ showFrom, setShowFrom}) => {
    return (
        <>
        <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Logo"
          />
          <h1>What I Have Learned Today</h1>
        </div>

        <button className="btn btn-large" onClick={() => setShowFrom((value) => !value)}>
          {!showFrom ? "Share a fact" : "Close"}</button>
      </header> 
        </>
    );
};

export default Header;