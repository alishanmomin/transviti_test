import TopNav from "../components/layout/TopNav.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import JobsSection from "../components/jobs/JobsSection.jsx";
import PageShell from "../hocs/PageShell.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <PageShell>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <JobsSection />
          </div>
        </div>
      </PageShell>
    </div>
  );
}
