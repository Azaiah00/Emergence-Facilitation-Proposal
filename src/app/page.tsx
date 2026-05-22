import { TopNav } from "@/components/ui/TopNav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { WelcomeLetter } from "@/components/sections/WelcomeLetter";
import { Opportunity } from "@/components/sections/Opportunity";
import { StatementOfWork } from "@/components/sections/StatementOfWork";
import { SuccessMetrics } from "@/components/sections/SuccessMetrics";
import { Investment } from "@/components/sections/Investment";
import { Facilitator } from "@/components/sections/Facilitator";
import { Agenda } from "@/components/sections/Agenda";
import { Beyond } from "@/components/sections/Beyond";
import { Coaching } from "@/components/sections/Coaching";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <TopNav />
      
      <Hero />
      <WelcomeLetter />
      <Opportunity />
      <StatementOfWork />
      <SuccessMetrics />
      <Investment />
      <Facilitator />
      <Agenda />
      <Beyond />
      <Coaching />
      <Footer />
    </main>
  );
}
