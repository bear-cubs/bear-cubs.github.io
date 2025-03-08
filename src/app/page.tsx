import { Separator } from "@/components/ui/separator";
import type { RowData } from "@/components/results-table/columns";
import { DataTable } from "@/components/results-table/data-table";
import { columns } from "@/components/results-table/columns";
import { bearCubsLeaderboard } from "@/data/bear_cubs_leaderboard";
import { CollapsibleSection } from "@/components/dropdown-section";

export default function Home() {
  const parsedData: RowData[] = bearCubsLeaderboard;
  return (
    // Main container
    <div className="w-full h-full flex flex-col items-center justify-baseline px-0 py-2 md:p-8">
      {/* Content Container */}
      <div className="w-full flex flex-col gap-8 shadow-lg p-2 md:p-8 rounded-lg items-start justify-center">
        <header className="text-4xl font-bold text-center w-full">
          Bearcubs
        </header>
        <Separator />
        <p>Bearcubs leaderboard</p>
        <DataTable columns={columns} data={parsedData} />
        <CollapsibleSection
          triggerComponent={
            <h2 className="text-lg font-bold">Example Question</h2>
          }
        >
          <p>Example Answer</p>
        </CollapsibleSection>
        <CollapsibleSection
          triggerComponent={<h2 className="text-lg font-bold">Team</h2>}
        >
          <p>Example Answer</p>
        </CollapsibleSection>
      </div>
    </div>
  );
}
