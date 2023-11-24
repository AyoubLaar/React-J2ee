import Button from "./Button";
import Column from "../components/Column";
import Row from "../components/Row";
import { colors } from "../Parameters";
import { villes, specialites } from "../assets/donnees.json"

export default function SearchForm() {
    return (
        <form method="get" action="/search">
            <>
                <datalist id="villes">
                    {villes.map(ville => <option value={ville} />)}
                </datalist>
                <datalist id="specialites">
                    {specialites.map(specialite => <option value={specialite} />)}
                </datalist>
            </>
            <Column alignItems={"center"} gap="15px">
                <Row justifyContent={"center"} alignItems={"end"} gap={"15px"} breakpoint={1000}>
                    <Column gap="5px">
                        <label for="doctorName"><h2 style={{ color: "white", fontWeight: "700" }}>Nom</h2></label>
                        <input type="text" id="doctorName" name="doctorName" placeholder="Nom du docteur" />
                    </Column>
                    <Column gap="5px">
                        <label for="city"><h2 style={{ color: "white", fontWeight: "700" }}>Ville</h2></label>
                        <input type="text" id="city" name="city" placeholder="Ville du cabinet du docteur" list="villes" />
                    </Column>
                    <Column gap="5px">
                        <label for="specialty"><h2 style={{ color: "white", fontWeight: "700" }}>Specialité</h2></label>
                        <input type="text" id="specialty" required name="specialty" placeholder="Spécialité du docteur" list="specialites" />
                    </Column>
                    <Button text={"Search"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />

                </Row>
            </Column>
        </form >
    );
}