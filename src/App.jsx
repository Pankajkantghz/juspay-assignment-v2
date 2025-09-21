import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Order from "./Page/Order";
import { useTheme } from "./hooks/useTheme";  // ✅ import your custom theme hook

const App = () => {
  // 🔥 Global theme
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Order theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/dashboard" element={<Dashboard theme={theme} toggleTheme={toggleTheme} />} />
        {/* Catch all unknown routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;