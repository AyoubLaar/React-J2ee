import { useParams } from "react-router"
import RendezVousForm from "../components/RendezVousForm";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
export default function RendezVous() {
    const id = useParams().id;
    return <>
        <Navbar />
        <Column width={"100%"} alignItems={"center"} padding={"25px"}>
            <RendezVousForm />
        </Column>
    </>;
}