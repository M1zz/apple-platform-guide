// ============================================
// App Entry Point
// ============================================

function DonateButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button className="donate-fab" onClick={() => setOpen(true)} aria-label="후원하기">
        ☕
      </button>
      {open && (
        <div className="donate-overlay" onClick={() => setOpen(false)}>
          <div className="donate-modal" onClick={e => e.stopPropagation()}>
            <div className="donate-modal__title">커피 한 잔 후원하기 ☕</div>
            <p className="donate-modal__desc">도움이 되셨다면 카카오페이로 응원해주세요!</p>
            <img className="donate-modal__qr" src="images/kakaopay-qr.jpg" alt="카카오페이 QR 코드" />
            <button className="donate-modal__close" onClick={() => setOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [selectedPlatform, setSelectedPlatform] = React.useState("iOS");

  return (
    <div>
      <Header />
      <PlatformSelector selected={selectedPlatform} onSelect={setSelectedPlatform} />
      <PlatformPage platformKey={selectedPlatform} />
      <Footer />
      <DonateButton />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
