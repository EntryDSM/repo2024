import * as _ from "@/pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Landing />} />
          <Route path="error/:code" element={<_.Error />} />
        </Route>
        <Route path="/*" element={<Navigate to="/error/404" />} />
      </Routes>
    </BrowserRouter>
  );
};