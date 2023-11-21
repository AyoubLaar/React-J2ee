import React from "react";

export default function RenderIfAuthentifiedPatient({ children }) {
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
        if (role == "patient") {
            setRender(true);
        }
    }).catch((e) => {
        window.localStorage.removeItem("token");
        window.location.reload();
    })
    return render ? <>{children}</> : <></>;
}