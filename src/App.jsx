import { useState } from "react"
import Category from "./components/Category"
import FactList from "./components/FactList"
import Header from "./components/Header"
import NewFactForm from "./components/NewFactForm"
import "./style.css"
function App() {
  const [showFrom,setShowFrom] = useState(false);
  return (
    <>
      <Header showFrom={showFrom} setShowFrom= {setShowFrom} />
      {showFrom ? <NewFactForm /> : null}
      <div className="main">
      <Category />
      <FactList />
      </div>
    </>
  )
}

export default App
