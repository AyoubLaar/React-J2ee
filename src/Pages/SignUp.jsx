import Navbar from "../components/Navbar"
import PatientSignUpForm from "../components/PatientSignUpForm";
import Column from "../components/Column";
import { colors } from "../Parameters";

export default function SignUp() {
    return (<>
        <Navbar backgroundColor={colors.navbar} />
        <Column justifyContent={"center"} alignItems={"center"} padding="25px ">
            <PatientSignUpForm />
        </Column>

    </>);
}