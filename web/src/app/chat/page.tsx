import { ChatList } from "@/components/component/chat-list";
import Navbar from "@/components/component/navbar";
import { cn } from "@/lib/utils";

export default async function Chat() {
  return (
    <div className="mx-auto lg:w-[50%]">
      <div
        className={cn(
          "flex flex-col",
          "bg-background text-foreground font-body"
        )}
      >
        <Heading />
        <ChatList action="chat" />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <>
      <header className="w-full mx-auto max-w-4xl px-4 py-6 md:px-6">
        <Navbar />
      </header>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold">AI-Powered Chatbot</h1>
        <p className="text-muted-foreground">Enter a prompt to get started.</p>
      </div>
    </>
  );
}
