import React from "react";

export default function Wills() {
    return (
        <div>
            <h1>Create your own Will</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>1. Gather your information</div>
                <div>2. Complete the online questionnaire</div>
                <div>3. Start your Will</div>
                <div>4. Review and finalize your will</div>
            </div>{/* Review layout in CSS */}
            <button onClick={() => alert("Starting the will creation process...")}>Start Now</button>
            <h2>FAQs</h2>
            <h3>Reviews</h3>
            <h4>Cost</h4>
            <h5>State/Territory</h5>
        </div>
    );
}