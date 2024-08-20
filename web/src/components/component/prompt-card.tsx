import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface PromptCardProps {
  title: string;
  description: string;
  // setPrompt:
}

export function PromptCard({
  title,
  description,
  setPredefined,
}: PromptCardProps & {
  setPredefined: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <Card className="bg-background shadow-md">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary focus:bg-primary-foreground focus:text-primary"
          onClick={() => setPredefined(description)}
        >
          Create
        </Button>
      </CardContent>
    </Card>
  );
}
