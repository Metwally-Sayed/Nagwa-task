import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Componets/Quiz";
import Home from "./Componets/Home";
import QuestionStore from "./Componets/context/questionContext";
import Result from "./Componets/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      <QuestionStore>
        <RouterProvider router={router} />
      </QuestionStore>
    </>
  );
}

export default App;
