import React from "react";

export default function EnduringPOA() {
    return (
        <div>
            <h1>Create your own Enduring Power of Attorney</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>1. Gather your information</div>
                <div>2. Complete the online questionnaire</div>
                <div>3. Start your Enduring Power of Attorney</div>
                <div>4. Review and finalize your document</div>
                <div>5. Print and witness signature</div>
            </div>
            <button onClick={() => alert("Starting the enduring power of attorney creation process...")}>Start Now</button>
            <h2>FAQs</h2>
            <h3>Reviews</h3>
            <h4>Cost</h4>
            <h5>State/Territory</h5>
        </div>
    );
}

