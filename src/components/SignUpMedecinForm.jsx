import Row from "./Row";
import Column from "./Column";
import Button from "./Button"
import { colors } from "../Parameters";
import React from "react";
import { villes, specialites } from "../assets/donnees.json"

export default function SignUpMedecinForm() {
    const [Specialites, setSpecialites] = React.useState(specialites.map(specialite => { return { specialite: specialite, chosen: false }; }));

    function handlesubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const json = {};
        data.forEach(function (value, key) {
            json[key] = value;
        });
        json["specialites"] = Specialites.filter((element) => element.chosen).map(element => element.specialite);
        if (json.password != json.Confirmer) {
            alert("Password non égaux");
        } else {
            console.log(json);
            fetch("http://localhost:8080/api/v1/medecin/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            }).then(res => {
                if (!res.ok) throw new Error();
                return res.text();
            }).then((data) => {
                alert("Demande effectué avec succés!");
                alert(data);
                window.localStorage.setItem("token", data);
                window.location.assign("/");
            }).catch((error) => {
                console.log(error);
                alert("données invalide!");
            })
        }
    }

    return specialites.length == 0 ? <></> : <>
        <form style={{ height: "auto", padding: "30px 20px", borderRadius: "5px", border: "2px solid black", backgroundColor: "white", maxWidth: "800px", display: "flex", alignItems: "center", justifyContent: "center" }} onSubmit={handlesubmit}>
            <>
                <datalist id="villes">
                    {villes.map(ville => <option value={ville} />)}
                </datalist>
            </>
            <Column gap={"25px"} alignItems={"center"} justifyContent={"center"}>
                <h1><b>Demande d'inscription</b> </h1>
                <Column gap={"15px"} justifyContent={"center"} alignItems={"center"}>
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
                            <input type="email" id="email" name="medLogin" required placeholder="Votre email" />
                        </Column>
                        <Column>
                            <label for="phoneNumber"><h2>Téléphone</h2></label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Votre téléphone" />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column >
                            <label for="ville"><h2>Ville</h2></label>
                            <input type="text" id="ville" name="ville" required placeholder="Ville de votre cabinet" list="villes" />
                        </Column>
                        <Column>
                            <label for="addresse"><h2>Addresse</h2></label>
                            <input type="text" id="addresse" name="adressCabinet" required placeholder="Addresse de votre cabinet" />
                        </Column>
                    </Row>
                    <Row gap="30px" style={{ width: "100%" }}>
                        <Column >
                            <label for="code"><h2>Code Médecin</h2></label>
                            <input type="text" id="code" name="codeOrdreMedecin" required placeholder="Votre code de medecin" />
                        </Column>
                        <Column >
                            <label for="date"><h2>Date de naissance</h2></label>
                            <input type="date" id="date" name="dateDeNaissance" required />
                        </Column>
                    </Row>
                    <Row gap="30px">
                        <Column height={"100%"}>
                            <h2>Sexe</h2>
                            <Row gap={"10px"}  >
                                <Row gap={"5px"} breakpoint={0}>
                                    <input type="radio" name="sexe" id="homme" value="Homme" required style={{ padding: 0 }} />
                                    <label for="homme">Homme</label>
                                </Row>
                                <Row gap={"5px"} breakpoint={0}>
                                    <input type="radio" name="sexe" id="femme" value="Femme" required style={{ padding: 0 }} />
                                    <label for="femme">Femme</label>
                                </Row>
                            </Row>
                        </Column>
                    </Row>
                    <Column>
                        <h2>Specialités</h2>
                        <Row gap={"10px"} style={{ flexWrap: "wrap", maxWidth: "500px" }}>
                            {Specialites.map((Element, index) =>
                                <Button
                                    attributes={{ type: "button" }}
                                    padding={"4px"}
                                    varient={"main"}
                                    type={Element.chosen ? "filled" : "outlined"}
                                    text={Element.specialite}
                                    style={Element.chosen ? {
                                        borderRadius: "none", fontSize: "16px"
                                    } : { fontSize: "16px" }}
                                    onclick={() => {
                                        setSpecialites(Specialites.map((element, elementIndex) => {
                                            if (elementIndex == index) return { ...element, chosen: !element.chosen }
                                            return element;
                                        }));
                                    }}
                                />
                            )}
                        </Row>
                    </Column>
                </Column>
                <Button text={"Soumettre demande"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
            </Column >
        </form >
    </>
} 