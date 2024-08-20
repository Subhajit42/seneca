export default function Box({ children }: { children: React.ReactNode }) {
  return <div className="p-1 min-h-screen">{children}</div>;
}
