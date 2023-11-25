import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import Column from "../components/Column";
import DoctorCard from "../components/DoctorCard";
import { colors } from "../Parameters";
import React from "react";
import Row from "../components/Row";
import RendezVousForm from "../components/RendezVousForm";

export default function SearchPage() {
    const [id, setId] = React.useState(null);
    const [medecineData, setMedecinData] = React.useState([]);
    React.useEffect(() => {
        let params = new URLSearchParams(location.search);
        const specialite = params.get("specialite");
        const ville = params.get("ville");
        fetch("http://localhost:8080/api/v1/recherche", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nom: null,
                ville: ville,
                specialite: specialite
            })
        })
            .then(res => {
                console.log(res);
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                console.log(data)
                setMedecinData(data);
            })
            .catch(e => {
                setMedecinData([]);
            })
    }, [])
    return (
        <>
            <div style={{ position: "sticky", height: "250px", top: "0", backgroundColor: "white" }}>
                <Navbar />
                <Row width={"100%"} alignItems={"center"} justifyContent={"center"} style={{ padding: "20px 0" }}>
                    <SearchForm setMedData={setMedecinData} />
                </Row>
            </div>
            <Row justifyContent={"start"} breakpoint={0} >
                <Column alignItems={"center"} width={"50%"} padding={"10px"}>
                    <Column gap={"20px"} alignItems={"center"} width={"100%"}>
                        <Column width={"100%"} gap="10px">
                            {medecineData.length == 0 ? <h1 style={{ textAlign: "center" }}>No Data Found</h1> : medecineData.map(doctor => {
                                console.log({ ...doctor });
                                return <DoctorCard choisi={doctor.id == id} {...doctor} onclick={() => {
                                    if (doctor.id == id) {
                                        setId(null);
                                    } else {
                                        setId(doctor.id);
                                    }
                                }} />
                            })}
                        </Column>
                    </Column>
                </Column>
                <Column padding={"10px"} width={"50%"} height={"fit-content"} style={{ position: "fixed", top: "260", right: "0", }}>
                    <div style={{ overflowY: "scroll", border: "2px solid black", maxHeight: "max(300px,40vh)" }}>
                        <RendezVousForm medecinId={id} />
                    </div>

                </Column>
            </Row>
        </>
    );
}