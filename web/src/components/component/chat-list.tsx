"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import ChatBottomBar from "./chat-bottom-bar";
import ChatBubble from "./chat-bubble";
import FlatList from "./flat-list";
import { PromptCard } from "./prompt-card";

// Constants
import {
  SUGGESTED_PROMPTS_IMAGE,
  SUGGESTED_PROMPTS_TEXT,
} from "@/lib/constants";

// Type definitions
import { Action, Message } from "@/types/Chat";
import { ChatImageBubble } from "./chat-image-bubble";
import { Image } from "@/lib/openai";

// A object containing predefined prompts
const predefinedPrompts = {
  image: SUGGESTED_PROMPTS_IMAGE,
  chat: SUGGESTED_PROMPTS_TEXT,
};

export function ChatList({ action }: { action: Action }) {
  const [messages, setMessages] = useState<Message[]>([]);

  // The current response in the chat
  const [response, setResponse] = useState<string | null>(null);

  // The image which will be generated
  const [images, setImages] = useState<Image[] | undefined>(undefined);

  // For predefined prompts
  const [predefined, setPredefined] = useState<string | null>(null);
  return (
    <div className="flex flex-col w-full max-w-screen-md [&>*]:flex-1 pb-20">
      <PreviousChat
        action={action}
        response={response}
        messages={messages}
        setPredefined={setPredefined}
      />

      {/* These components will float here */}
      <CurrentResponse
        images={images}
        response={response}
        messages={messages}
      />

      <ChatBottomBar
        predefined={predefined}
        action={action}
        images={images}
        setImages={setImages}
        setMessages={setMessages}
        setResponse={setResponse}
        response={response}
      />
    </div>
  );
}

function CurrentResponse({
  response,
  images,
  messages,
}: {
  response: string | null;
  images?: Image[];
  messages: Message[];
}) {
  // If the current response is null, then don't render
  if (!response) return null;

  const message = {
    id: messages.length + 1,
    name: "bot",
    role: "bot",
    images: images,
    message: response,
  } as Message;

  // Else, render in a bubbble
  return typeof message.images === "undefined" ? (
    <ChatBubble {...message} />
  ) : (
    <ChatImageBubble data={message.images} alt={message.message} />
  );
}

function PreviousChat({
  action,
  messages,
  response,
  setPredefined,
}: {
  action: Action;
  response: string | null;
  messages: Message[];
  setPredefined: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, response]);

  // If the length of the current chat is empty, then don't render anything else than a screen
  if (messages.length === 0) {
    // There has been no previous interactions, so show the template prompts
    return (
      <h1 className="text-xl  m-5 text-center">
        Write prompt to make changes in the document generated
      </h1>
      // <FlatList
      //   className="m-6"
      //   data={predefinedPrompts[action]}
      //   keyGetter={(item) => item.title}
      //   renderItem={(props) => (
      //     <PromptCard {...props} setPredefined={setPredefined} />
      //   )}
      // />
    );
  }

  // Else, return the chat bubbles
  return (
    <div
      ref={messagesContainerRef}
      className="w-full h-fit overflow-y-auto overflow-x-hidden flex flex-col flex-1 no-scrollbar"
    >
      <AnimatePresence>
        {messages.map((message, index) =>
          typeof message.images === "undefined" ? (
            <ChatBubble {...message} key={index} />
          ) : (
            <ChatImageBubble
              data={message.images!}
              alt={message.message}
              key={index}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
}
