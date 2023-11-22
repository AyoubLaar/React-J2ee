import image from "../assets/teleconsultation_avec_medecin.jpg"
import easy_image from "../assets/easy.jpg"
import Row from "./Row";
import SpecialtyCard from "./SpecialtyCard";
import image_cardiology from "../assets/cardiologie.jpg"
import image_chirurgie from "../assets/chirurgie.jpg"
import image_oncology from "../assets/oncologie.jpg"
import { colors } from "../Parameters";

export default function MainBody() {
    const specialites = [
        { specialite: "cardiology", image: image_cardiology, href: "/Search?specialite=cardiologie" },
        { specialite: "chirurgie", image: image_chirurgie, href: "/Search?specialite=chirurgie" },
        { specialite: "oncologie", image: image_oncology, href: "/Search?specialite=oncologie" }
    ];

    return (
        <main style={{
            width: "100%", paddingTop: "5vh", display: "flex",
            alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "10px",

        }}>

            <Row style={{ padding: "0 5vw 10px", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }} alignItems="end" gap={"5px"}>
                <img src={image} alt="" style={{ height: "300px" }} />
                <div style={{ display: "flex", alignItems: "center", height: "400px" }}>
                    <section style={{ maxWidth: "500px", textAlign: "left" }}>
                        <h1 ><b>Télé-consulter pour votre santé</b></h1>
                        <p>Consultez des professionnels de la santé en ligne, recevez des conseils personnalisés sans quitter votre domicile. <b>Simple</b> et <b>moderne</b>, pour votre bien-être </p>
                    </section>
                </div>
            </Row>
            <Row style={{ padding: "0 5vw 10px", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} alignItems="end" gap={"5px"}>
                <img src={easy_image} alt="" style={{ height: "300px" }} />
                <div style={{ display: "flex", alignItems: "center", height: "400px" }}>
                    <section style={{ maxWidth: "500px", textAlign: "left" }}>
                        <h1 ><b>Comment ca marche</b> </h1>
                        <p >Choisir le médecin , Créez un compte, fixez un rendez-vous, le médecin l'accepte, puis la téléconsultation a lieu à l'heure convenue. <b>Simple,</b> <b>rapide,</b> et <b>accessible.</b></p>
                    </section>
                </div>
            </Row>
            <Row style={{
                width: "100%", height: "fit-content",
                minHeight: "400px", display: "flex", justifyContent: "center", backgroundColor: colors.navbar,
                padding: "50px"
            }} alignItems="center" gap={"5px"}>
                <section style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{ color: "white" }}><b>Chercher par Specialité :</b> </h1>
                    <Row breakpoint={1200} justifyContent={"center"} width={"100%"} gap={"100px"} style={{ padding: "25px 50px 0" }}>
                        {specialites.map(specialite => <SpecialtyCard {...specialite} />)}
                    </Row>
                </section>
            </Row>

        </main >);
}