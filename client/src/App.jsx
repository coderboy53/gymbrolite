import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import MyWorkouts from "./MyWorkouts";
function App() {

  return (
    <BrowserRouter >
      <Routes >
        <Route index element={<Login />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workouts" element={<MyWorkouts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
