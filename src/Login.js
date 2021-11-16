import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_clientId;

function Login() {

    const [username, setusername] = useState();
    const [useremail, setuseremail] = useState();
    const [userimage, setuserimage] = useState();

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setusername(res.profileObj.name);
        setuseremail(res.profileObj.email);
        setuserimage(res.profileObj.imageUrl);
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

    return (
        <div>
            <div className="User Info">
                <img src={userimage} />
                <p>{username}</p>
                <p>{useremail}</p>
            </div>
            {showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            {showlogoutButton ?
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
export default Login;
