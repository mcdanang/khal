import { Box, Button, Center, Image, useSafeLayoutEffect } from "@chakra-ui/react";
import questions from './questions.json';
// import {MdOutlineNavigateNext, MdOutlineNavigateBefore} from 'react-icons/md';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {

  const [quest, setQuest] = useState(0);
  const [buttonName, setButtonName] = useState("Next");
  const navigate = useNavigate();

  function saveAnswer(id, answer) {
    console.log(id, answer);
    if (!localStorage.getItem("answers")) {
      const arr = [];
      arr[id] = answer;
      localStorage.setItem("answers", JSON.stringify(arr));
    } else {
      const arr = JSON.parse(localStorage.getItem("answers"));
      arr[id] = answer;
      localStorage.setItem("answers", JSON.stringify(arr));
    };
  }

  function next() {
    if (quest < questions.length - 1) setQuest(quest + 1);
    if (quest === 14) setButtonName("Submit");
    console.log(quest, buttonName);
    if (buttonName === "Submit") navigate("/khal/result");
  }
  // function back() {
  //   if (quest > 0) setQuest(quest - 1);
  // }

  return (
    <Center>
      <Box w={'90%'} mt={5} p={3} border={'2px solid green'} borderRadius={20} textAlign={'center'}>
        <Box display={'flex'} justifyContent={'center'}>
          {/* <Button onClick={back} size='xs'><Icon as={MdOutlineNavigateBefore}></Icon></Button> */}
          <Box mx={5} pb={3} fontSize={14}><b>QUESTION {questions[quest].id + 1}</b><br/></Box>
          <Button onClick={next} fontSize={10} size='xs'>{buttonName}</Button>
        </Box>
        <Center>
          <Image borderRadius={20} maxH={300} src={questions[quest].img}></Image>
        </Center>
        <Box>
          {questions[quest].option.map((el, index) => {
            return (
              <Button colorScheme='teal' variant='outline' w={'80%'} maxW={"400px"} display={'block'} m={'auto'} mt={2} fontSize={12}
                onClick={() => saveAnswer(questions[quest].id, index === questions[quest].answer)}
              >
                {el.length < 16? el: el.slice(0, el.indexOf(" ", 10))} <br/> {el.indexOf(" ", 10) !== -1? el.slice(el.indexOf(" ", 10)) : " "}
              </Button>
            )
          })}
        </Box>
      </Box>
    </Center>
  )
}