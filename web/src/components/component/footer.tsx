import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl px-4 py-6 md:px-6 border-t">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 AI Image Generator. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
