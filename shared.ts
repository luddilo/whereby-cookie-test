export let rooms: Room[] = [];

export const addRoom = (room: Room) => rooms.push(room);

export const removeRoom = (roomId: number) => {
  rooms = rooms.filter((room) => room.meetingId !== roomId);
};

export type Room = {
  startDate: string;
  endDate: string;
  hostRoomUrl: string;
  meetingId: number;
  roomUrl: string;
};
