import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Order from "./Page/Order";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Catch all unknown routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;