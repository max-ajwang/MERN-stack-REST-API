import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h2>
            Road to <span>$1K in MRR</span>
          </h2>
          <p>
            Hey there, I'm Max. I'm a cyber security analyst and professional
            web developer based out of Nairobi, Kenya. I'm building a portfolio
            of internet businesses here and sharing my journey to $1K in monthly
            recurrent revenue. Follow my journey here...
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
