import Navbar from "../components/Navbar"
import Column from "../components/Column"
import SignUpMedecinForm from "../components/SignUpMedecinForm"
import { colors } from "../Parameters"

export default function SignUpMedecin() {
    return <>
        <Navbar backgroundColor={colors.navbar} />
        <Column width={"100%"} alignItems={"center"} padding={"25px"}>
            <SignUpMedecinForm />
        </Column>
    </>
}