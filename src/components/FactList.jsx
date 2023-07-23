/* eslint-disable react/prop-types */
import "../style.css"
import Fact from "./Fact";

const FactList = ({facts , setFacts}) => {
    
    return (
    <>
     <section>
        <ul className='facts-list'>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts}/>
        ))}
        </ul>
        <p>There are {facts.length} facts in the database. Add your own!</p>
    </section> 
    </>
    );
};

export default FactList;