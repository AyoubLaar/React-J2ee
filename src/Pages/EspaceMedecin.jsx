import Navbar from "../components/Navbar";
import { colors } from "../Parameters";
import MesRendezVousMedecin from "../components/MesRendezVousMedecin";
import { Paper } from "@mui/material";

export default function EspaceMedecin() {
    return (
        <>
            <Navbar backgroundColor={colors.navbar} />
            <div style={{ padding: "50px 10px" }}>
                <MesRendezVousMedecin />
            </div>
        </>);

}