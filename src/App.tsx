
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Login";
import SignUp from "./components/signup"; // Make sure the file name matches
import HomePage from "./components/HomePage";
import ResumeTemplate from "./components/templetes/free/Templetes1";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn checkLogin={(user: string, pass: string) => {
          return user === "user" && pass === "password"
        }} />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="forgetpassword" element={<ForgotPasswordPage />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="templete" element={<ResumeTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
