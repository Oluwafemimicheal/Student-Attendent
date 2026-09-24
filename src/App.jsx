import { Route, Routes } from "react-router-dom"
import Dashboard from "./layouts/Dashboard"
import Auth from "./layouts/Auth"
import Login from "./components/auth/Login"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        {/* Auth Router */}
        <Route element={<Auth />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Dashboard Routers */}
        <Route path="/dashboard" element={<Dashboard />}>

        </Route>

      </Routes>
    </div>
  )
}

export default App
