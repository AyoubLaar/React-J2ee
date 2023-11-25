import Row from "./Row";
import Column from "./Column";
import doctor_man from "../assets/doctor_man.svg"
import doctor_woman from "../assets/doctor_woman.svg"
import Button from "../components/Button"
import { colors } from "../Parameters";

export default function DoctorCard({ id, sexe, nom, prenom, address_cabinet, ville, specialite, onclick, choisi }) {
    return (
        <div style={{ padding: "20px", border: "2px solid black", width: "100%", backgroundColor: "white", minHeight: "300px" }}>
            <Row gap={"15px"}>
                <div style={{ border: "2px solid black", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={sexe == "Homme" ? doctor_man : doctor_woman} alt={sexe} style={{ aspectRatio: 1, height: "150px" }} />
                </div>
                <Column gap={"10px"}>
                    <span><b>Nom :</b> {nom}</span>
                    <span><b>Prénom :</b> {prenom}</span>
                    <span><b>Addresse :</b> {address_cabinet}</span>
                    <span><b>ville :</b> {ville}</span>
                    <span><b>specilaités : </b>{specialite.map(specialite => specialite + ", ")}</span>
                    <Button text={choisi ? "Cancel" : "Choisir"} color="white" type={"outlined"} varient={choisi ? "highlight" : "main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px", width: "fit-content" }} onclick={onclick} />
                </Column>
            </Row>
        </div >
    );
}