import { cn } from "@/lib/utils";
import { Fragment } from "react";

export interface FlatListProps<T>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: T[];
  renderItem: (props: T) => React.JSX.Element;
  keyGetter: (item: T) => string | number;
}

export default function FlatList<T>({
  data,
  renderItem,
  keyGetter,
  className,
  ...rest
}: FlatListProps<T>) {
  return (
    <div {...rest} className={cn("grid grid-cols-2 gap-6", className)}>
      {data.map((item) => (
        <Fragment key={keyGetter(item) as string}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
}
