import Navbar from "../components/Navbar"
import Column from "../components/Column"
import SignUpMedecinForm from "../components/SignUpMedecinForm"

export default function SignUpMedecin() {
    return <>
        <Navbar />
        <Column width={"100%"} alignItems={"center"} padding={"25px"}>
            <SignUpMedecinForm />
        </Column>
    </>
}