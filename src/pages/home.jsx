import "./css/home.css"
import Container from "../components/container"
import Rectangle from "../components/rectangleContent"
import VoteCard from "../components/voteCard"
import Cards from "../components/Cards"
import { useEffect, useState } from "react"

import Button from "../components/button"
import PopOut from "../components/popout/popout"
import { PopupProvider } from "../components/popout/popoutContext"
import PopupTrigger from "../components/popout/popoutTrigger"

import CreateOptions from "../components/CreateOption"
import ConnectButton from "../components/connectButton"

export default function Home() {
  return (
    <Container color="#000000">
      <ConnectButton />
      <Rectangle background="white" styles={{ "marginBottom": "84px" }}>
        <p className="rectangle-title">BellClub Voting</p>
        <p className="rectangle-text">Voting is a method for a group, such as a meeting or an electorate, in order to make a collective decision or express an opinion usually following discussions, debates or election campaigns</p>
      </Rectangle>

      <PopupProvider>
        <PopOut value={12} />
        <PopupTrigger buttonText="Create Subject" popOut={<CreateOptions type="subject" />}></PopupTrigger>
      </PopupProvider>

      <Cards type="subject" />

    </Container>
  )
}
