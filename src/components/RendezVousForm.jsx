import Column from "./Column";
import Row from "./Row";
import Button from "./Button";
import { colors } from "../Parameters";
import React from "react";

export default function RendezVousForm() {
    const [heure, setHeure] = React.useState(null)

    const heures = [
        { hour: 0, available: true },
        { hour: 1, available: false },
        { hour: 2, available: true },
        { hour: 3, available: false },
        { hour: 4, available: true },
        { hour: 5, available: true },
        { hour: 6, available: false },
        { hour: 7, available: true },
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: true },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 13, available: false },
        { hour: 14, available: true },
        { hour: 15, available: true },
        { hour: 16, available: false },
        { hour: 17, available: true },
        { hour: 18, available: false },
        { hour: 19, available: true },
        { hour: 20, available: true },
        { hour: 21, available: false },
        { hour: 22, available: true },
        { hour: 23, available: true },
    ];

    function handleClick(index) {
        setHeure(heures[index]);
    }

    return <>
        <form style={{ height: "auto", width: "fit-content", padding: "50px ", borderRadius: "5px", border: "2px solid black", backgroundColor: "white" }}>
            <Column justifyContent={"center"} alignItems={"center"} gap={"30px"}>
                <h1><b>Prendre rendez-vous</b></h1>
                <Column>
                    <label for="date"><h2>date de Rendez vous :</h2></label>
                    <input type="date" id="date" name="date" required />
                </Column>
                <Column>
                    <label for="heure"><h2>heure de Rendez vous :</h2></label>
                    <Row gap={"10px"}>
                        <select name="heure">
                            {heures.map((heure, index) =>
                                <option value={heure.hour} style={{ color: heure.available ? colors.good : colors.bad }} onClick={() => handleClick(index)}>
                                    {heure.hour}
                                </option>
                            )}
                        </select>
                        {heure != null ? <span style={{ color: heure.available ? colors.good : colors.bad }}>{heure.available ? "disponible" : "undisponible"}</span> : <></>}
                    </Row>
                </Column>
                <Button text={"soumettre demande"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
            </Column>
        </form >
    </>;
}