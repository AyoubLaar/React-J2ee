import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from './Button';
import Row from './Row';
import { Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';

function CustomTabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && children}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function DemandesMedecins() {
    const [users, setUsers] = React.useState(null);
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        switch (value) {
            case 0:
                fetch("http://localhost:8080/api/v1/admin/dashboard/demands", {
                    method: "get",
                    headers: {
                        "token": window.localStorage.getItem("token")
                    }
                }).then(res => {
                    if (!res.ok) throw new Error();
                    return res.json();
                }).then(data => {
                    console.log(data);
                    setUsers(data);
                }).catch(error => {
                    console.log("error Rendez-vous")
                })
                break;
            case 1:
                fetch("http://localhost:8080/api/v1/medecin/dashboard/mesRdv", {
                    method: "get",
                    headers: {
                        "token": window.localStorage.getItem("token")
                    }
                }).then(res => {
                    if (!res.ok) throw new Error();
                    return res.json();
                }).then(data => {
                    console.log(data);
                    setUsers(data);
                }).catch(error => {
                    console.log("error Rendez-vous")
                })
                break;
            case 2:
                break;
        }
    }, [value])

    const handleChange = (event, newValue) => {
        setUsers([]);
        setValue(newValue);
    };

    function accepterMedecin(id) {
        fetch("http://localhost:8080/api/v1/admin/dashboard/demands", {
            method: "PUT",
            headers: {
                "token": window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                statusMedecin: "Accepter"
            })
        }).then((res) => {
            if (!res.ok) throw new Error();
            setUsers(users.filter((rdv) => rdv.id != id));
            alert("Medecin vous accepté avec succés !");
        }).catch(() => {
            alert("Medecin vous non accepté !");
        })
    }
    function refuserMedecins(id) {
        fetch("http://localhost:8080/api/v1/admin/dashboard/demands", {
            method: "PUT",
            headers: {
                "token": window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                statusMedecin: "Rejeter"
            })
        }).then((res) => {
            if (!res.ok) throw new Error();
            setUsers(users.filter((rdv) => rdv.id != id));
            alert("Medecin rejetté avec succés !");
        }).catch(() => {
            alert("Medecin vous non rejetté !");
        })
    }
    //rdvId , statusRdv , nom , prenom , telephone , email , dateRdv , heureRdv
    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Demandes Inscriptions" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <TableContainer component={Paper} sx={{ padding: "50px" }}>
                    <Table sx={{ minWidth: 650, border: "1px solid black" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>code medecin</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>nom</TableCell>
                                <TableCell>prenom</TableCell>
                                <TableCell>specialites</TableCell>
                                <TableCell>address</TableCell>
                                <TableCell>action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users != null && users.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.codeOrdreMedecin}</TableCell>
                                    <TableCell>{row.login}</TableCell>
                                    <TableCell>{row.nom}</TableCell>
                                    <TableCell>{row.prenom}</TableCell>
                                    <TableCell>{row.specialite}</TableCell>
                                    <TableCell>{row.adresscabinet}</TableCell>
                                    <TableCell>
                                        <Row gap={"10px"}>
                                            <Button style={{ fontSize: "16px" }} varient={"good"} text={"accepter"} onclick={() => {
                                                accepterMedecin(row.id);
                                            }} />
                                            <Button style={{ fontSize: "16px" }} varient={"highlight"} text={"refuser"} onclick={() => {
                                                refuserMedecins(row.id);
                                            }} /></Row>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TableContainer component={Paper} sx={{ padding: "50px" }}>
                    <Table sx={{ minWidth: 650, border: "1px solid black" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>rdvId</TableCell>
                                <TableCell>dateRdv</TableCell>
                                <TableCell>heureRdv</TableCell>
                                <TableCell>nom</TableCell>
                                <TableCell>prenom</TableCell>
                                <TableCell>telephone</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users != null && users.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{row.rdvId}</TableCell>
                                    <TableCell>{row.dateRdv}</TableCell>
                                    <TableCell>{row.heureRdv}</TableCell>
                                    <TableCell>{row.nom}</TableCell>
                                    <TableCell>{row.prenom}</TableCell>
                                    <TableCell>{row.telephone}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.statusRdv}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                à ajouter
            </CustomTabPanel>
        </>
    )
}