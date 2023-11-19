import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button"

export default function SignUpMedecinForm() {
    return <>
        <form style={{ height: "auto", padding: "30px 20px", borderRadius: "5px", border: "2px solid black", backgroundColor: "white" }}>
            <Column gap={"25px"} alignItems={"center"}>
                <h1><b>Demande d'inscription</b> </h1>
                <Column gap={"15px"}>
                    <Row gap="30px">
                        <Column>
                            <label for="nom"><h2>Nom</h2></label>
                            <input type="text" id="nom" name="nom" required placeholder="Votre nom" />
                        </Column>
                        <Column>
                            <label for="prenom"><h2>Prénom</h2></label>
                            <input type="text" id="prenom" name="prenom" required placeholder="Votre prénom" />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column>
                            <label for="password"><h2>Password</h2></label>
                            <input type="password" id="password" name="password" required placeholder="Votre password" />
                        </Column>
                        <Column>
                            <label for="Confirmer"><h2>Confirmer Password</h2></label>
                            <input type="password" id="Confirmer" name="Confirmer" required placeholder="Confirmez votre password" />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column>
                            <label for="email"><h2>Email</h2></label>
                            <input type="email" id="email" name="email" required placeholder="Votre email" />
                        </Column>
                        <Column>
                            <label for="phoneNumber"><h2>Téléphone</h2></label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Votre téléphone" />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column width={"100%"}>
                            <label for="ville"><h2>Ville</h2></label>
                            <input type="text" id="ville" name="ville" required placeholder="Ville de votre cabinet" />
                        </Column>
                        <Column>
                            <label for="addresse"><h2>Addresse</h2></label>
                            <input type="text" id="addresse" name="addresse" required placeholder="Addresse de votre cabinet" />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column width={"100%"}>
                            <label for="code"><h2>Code Médecin</h2></label>
                            <input type="text" id="code" name="code" required placeholder="Votre code de medecin" />
                        </Column>
                        <Column width={"100%"}>
                            <label for="date"><h2>Date de naissance</h2></label>
                            <input type="date" id="date" name="date" required />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column height={"100%"}>
                            <h2>Sexe</h2>
                            <Row gap={"10px"}  >
                                <Row gap={"5px"} breakpoint={0}>
                                    <input type="radio" name="sexe" id="homme" value="homme" required style={{ padding: 0 }} />
                                    <label for="homme">Homme</label>
                                </Row>
                                <Row gap={"5px"} breakpoint={0}>
                                    <input type="radio" name="sexe" id="femme" value="femme" required style={{ padding: 0 }} />
                                    <label for="femme">Femme</label>
                                </Row>
                            </Row>
                        </Column>
                    </Row>
                </Column>
                <Button type="filled" text={"Soumettre demande"} varient={"main"} />
            </Column >
        </form >
    </>
} 