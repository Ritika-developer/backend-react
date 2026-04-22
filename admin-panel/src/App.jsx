import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import MoviesPage from "./admin/pages/MoviePage";

function Placeholder({ title }) {
  return <div>{title}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="theatres" element={<Placeholder title="Theatres Page" />} />
          <Route path="shows" element={<Placeholder title="Shows Page" />} />
          <Route path="bookings" element={<Placeholder title="Bookings Page" />} />
          <Route path="users" element={<Placeholder title="Users Page" />} />
          <Route path="payments" element={<Placeholder title="Payments Page" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}






