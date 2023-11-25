import Button from "./Button";
import Column from "../components/Column";
import Row from "../components/Row";
import { colors } from "../Parameters";
import React from "react";
import { villes, specialites } from "../assets/donnees.json"

export default function SearchForm({ setMedData }) {

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const json = {};
        data.forEach(function (value, key) {
            json[key] = value;
        });
        console.log(json)
        if (json.nom == "") json.nom = null;
        fetch("http://localhost:8080/api/v1/recherche", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
        })
            .then(res => {
                if (!res.ok) throw new Error(res.text);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setMedData(data);
            })
            .catch(e => {
                console.log(e);
                setMedData([]);
            })
    }
    return (
        <form method="get" action="" onSubmit={handleSubmit} style={{ position: "sticky" }}>
            <>
                <datalist id="villes">
                    {villes.map(ville => <option value={ville} />)}
                </datalist>
                <datalist id="specialites">
                    {specialites.map(specialite => <option value={specialite} />)}
                </datalist>

            </>
            <Row justifyContent={"center"} alignItems={"end"} gap={"15px"} breakpoint={1000}>
                <Column gap="5px">
                    <label for="doctorName"><h2>Nom</h2></label>
                    <input type="text" id="doctorName" name="nom" placeholder="Nom du docteur" value={new URLSearchParams(location.search).get("nom")} />
                </Column>
                <Column gap="5px">
                    <label for="city"><h2>Ville</h2></label>
                    <input type="text" id="city" required name="ville" defaultValue={new URLSearchParams(location.search).get("ville")} list="villes" placeholder="Ville du cabinet du docteur" />
                </Column>
                <Column gap="5px">
                    <label for="specialty"><h2>Specialité</h2></label>
                    <input type="text" id="specialty" defaultValue={new URLSearchParams(location.search).get("specialite")} name="specialite" list="specialites" required placeholder="Spécialité du docteur" />
                </Column>
                <div >
                    <Button text={"Search"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
                </div>
            </Row>
        </form >
    );
}