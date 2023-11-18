import ButtonFilled from "./ButtonFilled";

export default function MainBody() {
    return (
        <main style={{
            width: "100%", minHeight: "fit-content", paddingTop: "5vh", display: "flex",
            alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "20px"
        }}>
            <section style={{ maxWidth: "800px" }}>
                <h1 style={{ textAlign: "center" }}><b>Télé-consulter pour votre santé</b></h1>
                <p style={
                    { textAlign: "center" }
                }>Consultez des professionnels de la santé en ligne, recevez des conseils personnalisés sans quitter votre domicile. Simple et moderne, pour votre bien-être </p></section>
            <section style={{ maxWidth: "800px" }}>
                <h1 style={{ textAlign: "center" }}><b>Comment ca marche</b> </h1>
                <p style={
                    { textAlign: "center" }
                }>Créez un compte, fixez un rendez-vous, le médecin l'accepte, puis la téléconsultation a lieu à l'heure convenue. <b>Simple,</b> <b>rapide,</b> et <b>accessible.</b></p>
            </section>
            <ButtonFilled text={"Fixer un rendez-vous"} varient={"main"} href={"/search"} />
        </main >);
}