import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MesRendezVousMedecin() {
    const [rendezVous, setRendezVous] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/medecin/dashboard/mesRdv", {
            method: "get", headers: {
                "token": window.localStorage.getItem("token")
            }
        }).then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        }).then(data => {
            console.log(data);
            setRendezVous(data);
        }).catch(error => {
            console.log("error Rendez-vous")
        })
    })
    //rdvId , statusRdv , nom , prenom , telephone , email , dateRdv , heureRdv
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>rdvId</TableCell>
                        <TableCell>statusRdv</TableCell>
                        <TableCell>dateRdv</TableCell>
                        <TableCell>heureRdv</TableCell>
                        <TableCell>nom</TableCell>
                        <TableCell>prenom</TableCell>
                        <TableCell>telephone</TableCell>
                        <TableCell>email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rendezVous != null && rendezVous.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.rdvId}</TableCell>
                            <TableCell>{row.statusRdv}</TableCell>
                            <TableCell>{row.dateRdv}</TableCell>
                            <TableCell>{row.heureRdv}</TableCell>
                            <TableCell>{row.nom}</TableCell>
                            <TableCell>{row.prenom}</TableCell>
                            <TableCell>{row.telephone}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
