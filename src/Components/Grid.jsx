import { Box, Grid, Text } from "grommet";
import Eingabe from "./Eingabe";
import Ausgabe from "./Ausgabe";
import Typ from "./Buttons/Typ";
import Entfernen from "./Buttons/Delete";
import Ändern from "./Buttons/Aendern";
import Kante from "./Buttons/Kante";
import Zustand from "./Buttons/Zustand";
import Space from "./Space";

const AppGrid = () => {
  return (
    <Grid
      rows={["xxsmall", "xsmall"]}
      columns={["small", "auto"]}
      gap="medium"
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box
        gridArea="header"
        background="#9370DB"
        alignContent="start"
        direction="row-reverse"
      >
        <Entfernen />
        <Space />
        <Kante />
        <Zustand />
        <Ändern />

        <Typ />
      </Box>

      <Box gridArea="nav" background="#4169E1" height="large" width="auto">
        <Eingabe />
        <Space />
        <Ausgabe />
      </Box>
      <Box gridArea="main" background="light-2" height="large" width="auto" />
    </Grid>
  );
};

export default AppGrid;
