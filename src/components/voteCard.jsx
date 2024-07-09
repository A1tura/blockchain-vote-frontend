import "./css/voteCard.css";
import Button from "./button";

import { useSendContract } from "../hooks/useSendContract";
import { useNavigate } from "react-router-dom";
import { parseError } from "../utils/parseError";
import { notification } from "../utils/notification";

export default function Card({ title, description, styles, id, type, votes }) {
  const contract = useSendContract();
  const navigate = useNavigate();

  async function Vote() {
    if (contract) {
      try {
        const r = await contract;
        await r.userVote(id);
      } catch (error) {
        const r = await contract
        notification(parseError(r, error), "", "danger")
      }
    }
  }

  return (
    <div className="card" style={styles}>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      {type === "option" ?
        <p>{votes}</p> :
        <></>
      }
      <div className="card-actions">
        {type === "subject" ?
          <Button onClick={() => navigate(`/options/${id}`)} styles={{ "padding": "10px 10px", "width": "50%" }} text="Options" /> :
          <Button text="Vote" styles={{ "padding": "10px 10px", "width": "50%" }} onClick={Vote} />
        }
      </div>
    </div>
  );
}

