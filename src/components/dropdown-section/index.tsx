import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  triggerComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function CollapsibleSection({
  triggerComponent,
  children,
  className,
}: CollapsibleSectionProps) {
  return (
    <Collapsible className={className}>
      <CollapsibleTrigger>{triggerComponent}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
