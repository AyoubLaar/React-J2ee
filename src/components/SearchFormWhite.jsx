import Button from "./Button";
import Column from "../components/Column";
import Row from "../components/Row";
import { colors } from "../Parameters";

export default function SearchForm() {
    return (
        <form method="get" action="/search">
            <Column alignItems={"center"} gap="15px">
                <Row justifyContent={"center"} alignItems={"end"} gap={"15px"} breakpoint={1000}>
                    <Column gap="5px">
                        <label for="doctorName"><h2 style={{ color: "white" }}>Nom</h2></label>
                        <input type="text" id="doctorName" name="doctorName" placeholder="Nom du docteur" />
                    </Column>
                    <Column gap="5px">
                        <label for="city"><h2 style={{ color: "white" }}>Ville</h2></label>
                        <input type="text" id="city" name="city" placeholder="Ville du cabinet du docteur" />
                    </Column>
                    <Column gap="5px">
                        <label for="specialty"><h2 style={{ color: "white" }}>Specialité</h2></label>
                        <input type="text" id="specialty" name="specialty" placeholder="Spécialité du docteur" />
                    </Column>
                </Row>
                <div >
                    <Button text={"Search"} color="white" type="outlined" varient={"main"} style={{ backgroundColor: colors.navbar, borderRadius: "5px" }} />
                </div>
            </Column>
        </form >
    );
}