import Navbar from "../components/Navbar"
import SignInFormAdmin from "../components/SignInFormAdmin";
import Column from "../components/Column";
import { colors } from "../Parameters";

export default function SignIn() {
    return (<>
        <Navbar backgroundColor={colors.navbar} />
        <Column justifyContent={"center"} alignItems={"center"} padding="50px 0 0 0">
            <SignInFormAdmin />
        </Column>
    </>);
}