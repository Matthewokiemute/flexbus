import "../App.scss";
import Header from "../components/header";

export const Register = () => {
    return(
        <section className="register_page">
            <Header content="Login Now"/>
            <div className="content_wrapper">
                <div className="form_container">
                    <h1>Register Now</h1>
                    <form action="" method="post">
                        <div className="input_box">
                            <label htmlFor="name">Name <span>*</span></label>
                            <input type="name" />
                        </div>
                        <div className="input_box">
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" />
                        </div>
                        <div className="input_box">
                            <label htmlFor="number">Phone Number <span>*</span></label>
                            <input type="name" />
                        </div>
                        <div className="input_box">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input type="name" />
                        </div>
                        <div className="register_box">
                        <button>Register</button>
                        <span>or <a href="/login">Login here</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
  };