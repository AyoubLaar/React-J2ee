import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button"
import { colors } from "../Parameters";

export default function SignInForm() {
    return <>
        <form
            method="post"
            action="http://localhost:8080/api/v1/patient/signin"
            style={{ height: "auto", padding: "50px ", borderRadius: "5px", border: "2px solid black", backgroundColor: "white" }}>
            <Column justifyContent={"center"} alignItems={"center"} gap={"30px"}>
                <h1><b>Sign in</b> </h1>
                <Column>
                    <label for="email"><h2>Login</h2></label>
                    <input type="email" id="email" name="email" required placeholder="votre login" />
                </Column>
                <Column>
                    <label for="Password"><h2>Password</h2></label>
                    <input type="password" id="Password" name="Password" required placeholder="votre password" />
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