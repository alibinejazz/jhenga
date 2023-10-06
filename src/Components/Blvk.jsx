import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blvk = () => {
    const [mail, setMail] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setMail(storedEmail);
        }
    }, []);

    function logOut() {
        localStorage.removeItem("email");
        nav("/");
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-4 h1">Navbar</span>
                {mail && (
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        Signed in as {mail} <button onClick={logOut} style={{ width: "100px", borderRadius: "10px" }}>Log out</button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Blvk;
