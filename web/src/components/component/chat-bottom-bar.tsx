"use client";

import { useEffect, useRef, useState } from "react";

// Components
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Gemini functionality
import { sendMessage } from "@/lib/gemini";

// Type definitions
import { Action, Message } from "@/types/Chat";

// Hooks
import useAuth from "@/hooks/use-auth";
import { generateImage, Image } from "@/lib/openai";

export default function ChatBottomBar({
  action,
  response,
  images,
  predefined,
  setImages,
  setResponse,
  setMessages,
}: {
  action: Action;
  response: string | null;
  predefined: string | null;
  images?: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[] | undefined>>;
  setResponse: React.Dispatch<React.SetStateAction<string | null>>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  // The current logged-in user
  const { user } = useAuth();
  // Used to keeping track of the prompt
  const [prompt, setPrompt] = useState<string>("");

  const input = useRef<HTMLInputElement>(null);

  // Focus on the text element
  // useEffect(() => {
  //   input.current?.focus();
  // }, []);

  // Change the text in the input element, if the predefined prompt changes
  useEffect(() => {
    console.log({ predefined });
    // Return if the prompt is null
    if (!predefined) return;

    const generate = async () => {
      await handleSubmit(predefined);
    };

    generate();
  }, [predefined]);

  const performAction = async (cardPrompt?: string) => {
    if (action === "chat") {
      // Fetch the message from the gemini function in chunks
      const res = await sendMessage(
        typeof cardPrompt === "undefined" ? prompt : cardPrompt
      );
      // print text as it comes in
      for await (const chunk of res.stream) {
        const chunkText = chunk.text();
        setResponse((prev) => (prev ? prev + chunkText : chunkText));
      }
    } else {
      // Get the generated image
      generateImage(prompt, 1).then((img) => setImages(img));
    }
  };

  /**
   * Handles the submission of the prompt, and gets the response from the bot
   */
  const handleSubmit = async (cardPrompt?: string) => {
    setPrompt("");
    if (!input.current) return;
    if (!prompt && typeof cardPrompt === "undefined") return;

    // Add the previous response to the messages
    setMessages((prev) =>
      response
        ? ([
            ...prev,
            {
              id: prev.length + 1,
              role: "bot",
              name: "bot",
              message: response,
              images: images,
            },
          ] as Message[])
        : prev
    );

    // Add the prompt to the list of the messages
    setMessages(
      (prev) =>
        [
          ...prev,
          {
            id: prev.length + 1,
            role: "user",
            name: user?.displayName,
            avatar: user?.photoURL,
            message: prompt || cardPrompt,
          },
        ] as Message[]
    );
    // Response the previous response
    setResponse(null);
    // Perform the action
    await performAction(cardPrompt);
    // Reset the prompt
  };

  /**
   * Key board shortcut for submitting the prompt
   */
  const keydownHandler: React.KeyboardEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.code == "Enter") {
      // Submit the prompt
      await handleSubmit();
    }
  };

  return (
    <div className="fixed max-w-screen-md inset-0 top-auto mx-auto p-4 bg-background">
      <div className="flex items-center w-full space-x-2">
        <Input
          ref={input}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={keydownHandler}
          type="text"
          placeholder="Enter your prompt..."
          className="flex-1 px-4 py-2 text-lg rounded-md border border-input"
        />
        <Button
          type="submit"
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => handleSubmit()}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
