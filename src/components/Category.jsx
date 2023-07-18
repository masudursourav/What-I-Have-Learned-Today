import "../style.css"
const Category = () => {
    return (
        <>
         <aside>
          <ul>
            <li className="category">
              <button className="btn btn-all-categories">All</button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
              >
                Technology
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
              >
                Science
              </button>
            </li>
          </ul>
        </aside>   
        </>
    );
};

export default Category;