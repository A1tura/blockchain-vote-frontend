import "./css/voteCard.css";
import Card from "./voteCard";

import { useState, useEffect } from "react";

import { useCallContract } from "../hooks/useCallContract";

export default function Cards(props) {
  const [mobile, setMobile] = useState(
    window.matchMedia("(min-width: 481px) and (max-width: 767px)").matches
  );

  const [tablet, setTablet] = useState(
    window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
  );

  const { type, subjectId } = props

  const contract = useCallContract();
  const [cards, setCards] = useState([]);
  const [finalArray, setFinalArray] = useState([]);


  useEffect(() => {
    async function fetch() {
      if (contract) {
        const r = await contract;

        r.on("NewUserVote", async (id, optionId) => {
          console.log("new vote received");
          if (await r.getSubjectIdByOptionId(optionId) == subjectId) {
            setCards([]);
            fetch()
          }

        })

        if (type === "option") {


          r.on("NewOption", (id, name, description, subjectIdEvent) => {

            if (subjectIdEvent == subjectId) {
              setCards(arr => [...arr, {
                id,
                title: name,
                description,
                votes: 0
              }] 
            );
          }
        })
          
          const data = await r.GetOptionBySubjectID(Number(subjectId));
          const fetchedCards = data.map((f) => ({
            id: f[0],
            title: f[2],
            description: f[3],
            votes: f[4]
          }));
          setCards(fetchedCards);
        } else {

          r.on("NewSubject", (id, name, description) => {
            console.log("ff")
    
            setCards(arr => [...arr, {
              id,
              title: name,
              description
            }] );
          })

          const data = await r.GetSubjects();
          console.log(data)
          const fetchedCards = data.map((f) => ({
            id: f[0],
            title: f[1],
            description: f[2],
          }));

          setCards(fetchedCards);
        }
      }
    }

    fetch();
  }, []);

  let row;
  if (mobile) {
    row = 1;
  } else if (tablet) {
    row = 2;
  } else {
    row = 3;
  }

  if ((cards.length + 1) <= 3) {
    row = cards.length
  }

  useEffect(() => {
    function start() {
      let finalArr = [];
      let columns = [];
      let lastColumns = [];

      cards.forEach((result, i) => {
        let cardComponent;

        if (type === "option") {
          cardComponent = (<Card
            key={result.id}
            id={result.id}
            title={result.title}
            description={result.description}
            styles={row === 1 ? { width: "100%" } : row === 2 ? { width: "50%" } : {}}
            type={type}
            votes={Number(result.votes)}
          />)
        } else {
          cardComponent = (<Card
            key={result.id}
            id={result.id}
            title={result.title}
            description={result.description}
            styles={row === 1 ? { width: "100%" } : row === 2 ? { width: "50%" } : {}}
            type={type}
          />)
        }

        columns.push(cardComponent);

        if ((i + 1) % row === 0) {
          finalArr.push(
            <div key={`row-${i}`} className="cards">
              {columns}
            </div>
          );
          columns = [];
        }

        if (cards.length % row !== 0 && i >= cards.length - (cards.length % row)) {
          lastColumns.push(cardComponent);
        }

        if (cards.length % row !== 0 && i === cards.length - 1) {
          finalArr.push(
            <div key={`last-row-${i}`} className="cards">
              {lastColumns}
            </div>
          );
        }
      });

      setFinalArray(finalArr);
    }

    start();
  }, [cards, row]);

  if (cards.length === 0) {
    return <p>Cards do not exist</p>;
  }

  return <>{finalArray}</>;
}

