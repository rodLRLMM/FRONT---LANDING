import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Branches from "./pages/branches"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucursales" element={< Branches />} />
      </Routes>
    </BrowserRouter>
  )
}