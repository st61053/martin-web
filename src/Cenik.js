import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("služba 1", 120, 400),
  createData("služba 2", 60, 300),
  createData("služba 3", 30, 200),
  createData("služba 4", 180, 600),
  createData("služba 5", 210, 1400),
];

const Cenik = () => {
  return (
    <Box
      sx={{
        padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
      }}
    >
      <Grid container spacing={8}>
        <Grid item md={12} lg={6} xl={6}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <Typography variant={"h3"} gutterBottom>
              Naše služby
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xl={6} sx={{ width: "100%" }}>
          <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ height: "80px" }}>
                  <TableCell>Služby</TableCell>
                  <TableCell align="center">délka&nbsp;(min)</TableCell>
                  <TableCell align="center">cena&nbsp;(kč)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      height: "80px",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Cenik;
