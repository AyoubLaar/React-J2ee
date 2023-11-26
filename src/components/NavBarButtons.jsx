import RenderByRole from "./RenderByRole"
import Button from "./Button"
import { colors } from "../Parameters"

export default function NavBarButtons() {

    function signout() {
        window.localStorage.removeItem("token");
        window.location.assign("/");
    }

    const unauthorized_buttons = [
        { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
        , { text: "Sign In", varient: "main", href: "/signin?url=" + window.location }
        , { text: "Sign Up", varient: "main", href: "/patient/signup?url=" + window.location }
    ].map(
        props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
    )

    const patient_buttons = [
        { text: "Espace patient", varient: "main", href: "/patient/monespace" }
        , { text: "Sign out", varient: "main", onclick: signout }
    ].map(
        props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
    )

    const medecin_buttons = [
        { text: "Espace medecin", varient: "main", href: "/medecin/monespace" }
        , { text: "Sign out", varient: "main", onclick: signout }
    ].map(
        props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
    )

    const admin_buttons = [
        { text: "Espace admin", varient: "main", href: "/admin/monespace" }
        , { text: "Sign out", varient: "main", onclick: signout }
    ].map(
        props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
    )

    return <RenderByRole
        unauthorized={unauthorized_buttons}
        patient={patient_buttons}
        medecin={medecin_buttons}
        admin={admin_buttons}
    />
} 