import Header from "../components/header";
import { Orders } from "../components/Order";

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header content="Welcome 👏 John Doe" />
            <div className="content_wrapper">
                <div>
                    <h1>
                    We're delighted <br />to have you at Flexbus.
                    </h1>
                    <button className='btn btn_secondary'>Book your first Ride</button>
                </div>
                <div>
                   <img src="https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482__340.jpg" width={120} height={100} className="profile_img" />
                   <div>
                     <p>Name: <span>John Doe</span></p>
                     <p>Contact: <span>+23470 0933 233 2333</span></p>
                     <p>Email: <span>JohnDoe@gmail.com</span></p>
                     <p>Location: <span>Warri City, Delta, Nigeria.</span></p>
                   </div>
                </div>
            </div>
            <Orders />
        </div>
    );
}