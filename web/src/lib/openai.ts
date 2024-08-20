/**
 * Intialize the global object
 */
import { OpenAI } from "openai";
// import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  project: "proj_mi6PWEU854Eauk7SHG9ms3xl",
  organization: "org-u4QD2vKl8XjBoB7cfayyWCl7",
  dangerouslyAllowBrowser: true,
});

// Type alias for the image
export type Image = OpenAI.Images.Image;

/**
 * Generates images from the given prompt
 * @param prompt The prompt for image generation (max 1000 characters)
 * @param n The number of images to generate in range [1, 3]
 * @returns undefined if any paramter is not valid, else the image data
 */
export async function generateImage(prompt: string, n: number) {
  // Check if the prompt is within 1000 characters for dall-e-2 or not
  if (prompt.length >= 1000 || n > 3 || n < 1) {
    return;
  }
  // Else return the generated image
  return (
    await openai.images.generate({
      model: "dall-e-2",
      size: "512x512",
      n,
      prompt,
    })
  ).data;
}

// export async function editImage(prompt: string) {
//   // Check prompt limit
//   if (prompt.length >= 1000) {
//     return;
//   }
//   return await openai.images.edit({
//     model: "dall-e-2",
//     size: "512x512",
//     image: fs.createReadStream("otter.png"),
//     mask: fs.createReadStream("mask.png"),
//     prompt,
//   });
// }
