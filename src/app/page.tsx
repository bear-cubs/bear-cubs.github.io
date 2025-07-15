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
      <div className="w-full md:max-w-[70%] mx-auto flex flex-col gap-4 md:gap-8 shadow-lg p-6 md:p-8 rounded-lg items-start justify-center pb-8">
        <header className="w-full flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center">
                BearCubs
              </h1>
              <Image
                src="/gummy-bear.png"
                alt="Bearcubs Logo"
                width={100}
                height={100}
                className="w-[64px] md:w-[100px] h-[64px] md:h-[100px]"
              />
            </div>
            {/* Small tagline text */}
            <p className="text-center text-sm md:text-base text-muted-foreground italic leading-tight">
              A small but mighty benchmark for computer-using web agents
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-2 md:gap-4">
            <Button asChild>
              <Link href="https://arxiv.org/abs/2503.07919">Paper</Link>
            </Button>
            <Button asChild>
              <a href="/BearCubs_20250310.json.zip" download>Download questions</a>
            </Button>
            <Button asChild>
              <Link href="https://forms.gle/dLj4QWRgAu4bpcE96">Submit a question</Link>
            </Button>
            <Button asChild>
              <Link href="https://forms.gle/JsGCV4FjpTPn16Md7">Evaluate your agent</Link>
            </Button>
            <Button asChild>
              <Link href="mailto:bearcubsteam@gmail.com">Contact us</Link>
            </Button>
          </div>
        </header>
        <Separator />
        <p className="text-md text-muted-foreground">🐻 BearCubs 🐻 evaluates the capability of web agents to search, browse,
        and extract factual information from the live web through complex and diverse text-based and multimodal interactions. 
        For more details, check out our paper! ✨
        <br />
        <br />
        About the benchmark: BearCubs comprises 111 carefully crafted questions covering a wide range of topics, including but 
        not limited to music, maps, videos, games, and virtual tours. Each question is designed to be adversarial to 
        closed-book LLMs and simple Google searches. Answers are concise and uniquely formulated to eliminate ambiguity 
        and paraphrasing. Additionally, all questions can be answered without accessing content behind paywalls or login 
        restrictions.
        <br />
        <br />
        Data updates: We continuously validate existing questions and answers while introducing new, more challenging ones. 
        Check the bottom of the webpage for the latest update date. If you're interested in pushing the boundaries of state-of-the-art 
        agents, consider contributing to the BearCubs dataset! 🚀</p>

        <Separator />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Card className="p-4 w-max-w-[360px] flex flex-col items-center justify-center">
            <p>In the table below, a <strong>CU</strong> agent is an agent with <strong>computer use</strong> capabilities that can perform interactive browsing
            by processing pixels on the screen and controlling a virtual keyboard and mouse.</p>
          </Card>
        </div>
        <DataTable columns={columns} data={parsedData} />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold">Example Question</h2>
          <Card className="p-4 w-max-w-[720px] flex flex-col items-center justify-center">
            <CardContent className="max-w-[720px]">
              <Image src="/example_1.png" alt="Example Question" height={450} width={720} layout="responsive"/>
              <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-2 md:gap-4">
                <p>View trajectories for:</p>
                <Button asChild>
                  <Link href="https://drive.google.com/file/d/1h5OuhmTT5HSE1gvqmXiiTaskVvtDZOJM/view">Computer Use</Link>
                </Button>
                <Button asChild>
                  <Link href="https://www.youtube.com/watch?v=6xMUqsS7jcM">Proxy</Link>
                </Button>
                <Button asChild>
                  <Link href="https://www.youtube.com/watch?v=HAdKKLmlhy4">Operator</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold">Gold Answer Access & Usage Policy</h2>
          <Card className="p-4 w-max-w-[720px] flex flex-col items-center justify-center">
            <CardContent>
              <p className="text-md">
                To maintain responsible use of our evaluation data, we do not publicly release the gold answers associated with this project. Researchers interested in accessing the gold answers may request them via email at <Link href="mailto:bearcubsteam@gmail.com" className="text-blue-500 hover:underline">bearcubsteam@gmail.com</Link>. Access will be granted on a case-by-case basis for non-commercial research purposes only.
              </p>
              <br />
              <p className="text-md">Please note:</p>
              <ul className="list-disc list-inside pl-4">
                <li>Redistribution or open-sourcing of the gold answers is strictly prohibited.</li>
                <li>By requesting access, you agree to use the answers solely for internal evaluation or research.</li>
                <li>Any use of the gold answers must cite our work appropriately</li>
              </ul>
              <div className="mt-4 flex justify-center">
                <Button asChild>
                  <Link href="/bearcubs_autorater.zip" download>Download Autorater Code</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/ysong.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Yixiao Song</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/kthai.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Katherine Thai</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/cpham.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Chau Minh Pham</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/ychang.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Yapei Chang</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/mnadaf.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Mazin Nadaf</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/miyyer.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold">Mohit Iyyer</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Card className="p-4 w-max-w-[720px] flex flex-col items-center justify-center">
            <p>Website last updated July 15, 2025</p>
          </Card>
        </div>


      </div>
    </div>
  );
}
