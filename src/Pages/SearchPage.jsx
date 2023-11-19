import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import Column from "../components/Column";
import DoctorCard from "../components/DoctorCard";
import { colors } from "../Parameters";

export default function SearchPage() {
    const moroccoDoctorData = [
        {
            id: 1,
            sexe: "homme",
            nom: "Dr. John Doe",
            prenom: "Jane",
            addresse: "123 Main Street",
            ville: "Casablanca",
        },
        {
            id: 2,
            sexe: "femme",
            nom: "Dr. Alice Smith",
            prenom: "Bob",
            addresse: "456 Elm Street",
            ville: "Rabat",
        },
        {
            id: 3,
            sexe: "homme",
            nom: "Dr. Ahmed Mohamed",
            prenom: "Fatima",
            addresse: "789 Oak Street",
            ville: "Marrakech",
        },
        {
            id: 4,
            sexe: "femme",
            nom: "Dr. Amina Hassan",
            prenom: "Khalid",
            addresse: "101 Pine Street",
            ville: "Fez",
        },
        {
            id: 5,
            sexe: "homme",
            nom: "Dr. Karim Bouaziz",
            prenom: "Laila",
            addresse: "202 Cedar Street",
            ville: "Tangier",
        },
    ];
    return (
        <>
            <Navbar backgroundColor={colors.navbar} />
            <Column alignItems={"center"} width={"100%"} padding={"30px"}>
                <Column gap={"20px"} alignItems={"center"}>
                    <SearchForm />
                    <Column width={"100%"} gap="10px">
                        {moroccoDoctorData.map(doctor => <DoctorCard {...doctor} />)}
                    </Column>
                </Column>
            </Column>
        </>
    );
}