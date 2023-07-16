import "./Header.css"
const Header = () => {
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

        <button className="btn btn-large">Share a fact</button>
      </header> 
        </>
    );
};

export default Header;