import Navbar from "../components/Navbar"
import SignInForm from "../components/SignInForm";
import Column from "../components/Column";
import { colors } from "../Parameters";

export default function SignIn() {
    return (<>
        <Navbar backgroundColor={colors.navbar} />
        <Column justifyContent={"center"} alignItems={"center"} padding="50px 0 0 0">
            <SignInForm />
        </Column>
    </>);
}