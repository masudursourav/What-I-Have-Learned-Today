import { useEffect, useState } from "react"
import Category from "./components/Category"
import FactList from "./components/FactList"
import Header from "./components/Header"
import NewFactForm from "./components/NewFactForm"
import "./style.css"
import supabase from "./supabase"
import Loader from "./components/Loader"
function App() {
  const [showFrom,setShowFrom] = useState(false);
  const [facts,setFacts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  
  useEffect(function(){
    async function getFacts() {
      setLoading(true);

      let query = supabase.from('facts').select('*');
      if(currentCategory !== "all"){
      query = query.eq("category",currentCategory);
      }
      let {data: facts, error} = await query
      .order("votesInteresting",{ascending:false})
      .limit(1000);
      if(!error){
      setFacts(facts);
      }
      else{
        alert("database issue");
      }
      setLoading(false);
    }
    getFacts();
    
  },[currentCategory]);
  return (
    <>
      <Header showFrom={showFrom} setShowFrom= {setShowFrom} />
      {showFrom ? <NewFactForm setFacts = {setFacts} setShowFrom ={setShowFrom} /> : null}
      <div className="main">
      <Category setCurrentCategory={setCurrentCategory} />
      {loading ? <Loader /> : <FactList facts = {facts}  setFacts ={setFacts}/>}
      </div>
    </>
  )
}

export default App
