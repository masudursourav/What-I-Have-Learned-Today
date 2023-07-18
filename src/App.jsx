import Category from "./components/Category"
import FactList from "./components/FactList"
import Header from "./components/Header"
import NewFactForm from "./components/NewFactForm"
import "./style.css"
function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      <div className="main">
      <Category />
      <FactList />
      </div>
    </>
  )
}

export default App
