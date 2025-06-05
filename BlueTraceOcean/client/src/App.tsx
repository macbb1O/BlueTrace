import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import MathPage from "@/pages/MathPage";
import SciencePage from "@/pages/SciencePage";
import GeographyPage from "@/pages/GeographyPage";
import EngineeringPage from "@/pages/EngineeringPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/math" component={MathPage} />
      <Route path="/science" component={SciencePage} />
      <Route path="/geography" component={GeographyPage} />
      <Route path="/engineering" component={EngineeringPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-b from-ocean-shallow to-white">
          <Navigation />
          <main className="pt-16">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
