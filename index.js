import { useState, useTransition, useOptimistic, use, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./src/Dashboard";

const App = () => {
  return (
    <Dashboard />
  );
};
  
const root = createRoot(document.getElementById('root'));
root.render(<App />);