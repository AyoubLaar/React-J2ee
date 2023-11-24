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
    const [medecineData, setMedecinData] = React.useState([
        {
            id: 1,
            sexe: "homme",
            nom: "Doe",
            prenom: "John",
            addresse: "123 Main Street",
            ville: "Cityville",
            specialites: ["Cardiology", "Orthopedics"],
        },
        {
            id: 2,
            sexe: "femme",
            nom: "Smith",
            prenom: "Jane",
            addresse: "456 Oak Avenue",
            ville: "Townsville",
            specialites: ["Dermatology", "Ophthalmology"],
        },
        {
            id: 3,
            sexe: "homme",
            nom: "Johnson",
            prenom: "Michael",
            addresse: "789 Pine Road",
            ville: "Villageton",
            specialites: ["Pediatrics", "Neurology"],
        },
        {
            id: 4,
            sexe: "femme",
            nom: "Williams",
            prenom: "Emily",
            addresse: "101 Elm Lane",
            ville: "Villageville",
            specialites: ["Psychiatry", "Internal Medicine"],
        },
        {
            id: 5,
            sexe: "homme",
            nom: "Brown",
            prenom: "Christopher",
            addresse: "202 Maple Drive",
            ville: "Cityton",
            specialites: ["Gastroenterology", "Rheumatology"],
        },
        {
            id: 6,
            sexe: "femme",
            nom: "Davis",
            prenom: "Olivia",
            addresse: "303 Cedar Street",
            ville: "Townville",
            specialites: ["Endocrinology", "Urology"],
        },
        {
            id: 7,
            sexe: "homme",
            nom: "Miller",
            prenom: "Daniel",
            addresse: "404 Birch Court",
            ville: "Villagetown",
            specialites: ["Hematology", "Oncology"],
        },
        {
            id: 8,
            sexe: "femme",
            nom: "Moore",
            prenom: "Sophia",
            addresse: "505 Pine Circle",
            ville: "Cityville",
            specialites: ["Allergy", "Immunology"],
        },
        {
            id: 9,
            sexe: "homme",
            nom: "Taylor",
            prenom: "Matthew",
            addresse: "606 Oak Place",
            ville: "Villageville",
            specialites: ["Pulmonology", "Nephrology"],
        },
        {
            id: 10,
            sexe: "femme",
            nom: "Anderson",
            prenom: "Ava",
            addresse: "707 Elm Street",
            ville: "Cityton",
            specialites: ["Dentistry", "Orthodontics"],
        },
    ]);
    /* React.useEffect(() => {
         fetch("http://localhost:8080/api/v1/recherche", {
             method: "post",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 nom: "",
                 ville: "",
                 specialite: ""
             })
         })
             .then(res => {
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
     }, [])*/
    return (
        <>
            <div style={{ position: "sticky", height: "250px", top: "0", backgroundColor: "white" }}>
                <Navbar />
                <Row width={"100%"} alignItems={"center"} justifyContent={"center"} style={{ padding: "20px 0" }}>
                    <SearchForm setMedecinData={setMedecinData} />
                </Row>
            </div>
            <Row justifyContent={"start"} breakpoint={0} >
                <Column alignItems={"center"} width={"50%"} padding={"10px"}>
                    <Column gap={"20px"} alignItems={"center"} width={"100%"}>
                        <Column width={"100%"} gap="10px">
                            {medecineData.length == 0 ? <h1 style={{ textAlign: "center" }}>No Data Found</h1> : medecineData.map(doctor => <DoctorCard choisi={doctor.id == id} {...doctor} onclick={() => {
                                if (doctor.id == id) {
                                    setId(null);
                                } else {
                                    setId(doctor.id);
                                }
                            }} />)}
                        </Column>
                    </Column>
                </Column>
                <Column padding={"10px"} width={"50%"} height={"fit-content"} style={{ position: "fixed", top: "260", right: "0", }}>
                    <div style={{ overflowY: "scroll", border: "2px solid black", maxHeight: "max(500px,40vh)" }}>
                        <RendezVousForm medecinId={id} />
                    </div>

                </Column>
            </Row>
        </>
    );
}