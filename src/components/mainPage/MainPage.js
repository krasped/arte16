import React from "react";
import { Link } from "react-router-dom";
import './mainPage.css';

export default function MainPage() {
    return (
        <>
            <button className="mainPage-btn">
                <Link
                    to="form"
                    style={{ textDecoration: "none", color: "black", display:'flex', justifyContent:'center' }}
                >
                    FORM
                </Link>
            </button>
        </>
    );
}
