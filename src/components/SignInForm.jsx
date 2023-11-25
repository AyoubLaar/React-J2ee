import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button"
import { colors } from "../Parameters";
import { useNavigate } from "react-router";

export default function SignInForm() {
    function handlesubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const role = data.get("role");
        data.delete("role");
        const json = {};
        data.forEach(function (value, key) {
            json[key] = value;
        });
        if (role == "patient") {
            fetch("http://localhost:8080/api/v1/patient/signin", {
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
                    alert(token);
                    window.localStorage.setItem("token", token);
                    history.go(-1)
                })
                .catch(e => {
                    alert("données invalides !");
                })
        } else {
            fetch("http://localhost:8080/api/v1/medecin/signin", {
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
                    alert(token);
                    window.localStorage.setItem("token", token);
                    history.go(-1)
                })
                .catch(e => {
                    alert("données invalides !");
                })
        }
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
                <Column width={"100%"}>
                    <h2>Vous êtes </h2>
                    <Row gap={"10px"}  >
                        <Row gap={"5px"} breakpoint={0}>
                            <input type="radio" name="role" id="Patient" value="patient" required style={{ padding: 0 }} />
                            <label for="Patient">Patient</label>
                        </Row>
                        <Row gap={"5px"} breakpoint={0}>
                            <input type="radio" name="role" id="Medecin" value="medecin" required style={{ padding: 0 }} />
                            <label for="Medecin">Medecin</label>
                        </Row>
                    </Row>
                </Column>
                <Button text={"Sign in"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
            </Column>
        </form >
    </>
} 