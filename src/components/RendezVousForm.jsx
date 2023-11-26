import Column from "./Column";
import Row from "./Row";
import Button from "./Button";
import { colors } from "../Parameters";
import React from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export default function RendezVousForm({ medecinId }) {
    const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
    const [heureChoisi, setHeure] = React.useState(null);
    const [datesRDV, setDatesRDV] = React.useState(null);
    function handleSubmit() {
        const token = window.localStorage.getItem("token");
        if (token == undefined) alert("il faut s'authentifier");
        else {
            fetch("http://localhost:8080/api/v1/patient/dashboard/recherche?medecinId=" + medecinId, {
                method: "PUT",
                headers: {
                    "token": window.localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    medecinId: medecinId,
                    dateRdv: date,
                    heureRdv: heureChoisi
                })
            }).then((res) => {
                if (!res.ok) throw new Error();
                return res.text();
            }).then((data) => {
                alert("Rendez Vous effectué avec succés");
                window.location.reload();
            }).catch(() => {
                alert("error")
            })
        }
        return;
    }

    React.useEffect(() => {
        if (medecinId != null)
            fetch("http://localhost:8080/api/v1/patient/dashboard/recherche?medecinId=" + medecinId, {
                method: "GET",
                headers: {
                    "token": window.localStorage.getItem("token")
                },
            }).then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            }).then((data) => {
                console.log("dates heures : " + JSON.stringify(data))
                setDatesRDV(data.indisponibles);
            }).catch(() => {
                alert("Il faut s'authentifier !")
                setDatesRDV(null);
            })
    }, [medecinId])
    return <>
        <form style={{ height: "fit-content", width: "100%", padding: "50px ", backgroundColor: "white" }}>
            <Column gap={"30px"}>
                {medecinId == undefined ? <>
                    <Column ><h2>Aucun medecin choisi</h2></Column>
                </> : (<>
                    <Row gap={"10px"} breakpoint={1200}>
                        <Column>
                            <h2>Date :</h2>
                            <Calendar
                                minDate={new Date()}
                                onChange={(value, event) => {
                                    setDate(value.toISOString().slice(0, 10));
                                }} />
                        </Column>
                        <Column>
                            <label for="heure"><h2>Heure :</h2></label>
                            <Row gap={"10px"}>
                                <select name="heure" onChange={(e) => {
                                    setHeure(e.target.value);
                                }}>
                                    <option disabled selected value> -- select an option -- </option>
                                    {datesRDV != null && Array.from({ length: 10 }, (x, i) => i + 9).filter(heure => datesRDV[date] == undefined || !datesRDV[date].filter((heure_undispo) => heure == heure_undispo).length).map((heure_disponible) => {
                                        return <option value={heure_disponible + ""} >{heure_disponible}</option>;
                                    })}
                                </select>
                            </Row>
                        </Column>
                    </Row>
                    <Button attributes={{ type: "button" }} text={"soumettre demande"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} onclick={handleSubmit} />
                </>)}
            </Column>
        </form >
    </>;
}