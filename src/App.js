import { Route, Routes } from "react-router-dom";
import "./App.css";
// import uploadDoc from "./assets/uploadDoc";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const Categorydetailpage = lazy(() =>
  import("./pages/Categorydetail/Categorydetailpage")
);
const Detailpage = lazy(() => import("./pages/Detailpage/Detailpage"));
const Bookmarkpage = lazy(() => import("./pages/Bookmarkpage/Bookmarkpage"));
const ServiceRequest = lazy(() =>
  import("./pages/ServiceRequest/ServiceRequest")
);
const NewChatpage = lazy(() => import("./pages/Chatpage/NewChatpage"));
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService/TermsOfService")
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const Disclamer = lazy(() => import("./pages/Disclamer/Disclamer"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Homepage />
          </Suspense>
        }
      />

      <Route
        path="/profile"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <ProfilePage />
          </Suspense>
        }
      />

      <Route
        path="/categorypage"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Categorydetailpage />
          </Suspense>
        }
      />
      <Route
        path="/detail"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Detailpage />
          </Suspense>
        }
      />
      <Route
        path="/bookmark"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Bookmarkpage />
          </Suspense>
        }
      />
      <Route
        path="/servicerequest"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <ServiceRequest />
          </Suspense>
        }
      />

      <Route
        path="/chat"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <NewChatpage />
          </Suspense>
        }
      />

      <Route
        path="/terms"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <TermsOfService />
          </Suspense>
        }
      />
      <Route
        path="/privacy"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="/disclamer"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Disclamer />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
