import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import BlankLayout from "../layouts/BlankLayout";
import NotFoundPage from "../pages/NotFoundPage";
import "../index.css";
import { SearchResultPage } from "../pages/SearchResultPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="movie/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchResultPage/>}/>
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
