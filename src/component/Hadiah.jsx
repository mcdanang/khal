import { Box, Heading, AspectRatio } from "@chakra-ui/react"

export default function Hadiah() {
  return (
    <Box textAlign={'center'}>
      <Heading color={'green'} mt={10}>
        HAPPY 15TH OF THE MONTH<br/>❤️❤️❤️❤️❤️
      </Heading>
      <Box maxW={"600px"} w={"98%"} m={"auto"} mt={10} p={1} border={"2px solid green"} borderRadius={10}>
        <AspectRatio maxW={"600px"} ratio={1}>
          <video controls>
            <source src="http://teman-sejati.com/wp-content/uploads/2023/03/Teman-Hidup.mov" type="video/mp4"/>
          </video>
        </AspectRatio>
      </Box>
    </Box>
  )
}