import { Route, Routes } from "react-router-dom"
import Dashboard from "./layouts/Dashboard"
import Auth from "./layouts/Auth"
import Login from "./components/auth/Login"
import { Toaster } from "react-hot-toast"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { PublicRoute } from "./components/PublicRoute"

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        {/* Auth Router */}
        <Route element={<PublicRoute />}>
          <Route element={<Auth />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
