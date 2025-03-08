import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  triggerComponent: React.ReactNode;
  children: React.ReactNode;
}

export function CollapsibleSection({
  triggerComponent,
  children,
}: CollapsibleSectionProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>{triggerComponent}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
