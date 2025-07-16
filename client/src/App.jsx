import { Link, Outlet } from "react-router"
function App() {

  return (
    <div className="">
      <div className="h-10 text-black flex justify-end m-2 gap-4">
        <Link to='/' className="bg-green-400 h-8 px-2 rounded-2xl">Home</Link>
        <Link to='/add/sweets' className="bg-green-400 h-8 px-2 rounded-2xl">ADD/Re-stock/Delete</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
