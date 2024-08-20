import { Image } from "@/lib/openai";

export type Role = "user" | "bot";

export type Action = "chat" | "image";

export interface Message {
  id: number;
  role: Role;
  name: string;
  avatar: string;
  message: string;
  images?: Image[];
}
