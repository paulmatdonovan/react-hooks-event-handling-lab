// Code Keypad Component Here
import React from "react";

function Keypad() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Entering password...");
    }

    return (
        <div>
            <form onChange={handleSubmit}>
                <input type="password" name="password" placeholder="Enter Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Keypad;