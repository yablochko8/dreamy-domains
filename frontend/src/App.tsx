import "./App.css";
import { DomainList } from "./components/DomainList";
import { useSearchStateStore } from "./stores/searchStateStore";
import { TopNav } from "./components/TopNav";
import { InputForm } from "./components/InputForm";
import { useDisplayStateStore } from "./stores/displayStateStore";
import { RefineModal } from "./components/RefineModal";
import { ProgressMessage } from "./components/ProgressMessage";
import { AboutModal } from "./components/AboutModal";
import { FloatingActionBar } from "./components/FloatingActionBar";
import { HomepageInfo } from "./components/HomepageInfo";
import { Footer } from "./components/Footer";

function App() {
  const { assessments } = useSearchStateStore();
  const { isRefining } = useDisplayStateStore();

  const hasResults = assessments.completed.length > 0;

  return (
    <div className="blue-white-ellipse w-full">
      <TopNav />
      <div className="flex flex-col w-full max-w-2xl mx-auto min-h-[100dvh] space-y-4 px-4">
        {/* LANDING PAGE INPUT */}
        {!hasResults && (
          <div className="flex flex-col pt-10 md:pt-40 gap-5">
            <h1 className="text-center md:text-left">
              Dream up the perfect <strong>website name</strong>
            </h1>
            <div className="text-subtitle text-center md:text-left">
              Generate and stack-rank great domain names! Our AI will come up
              with names inspired by your description, and show you the best
              options that are not taken, and have standard pricing.
            </div>
            <InputForm />
            <HomepageInfo />
          </div>
        )}

        {/* DESKTOP REFINE FORM (mobile is in RefineModal) */}
        {hasResults && isRefining && (
          <div className="flex flex-col text-sm hidden md:block">
            <InputForm />
          </div>
        )}

        {/* RESULTS */}
        {hasResults && (
          <div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col text-center justify-start items-center py-4 gap-4 w-full">
                {/* RESULTS */}
                {assessments.completed.length > 0 && (
                  <DomainList domainOptions={assessments.completed} />
                )}

                {/* IN PROGRESS */}
                {assessments.inProgress.length > 0 && (
                  <ProgressMessage domains={assessments.inProgress} />
                )}
              </div>
            </div>
            <FloatingActionBar />
          </div>
        )}
        <Footer />
      </div>

      {/* MODALS */}
      <RefineModal />
      <AboutModal />
    </div>
  );
}

export default App;
