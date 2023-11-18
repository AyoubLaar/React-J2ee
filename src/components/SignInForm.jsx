import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import ButtonOutlined from "../components/ButtonOutlined"

export default function SignInForm() {
    return <>
        <form style={{ height: "auto", padding: "50px ", borderRadius: "5px", border: "2px solid black" }}>
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
                <ButtonOutlined text={"Sign in "} varient={"main"} />
            </Column>
        </form >
    </>
} 