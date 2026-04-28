import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/ferm/TopBar";
import { Hero } from "@/components/ferm/Hero";
import { Catalog } from "@/components/ferm/Catalog";
import { Services } from "@/components/ferm/Services";
import { WhyUs } from "@/components/ferm/WhyUs";
import { Process } from "@/components/ferm/Process";
import { CoverageMap } from "@/components/ferm/CoverageMap";
import { LeadForm } from "@/components/ferm/LeadForm";
import { FAQ } from "@/components/ferm/FAQ";
import { Footer } from "@/components/ferm/Footer";
import { LeadPopup } from "@/components/ferm/LeadPopup";
import { FloatingActions } from "@/components/ferm/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Оренда спецтехніки по всій Україні | FERM — 5000+ одиниць техніки" },
      {
        name: "description",
        content:
          "Оренда будівельної спецтехніки від FERM: екскаватори, автокрани, самоскиди, бульдозери. Швидка подача, конкурентна ціна, оператори. 0 800 75 07 07",
      },
      { property: "og:title", content: "Оренда спецтехніки по всій Україні | FERM" },
      {
        property: "og:description",
        content:
          "5000+ одиниць техніки для будівництва, дорожніх робіт та благоустрою. Подача від 2 годин. Працюємо з ПДВ і без.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main>
        <Hero />
        <Catalog />
        <Services />
        <WhyUs />
        <Process />
        <CoverageMap />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <LeadPopup />
      <FloatingActions />
    </div>
  );
}
