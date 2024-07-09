import { useEffect, useState } from "react";
import Input from "./input";
import Button from "./button";
import PopOut from "./popOut";
import { useSendContract } from "../hooks/useSendContract";
import { notification } from "../utils/notification";
import { parseError } from "../utils/parseError";
import styles from "./css/createSubject.css";
import { usePopup } from "./popout/popoutContext";

export default function CreateOption({ subjectId, type }) {
  const [title, setTitle] = useState("")
  const [description, setDesciption] = useState("")
  const contract = useSendContract();
  const popup = usePopup();

  const handleForm = async () => {
    const con = await contract;

    try {
      if (type === "subject") {
        const req = await con.createSubject(title, description);

        if (req) {
          notification("Success!", "", "success");
          popup.clearPopup();
        }
      } else {
        const req = await con.createOption(title, description, subjectId);
        
        if (req) {
          notification("Success!", "", "success");
          popup.clearPopup();
        }
      }
    } catch (err) {
      try {
        notification(parseError(con, err), "", "danger");
        popup.clearPopup()
      } catch (error) {
        notification(err.message.split("(")[0], "", "danger")
        popup.clearPopup()
      }
    }
  };



  return (
    <PopOut>
      <div className="popout">
        <Input
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <Input
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
          className="input"
        />
        <Button className="button" text="Send" onClick={handleForm} />
      </div>
    </PopOut>
  );
}