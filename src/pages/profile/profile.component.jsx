import "./profile.style.scss";
import { Helmet } from "react-helmet";

const Profile = () => {
    return (
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                    <div class="card p-3 py-4">
                        <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"/> </div>
                        <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">Food Enthusiast</span>
                            <h5 class="mt-2 mb-0">John Doe</h5> <span>Foodie</span>
                            <div class="px-4 mt-1">
                                <p class="fonts">Loves Biryani </p>
                            </div>
                            <ul class="social-list">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-dribbble"></i></li>
                                <li><i class="fa fa-instagram"></i></li>
                                <li><i class="fa fa-linkedin"></i></li>
                                <li><i class="fa fa-google"></i></li>
                            </ul>
                            <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> <button class="btn btn-primary px-4 ms-3">Contact</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;
