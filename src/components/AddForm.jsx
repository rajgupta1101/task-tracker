import React, { useState } from "react";
import { getCurrentDateTime, getRandomId } from "../utlis";
import Button from "./Button";

export default function AddForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState(getCurrentDateTime());
  const [remindMe, setRemindMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: getRandomId(),
      taskName: name,
      datetime: datetime,
      remindMe: remindMe,
    });

    setName("");
    setDatetime(getCurrentDateTime());
    setRemindMe(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="form-input">
          <label htmlFor="date-time">Day & Time</label>
          <input
            onChange={(e) => setDatetime(e.target.value)}
            value={datetime}
            type="datetime-local"
            id="date-time"
          />
        </div>
        <div className="form-checkbox">
          <label htmlFor="remind-me">Remind me</label>
          <input
            onChange={(e) => setRemindMe(e.target.checked)}
            checked={remindMe}
            type="checkbox"
            id="remind-me"
          />
        </div>
        <Button title={"submit"} />
      </form>
    </div>
  );
}
