import React from "react";
import { Link } from "react-router-dom";
import { _CreateUser } from "../services/UserService";

function SignUp() {
    return (
        <div>
            <form>
                <input />
                <input />
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </form>
        </div>
    );
}

export default SignUp;

