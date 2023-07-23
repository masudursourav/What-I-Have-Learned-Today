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
  useEffect(function(){
    async function getFacts() {
      let {data: facts, error} = await supabase
      .from('facts')
      .select('*')
      .order("votesInteresting",{ascending:false})
      .limit(1000);
      if(!error){
      setFacts(facts);
      }
      else{
        alert("database issue");
      }
      setLoading(true);
    }
    getFacts();
    
  },[]);
  return (
    <>
      <Header showFrom={showFrom} setShowFrom= {setShowFrom} />
      {showFrom ? <NewFactForm setFacts = {setFacts} setShowFrom ={setShowFrom} /> : null}
      <div className="main">
      <Category />
      {loading ? <FactList facts = {facts} /> : <Loader />}
      </div>
    </>
  )
}

export default App
