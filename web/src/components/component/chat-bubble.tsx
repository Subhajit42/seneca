"use client";

import { cn, markdown2HTML } from "@/lib/utils";
import parse from "html-react-parser";

// Type definitions
import { Message } from "@/types/Chat";

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function ChatBubble({
  id,
  role,
  name,
  avatar,
  message,
}: Message) {
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    // Now convert the response from Markdown to HTML
    markdown2HTML(message!).then((html) => setResponse(html));
  }, [message]);

  console.log({ avatar });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
      transition={{
        opacity: { duration: 0.1 },
        layout: {
          type: "spring",
          bounce: 0.3,
          duration: id * 0.05 + 0.2,
        },
      }}
      style={{
        originX: 0.5,
        originY: 0.5,
      }}
      className={cn(
        "flex flex-col gap-2 p-4 whitespace-pre-wrap",
        role === "user" ? "items-end" : "items-start"
      )}
    >
      <div className="flex gap-3 items-center">
        {role === "user" && (
          <Avatar className="flex justify-center items-center">
            <AvatarImage src={avatar} alt={name} width={6} height={6} />
          </Avatar>
        )}
        <span className=" bg-accent p-3 rounded-md max-w-lg">
          {role === "bot" ? parse(response) : message}
        </span>
        {/* {role !== 'user' && (
                  // <Avatar className="flex justify-center items-center">
                  //   <AvatarImage
                  //     src={message.avatar}
                  //     alt={message.name}
                  //     width={6}
                  //     height={6}
                  //   />
                  // </Avatar>
                )} */}
      </div>
    </motion.div>
  );
}
