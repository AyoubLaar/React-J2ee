import Row from "./Row";
import Column from "./Column";
import Button from "./Button"
import React from "react";
import { colors } from "../Parameters";

export default function PatientSignUpForm() {
    function handlesubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const json = {};
        data.forEach(function (value, key) {
            json[key] = value;
        });
        if (json["password"] != json["confirmedPassword"]) {
            alert("Password non égaux");
            return false;
        } else {
            fetch("http://localhost:8080/api/v1/patient/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json)
            }).then(res => {
                return res.json();
            }).then((data) => {
                console.log(data);
                window.localStorage.setItem("auth_token", data);
                window.location = "/";
            }).catch((error) => {
                console.log(error);
                alert("erreur de la requête!");
            })
        }
    }

    return <>
        <form
            method="post"
            onSubmit={handlesubmit}
            style={{ height: "auto", padding: "50px 20px", borderRadius: "5px", border: "2px solid black", backgroundColor: "white" }}>
            <Column gap={"25px"} alignItems={"center"}>
                <h1><b>Sign up</b> </h1>
                <Column gap={"10px"}>
                    <Row gap={"30px"}>
                        <Column>
                            <label for="nom"><h2>Nom</h2></label>
                            <input type="text" id="nom" name="nom" required placeholder="Votre nom" />
                        </Column>
                        <Column>
                            <label for="prenom"><h2>Prénom</h2></label>
                            <input type="text" id="prenom" name="prenom" required placeholder="Votre prénom" />
                        </Column>
                    </Row>
                    <Row gap={"30px"}>
                        <Column>
                            <label for="password"><h2>Password</h2></label>
                            <input type="password" id="password" name="password" required placeholder="Votre password" />
                        </Column>
                        <Column>
                            <label for="Confirmer"><h2>Confirmer Password</h2></label>
                            <input type="password" id="Confirmer" name="confirmedPassword" required placeholder="Confirmez votre password" />
                        </Column>
                    </Row>
                    <Row gap={"30px"}>
                        <Column>
                            <label for="email"><h2>Email</h2></label>
                            <input type="email" id="email" name="patientLogin" required placeholder="Votre email" />
                        </Column>
                        <Column>
                            <label for="phoneNumber"><h2>Téléphone</h2></label>
                            <input type="tel" id="phoneNumber" name="telephone" required placeholder="Votre téléphone" />
                        </Column>
                    </Row>
                    <Row width={"100%"} gap={"30px"}>
                        <Column width={"50%"}>
                            <label for="date"><h2>Date de naissance</h2></label>
                            <input type="date" id="date" name="dateDeNaissance" required style={{ width: "100%" }} />
                        </Column>
                        <Column height={"100%"} width={"50%"}>
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
                </Column>
                <Button text={"sign up"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
            </Column >
        </form >
    </>
} 