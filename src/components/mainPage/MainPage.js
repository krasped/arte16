import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <button>
                <Link
                    to="form"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    FORM
                </Link>
            </button>
        </>
    );
}
