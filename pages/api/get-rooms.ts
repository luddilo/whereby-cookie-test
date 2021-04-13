import axios from "axios";
import key from "../../config.json";
import { rooms, Room } from "../../shared";

const getRoom = async (meetingId: number) => {
  try {
    const response = await axios.get(
      `https://api.whereby.dev/v1/meetings/${meetingId}`,
      {
        headers: {
          Authorization: `Bearer ${key.wherebyKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data as Room;
  } catch (err) {
    return undefined;
  }
};

export default async (_, res) => {
  const existingRooms = await Promise.all(
    rooms.map((room) => getRoom(room.meetingId))
  );
  res.status(200).json(existingRooms.filter(Boolean));
};
