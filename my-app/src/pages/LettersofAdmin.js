import React from "react";

export default function LettersofAdmin() {
    return (
        <div>
            <h1>Letter of Administration</h1>
            <p>A Letter of Administration is a legal document that allows a person to manage the estate of someone who has died without a will.</p>
            <p>Click here to book a free consultation with our expert law firm to organise a Letter of Administration.</p>
            <button onClick={() => alert("Starting the letter of administration creation process...")}>Start Now</button>

        </div>
    );
}
