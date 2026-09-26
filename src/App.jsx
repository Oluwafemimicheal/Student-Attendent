import { Route, Routes } from "react-router-dom"
import Auth from "./layouts/Auth"
import Login from "./components/auth/Login"
import { Toaster } from "react-hot-toast"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { PublicRoute } from "./components/PublicRoute"
import DashboardLayout from "./layouts/Dashboard"
import DashboardPage from "./pages/DashboardPage"
import DailyAttendancePage from "./pages/DailyAttendancePage"
import StudentDirectoryPage from "./pages/StudentDirectoryPage"
import WeeklyProgressReportPage from "./pages/WeeklyProgressReportPage"
import IndividualStudentPage from "./pages/IndividualStudentPage"

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
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/daily-attendance" element={<DailyAttendancePage />} />
            <Route path="/student-directory" element={<StudentDirectoryPage />} />
            <Route path="/weekly-progress" element={<WeeklyProgressReportPage />} />
            <Route path="/individual-student" element={<IndividualStudentPage />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
