import { Box, Heading } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Box bgColor={'green.400'}>
      <Heading fontSize={16} fontFamily={'Arial'} color={'white'} p={3} textAlign={'center'}>
        KHAL x MCD
      </Heading>
    </Box>
  )
}