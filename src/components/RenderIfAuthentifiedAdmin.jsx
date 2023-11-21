import React from "react";

export default function RenderIfAuthentifiedAdmin() {
    const sessionId = window.localStorage.getItem("token");
    const [render, setRender] = React.useState(false);
    fetch("http://localhost:8080/api/v1/verification/verifysession", {
        method: "get",
        headers: {
            "token": sessionId
        }
    }).then(res => {
        if (!res.ok) throw new Error();
        return res.text();
    }).then((role) => {
        if (role == "admin") {
            setRender(true);
        }
    }).catch((erreur) => {
        window.localStorage.removeItem("token");
        window.location.reload();
    })
    return !render ? <>{children}</> : <></>;
}