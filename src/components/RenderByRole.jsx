import React from "react";

export default function RenderByRole({ unauthorized, patient, medecin, admin }) {
    const sessionId = window.localStorage.getItem("token");
    const [role, setRole] = React.useState(false);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/verification/verifysession", {
            method: "get",
            headers: {
                "token": sessionId
            }
        }).then(res => {
            return res.text();
        }).then((role) => {
            setRole(role);
        }).catch((e) => {
        })
    }, [])

    switch (role) {
        case "UNAUTHORIZED": return <>{unauthorized}</>;
        case "patient": return <>{patient}</>;
        case "medecin": return <>{medecin}</>;
        case "admin": return <>{admin}</>;
        default: return <>{role}</>
    }
}