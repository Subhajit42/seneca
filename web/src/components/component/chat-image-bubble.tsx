import { Image } from "@/lib/openai";

export function ChatImageBubble({ alt, data }: { alt: string; data: Image[] }) {
  return (
    <div>
      {data.map((src, index) => (
        <img src={src as string} alt={alt} key={index} />
      ))}
    </div>
  );
}
