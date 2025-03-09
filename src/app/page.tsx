import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { RowData } from "@/components/results-table/columns";
import { DataTable } from "@/components/results-table/data-table";
import { columns } from "@/components/results-table/columns";
import { bearCubsLeaderboard } from "@/data/bear_cubs_leaderboard";
import { CollapsibleSection } from "@/components/dropdown-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Home() {
  const parsedData: RowData[] = bearCubsLeaderboard;
  return (
    // Main container
    <div className="w-full h-full flex flex-col items-center justify-baseline px-0 py-2 md:p-8">
      {/* Content Container */}
      <div className="w-full flex flex-col gap-8 shadow-lg p-2 md:p-8 rounded-lg items-start justify-center">
        <header className="w-full flex flex-col gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <h1 className="text-6xl font-bold tracking-tight text-center">
              BearCubs
            </h1>
            <Image
              src="/gummy-bear.png"
              alt="Bearcubs Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button>Submit a question</Button>
            <Button>Submit an agent</Button>
            <Button asChild>
              <Link href="mailto:yixiao.song.syx@gmail.com">Contact us</Link>
            </Button>
          </div>
        </header>
        <Separator />
        <p className="text-lg text-muted-foreground">Bearcubs leaderboard</p>
        <DataTable columns={columns} data={parsedData} />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="p-6 text-3xl font-bold">Example Question</h2>
          <Card className="p-4 w-max-w-[620px] flex flex-col items-center justify-center">
            <CardContent className="max-w-[620px]">
              <p className="text-lg text-muted-foreground">
                In the virtual tour of the Museo de Ciencias Naturales de La
                Plata, Buenos Aires, Argentina, how many columns are visible on
                the entrance floor in the Hall area?
              </p>
            </CardContent>
          </Card>
        </div>
        <CollapsibleSection
          className="w-full flex flex-col items-center justify-center gap-4"
          triggerComponent={
            <Button variant="ghost" className="p-6 text-3xl font-bold" asChild>
              <h2>Team</h2>
            </Button>
          }
        >
          <div className="flex flex-col gap-4 p-4">
            <Avatar className="w-48 h-48">
              <AvatarImage src="/kthai.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
