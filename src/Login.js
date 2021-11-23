import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
<<<<<<< HEAD

const clientId = process.env.REACT_APP_clientId;

function Login() {

    const [username, setusername] = useState();
    const [useremail, setuseremail] = useState();
    const [userimage, setuserimage] = useState();
=======
import UserProfile from './UserProfile';
const clientId = process.env.REACT_APP_CLIENTID;

function Login() {
   

    const [username, setusername] = useState("");
    const [useremail, setuseremail] = useState("");
    const [userimage, setuserimage] = useState("");
>>>>>>> mealboard_cont

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setusername(res.profileObj.name);
        setuseremail(res.profileObj.email);
        setuserimage(res.profileObj.imageUrl);
<<<<<<< HEAD
=======
        UserProfile.setEmail(res.profileObj.email);
        UserProfile.setName(res.profileObj.name);
        fetchEmail(res.profileObj.email);
        
>>>>>>> mealboard_cont
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

<<<<<<< HEAD
    return (
        <div>
            <div className="user-info">
                <img src={userimage} />
                <p>{username}</p>
                <p>{useremail}</p>
            </div>
            {showloginButton ?
=======
    function fetchEmail(email){

        fetch("/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {'email': email}),
          });
   
    }

    return (
        <div>
            <div className="user-info">
                <img src={userimage} atl="" />
                <p>{username}</p>
                <p>{useremail}</p>
            </div>
            { showloginButton ?
>>>>>>> mealboard_cont
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

<<<<<<< HEAD
            {showlogoutButton ?
=======
            { showlogoutButton ?
>>>>>>> mealboard_cont
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> mealboard_cont
