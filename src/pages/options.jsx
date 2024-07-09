import { useParams } from "react-router-dom"
import Cards from "../components/Cards";
import Container from "../components/container";

import PopOut from "../components/popout/popout"
import PopupTrigger from "../components/popout/popoutTrigger"
import { PopupProvider } from "../components/popout/popoutContext";

import Create from "../components/CreateOption"
import { useCallContract } from "../hooks/useCallContract";
import { useEffect, useState } from "react";
import ConnectButton from "../components/connectButton";
import NotFound from "../components/notFound";

export default function Options() {
  const { subjectId } = useParams();
  const contract = useCallContract();
  const [lastSubject, setLastSubject] = useState(0);

  useEffect(() => {
    async function fetch() {
      const c = await contract;

      setLastSubject(Number(await c.GetLastSubjectId()) - 1)
    }

    fetch()
  }, [])

  console.log(Number(subjectId))


  if (subjectId > lastSubject || isNaN(Number(subjectId))) {
    return (
      <NotFound />
    )
  }

  return (
    <Container>
      <ConnectButton />
      <PopupProvider>
        <PopOut value={12} />
        <PopupTrigger buttonText="Create Option" popOut={<Create subjectId={subjectId} type="option" />} styles={{ "padding": "10px 10px" }}></PopupTrigger>
      </PopupProvider>


      <Cards type="option" subjectId={subjectId} />
    </Container>
  )
}
