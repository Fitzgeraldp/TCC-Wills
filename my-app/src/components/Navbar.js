import React from "react";

export default function Navbar() {
    return (
        <nav style={{ textAlign: "center", padding: "10px", backgroundColor: "#333" }}>
            <a href="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Home</a>
            <a href="/about-us" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>About Us</a>
            <a href="/wills" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Wills</a>
            <a href="/enduring-poa" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Enduring POA</a>
            <a href="/faqs" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>FAQs</a>
            <a href="/contact-us" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contact Us</a>
        </nav>
    );
}