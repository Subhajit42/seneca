import { type ClassValue, clsx } from "clsx";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function markdown2HTML(markdown: string) {
  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return processedContent.toString();
}
