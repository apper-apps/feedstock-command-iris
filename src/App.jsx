import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Shop from "@/components/pages/Shop"

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </div>
  )
}

export default App