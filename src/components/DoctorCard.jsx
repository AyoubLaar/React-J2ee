import Row from "./Row";
import Column from "./Column";
import doctor_man from "../assets/doctor_man.svg"
import doctor_woman from "../assets/doctor_woman.svg"
import Button from "../components/Button"

export default function DoctorCard({ id, sexe, nom, prenom, addresse, ville }) {
    return (
        <div style={{ padding: "20px", border: "2px solid black", width: "100%", backgroundColor: "white" }}>
            <Row gap={"15px"}>
                <div style={{ border: "2px solid black", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={sexe == "homme" ? doctor_man : doctor_woman} alt={sexe} style={{ aspectRatio: 1, height: "150px" }} />
                </div>
                <Column gap={"10px"}>
                    <span><b>Nom :</b> {nom}</span>
                    <span><b>Prénom :</b> {prenom}</span>
                    <span><b>Addresse :</b> {addresse}</span>
                    <span><b>ville :</b> {ville}</span>
                    <Button text={"prendre un rendez-vous"} href={"/rendezvous/" + id} varient={"main"} style={{ fontSize: "16px" }} />
                </Column>
            </Row>
        </div >
    );
}