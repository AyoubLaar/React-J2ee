import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button"
import { colors } from "../Parameters";

export default function SignInFormAdmin() {
    function handlesubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const json = {};
        data.forEach(function (value, key) {
            json[key] = value;
        });
        fetch("http://localhost:8080/api/v1/admin/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
        })
            .then(res => {
                if (!res.ok) throw new Error();
                return res.text();
            })
            .then(token => {
                alert("Signed In !");
                window.localStorage.setItem("token", token);
                window.location.assign("/")
            })
            .catch(e => {
                alert("données invalides !");
            })
    }
    return <>
        <form
            onSubmit={handlesubmit}
            style={{ height: "auto", padding: "50px ", borderRadius: "5px", border: "2px solid black", backgroundColor: "white" }}>
            <Column justifyContent={"center"} alignItems={"center"} gap={"30px"}>
                <h1><b>Sign in</b> </h1>
                <Column>
                    <label for="email"><h2>Login</h2></label>
                    <input type="email" id="email" name="login" required placeholder="votre login" />
                </Column>
                <Column>
                    <label for="Password"><h2>Password</h2></label>
                    <input type="password" id="Password" name="password" required placeholder="votre password" />
                </Column>
                <Button text={"Sign in"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
            </Column>
        </form >
    </>
} 