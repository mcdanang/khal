import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"

export default function Instruction() {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Instruction
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontFamily={'Arial'}>
          Selamat tanggal 15 Khal!<br/><br/>
          Jadi kali ini aku punya games quiz buat kamu!<br/>
          Aku buat sendiri loh wkwkwk<br/><br/>
          Jadi nanti aku akan tunjukkan beberapa foto,<br/>
          Terus kamu harus pilih dimanakah lokasi tempat foto tersebut diambil<br/><br/>
          Jelas? Yuk langsung mulai aja!
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}