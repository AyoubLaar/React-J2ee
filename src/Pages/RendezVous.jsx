import { useParams } from "react-router"
import RendezVousForm from "../components/RendezVousForm";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import { colors } from "../Parameters";

export default function RendezVous() {
    const id = useParams().id;
    return <>
        <Navbar backgroundColor={colors.navbar} />
        <Column width={"100%"} alignItems={"center"} padding={"25px"}>
            <RendezVousForm />
        </Column>
    </>;
}