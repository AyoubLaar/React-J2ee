import Navbar from "../components/Navbar"
import PatientSignUpForm from "../components/PatientSignUpForm";
import Column from "../components/Column";

export default function SignUp() {
    return (<>
        <Navbar />
        <Column justifyContent={"center"} alignItems={"center"} padding="25px ">
            <PatientSignUpForm />
        </Column>

    </>);
}