import React from "react";

export default function RenderIfNotAuthentified({ children }) {
    const sessionId = window.localStorage.getItem("token");
    const [render, setRender] = React.useState(false);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/verification/verifysession", {
            method: "get",
            headers: {
                "token": sessionId
            }
        }).then(res => {
            return res.text();
        }).then((role) => {
            console.log(role);
            if (role == "UNAUTHORIZED") {
                setRender(true);
                window.localStorage.removeItem("token");
            }
        }).catch((e) => {
        })
    }, [])

    return render ? <>{children}</> : <></>;
}