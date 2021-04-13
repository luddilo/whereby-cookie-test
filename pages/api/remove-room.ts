import axios from "axios";
import key from "../../config.json";
import { removeRoom } from "../../shared";

export default async (req: any, res: any) => {
  const { meetingId } = req.body;
  await axios.delete(`https://api.whereby.dev/v1/meetings/${meetingId}`, {
    headers: {
      Authorization: `Bearer ${key.wherebyKey}`,
      "Content-Type": "application/json",
    },
  });

  removeRoom(meetingId);
  res.status(200).json({});
};
