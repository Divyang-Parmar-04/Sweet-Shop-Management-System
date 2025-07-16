import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import AddSweets from './pages/AddSweets'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
             <Route path = '' element = {<Home/>} />
             <Route path = 'add/sweets' element = {<AddSweets/>} />
        </Route>
    )
)

export default router