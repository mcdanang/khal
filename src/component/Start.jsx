import { Box, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Start() {
  const navigate = useNavigate();

  return (
    <Box textAlign={'center'}>
      <Box color={'green'} w={"80%"} m={"auto"} mt={10} p={5} border={"2px solid lightgreen"} borderRadius={10}>Please Read the Instruction Carefully</Box>
      <Button onClick={() => navigate("/khal/quiz")} mt={"12"} colorScheme='teal' size='lg'>
        Click to Start Quiz
      </Button>
    </Box>
  )
}