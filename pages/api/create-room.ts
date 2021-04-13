import axios from "axios";
import key from "../../config.json";
import { addRoom, Room } from "../../shared";

export default async (_, res) => {
  const response = await axios.post(
    "https://api.whereby.dev/v1/meetings",
    {
      startDate: "2021-03-31T19:11:04.384Z",
      endDate: "2021-04-01T19:11:04.384Z",
      fields: ["hostRoomUrl"],
    },
    {
      headers: {
        Authorization: `Bearer ${key.wherebyKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  addRoom(response.data as Room)
  res.status(200).json(response.data);
};
