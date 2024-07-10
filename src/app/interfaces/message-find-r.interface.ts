import { Sender } from "../service/sender.enum";

export interface IMessageFindR {
  id: number;
  roomId: string;
  content: string;
  timestamp: number;
  sender: Sender;
}

