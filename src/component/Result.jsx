import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();

  const answers = JSON.parse(localStorage.getItem("answers"));
  console.log(answers);
  let correct = 0;
  answers.forEach(element => {
    if (element) correct++;
  });
  return (
    <Box textAlign={'center'}>
      <Heading color={'green'} mt={10}>
        SCORE: {correct/16 * 100}
      </Heading>
      <Box w={"80%"} m={"auto"} mt={10} p={5} border={"2px solid green"} borderRadius={10}>
        <Text color={'green.300'} fontSize={16}>
          Selamat! Karena score kamu di atas KKM, maka kamu berhak mendapatkan hadiah berikut! Click tombol untuk membuka hadiah!
        </Text>
      </Box>
      <Button onClick={() => navigate("/khal/hadiah")} mt={"12"} colorScheme='teal' size='lg'>
        Buka Hadiah!
      </Button>
    </Box>
  )
}