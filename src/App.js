import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
// import AllQuotes from "./components/pages/AllQuotes";
// import QuoteDetail from "./components/pages/QuoteDetail";
// import NewQuote from "./components/pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/Layout/Layout";
// import NotFoundPage from "./components/pages/NotFountPage";
import { lazy } from "react";
import { Suspense } from "react";

const AllQuotes = lazy(() => import("./components/pages/AllQuotes"));
const QuoteDetail = lazy(() => import("./components/pages/QuoteDetail"));
const NewQuote = lazy(() => import("./components/pages/NewQuote"));
const NotFoundPage = lazy(() => import("./components/pages/NotFountPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <NotFoundPage />{" "}
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route
          path="/quotes"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AllQuotes />{" "}
            </Suspense>
          }
        />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route
          path="/new-quote"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <NewQuote />{" "}
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
