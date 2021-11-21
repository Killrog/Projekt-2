import { TextInput, Text, Box } from "grommet";

const Eingabe = () => {
  return (
    <Box margin="3px">
      <Text size="small" margin="12px">
        Eingabe
      </Text>
      <TextInput size="small" border="false" placeholder="type here" />
    </Box>
  );
};
export default Eingabe;
