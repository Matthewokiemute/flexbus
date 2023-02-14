import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export const Login = () => {
    return (
        <section className="register_page">
            <Header content="Create an Account" />
            <div className="content_wrapper">
                <div className="form_container">
                    <h1>Login Now</h1>
                    <form>
                        <div className="input_box">
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" />
                        </div>
                        <div className="input_box">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input type="name" />
                        </div>
                        <div className="register_box">
                        <a href="/dashboard">
                        <button>Login</button>
                        </a>
                        <span>Don't have an account <a href="/dashboard">Register here</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <Footer style={{ position: "fixed", bottom: "0" }} />
        </section>
    );
} 