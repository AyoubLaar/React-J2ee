import Button from "./Button";

export default function MainBody() {
    return (
        <main style={{
            width: "100%", minHeight: "fit-content", paddingTop: "5vh", display: "flex",
            alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "10px"
        }}>
            <section style={{ maxWidth: "800px", padding: "10px" }}>
                <h1 style={{ textAlign: "center" }}><b>Télé-consulter pour votre santé</b></h1>
                <p style={
                    { textAlign: "center" }
                }>Consultez des professionnels de la santé en ligne, recevez des conseils personnalisés sans quitter votre domicile. Simple et moderne, pour votre bien-être </p></section>
            <section style={{ maxWidth: "800px", padding: "10px" }}>
                <h1 style={{ textAlign: "center" }}><b>Comment ca marche</b> </h1>
                <p style={
                    { textAlign: "center" }
                }>Choisir le médecin , Créez un compte, fixez un rendez-vous, le médecin l'accepte, puis la téléconsultation a lieu à l'heure convenue. <b>Simple,</b> <b>rapide,</b> et <b>accessible.</b></p>
            </section>
        </main >);
}