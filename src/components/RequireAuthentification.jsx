import React from "react";

export default function RequireAuthentification({ role, children }) {
    const [render, setRender] = React.useState(false);
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/v1/verification/verifysession", {
        method: "get",
        headers: {
            "token": token
        }
    }).then(res => {
        return res.text();
    }).then((data) => {
        if (data.toUpperCase() != role.toUpperCase()) throw new Error();
        setRender(true);
    }).catch((e) => {
        window.localStorage.removeItem("token");
        if (role.toUpperCase() != "ADMIN") window.location.assign("/signin?url=" + window.location)
        else window.location.assign("/admin/signin");
    })
    return render && <>{children}</>;
}