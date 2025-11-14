import React from "react";

export default function Prices() {
    return (
        <div>
            <h1>Our Prices</h1>
            <p>At TCC Wills, we believe in transparent and affordable pricing for all our legal services. Below is a breakdown of our prices for creating Wills, Enduring Powers of Attorney, Letters of Administration, and Probate services.</p>
            <h2>Service Prices</h2>
            <ul>
                <li><strong>Single Will:</strong> $100.00 - Includes a basic will with standard clauses.<button onClick={() => alert("Redirecting to Single Will creation...")}>Get Started</button></li>
                <li><strong>Couple Will:</strong> $150 - Includes a basic will with standard clauses.<button onClick={() => alert("Redirecting to Couple Will creation...")}>Get Started</button></li>
                <li><strong>Enduring Power of Attorney:</strong> ?? - Comprehensive power of attorney document.<button onClick={() => alert("Redirecting to Enduring Power of Attorney creation...")}>Get Started</button></li>
                <li><strong>Letter of Administration:</strong> ?? - Legal assistance for administering an estate without a will.<button onClick={() => alert("Redirecting to Letter of Administration creation...")}>Get Started</button></li>
                <li><strong>Probate Services:</strong> ??  - Expert guidance through the probate process.<button onClick={() => alert("Redirecting to Probate Services creation...")}>Get Started</button></li>
            </ul>
        </div>
    );
}