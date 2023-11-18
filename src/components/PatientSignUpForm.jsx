import { Formik } from "formik";
import Row from "./Row";
import Column from "./Column";
import ButtonOutlined from "../components/ButtonOutlined"

export default function PatientSignUpForm() {
    return <>
        <form style={{ height: "auto", padding: "50px 20px", borderRadius: "5px", border: "2px solid black" }}>
            <Column gap={"25px"} alignItems={"center"}>
                <h1><b>Sign up</b> </h1>
                <Row gap={"30px"}>
                    <Column gap={"10px"}>
                        <Column>
                            <label for="nom"><h2>Nom</h2></label>
                            <input type="text" id="nom" name="nom" required placeholder="Votre nom" />
                        </Column>
                        <Column>
                            <label for="password"><h2>Password</h2></label>
                            <input type="password" id="password" name="password" required placeholder="Votre password" />
                        </Column>
                        <Column>
                            <label for="email"><h2>Email</h2></label>
                            <input type="email" id="email" name="email" required placeholder="Votre email" />
                        </Column>
                        <Column width={"100%"}>
                            <label for="date"><h2>Date de naissance</h2></label>
                            <input type="datetime-local" id="date" name="date" required />
                        </Column>
                    </Column>

                    <Column gap={"10px"}>
                        <Column>
                            <label for="prenom"><h2>Prénom</h2></label>
                            <input type="text" id="prenom" name="prenom" required placeholder="Votre prénom" />
                        </Column>
                        <Column>
                            <label for="Confirmer"><h2>Confirmer Password</h2></label>
                            <input type="password" id="Confirmer" name="Confirmer" required placeholder="Confirmez votre password" />
                        </Column>
                        <Column>
                            <label for="phoneNumber"><h2>Téléphone</h2></label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Votre téléphone" />
                        </Column>
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
                    </Column>
                </Row >
                <ButtonOutlined text={"Sign up"} varient={"main"} />
            </Column >
        </form >
    </>
} 