import BeamsBackground from './components/beams-background';
import ResumeMatcher from './components/ResumeMatcher';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BeamsBackground />
      <main className="relative z-10 p-6">
        <ResumeMatcher />
      </main>
    </div>
  );
}

export default App;
