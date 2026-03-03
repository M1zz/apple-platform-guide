// ============================================
// App Entry Point
// ============================================

function App() {
  const [selectedPlatform, setSelectedPlatform] = React.useState("macOS");

  return (
    <div>
      <Header />
      <DecisionFlow />
      <PlatformSelector selected={selectedPlatform} onSelect={setSelectedPlatform} />
      <PlatformDetail platformKey={selectedPlatform} />
      <ComparisonMatrix />
      <PriorityFramework />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
