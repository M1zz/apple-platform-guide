// ============================================
// React Components
// ============================================

const { useState, useEffect } = React;

// --- Header ---
function Header() {
  return (
    <header className="header">
      <div className="header__label">Apple Platform Expansion</div>
      <h1 className="header__title">유니버셜 앱 확장 전략</h1>
      <p className="header__subtitle">iOS 앱을 Apple 생태계 전체로 확장하는 의사결정 프레임워크</p>
    </header>
  );
}

// --- Decision Flow ---
function DecisionFlow() {
  return (
    <section className="flow-section">
      <h2 className="section-label">의사결정 플로우</h2>
      <div className="flow-steps">
        {FLOW_STEPS.map((step, i) => (
          <div className="flow-step" key={step.id}>
            <div className="flow-step__icon">{step.icon}</div>
            <div className="flow-step__title">{step.title}</div>
            <div className="flow-step__desc">{step.desc}</div>
            {i < FLOW_STEPS.length - 1 && <span className="flow-step__arrow">›</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Platform Selector ---
function PlatformSelector({ selected, onSelect }) {
  return (
    <section className="platform-section">
      <h2 className="section-label">플랫폼별 확장 기준</h2>
      <div className="platform-tabs">
        {PLATFORM_KEYS.map((key) => {
          const p = PLATFORM_DATA[key];
          const isActive = selected === key;
          return (
            <button
              key={key}
              className={`platform-tab ${isActive ? "platform-tab--active" : ""}`}
              onClick={() => onSelect(key)}
              style={{
                borderColor: isActive ? p.color : "transparent",
                background: isActive ? p.colorLight : "#fff",
              }}
            >
              <span className="platform-tab__icon">{p.icon}</span>
              <div>
                <div
                  className="platform-tab__title"
                  style={{ color: isActive ? p.color : "#1D1D1F" }}
                >
                  {p.title}
                </div>
                <div className="platform-tab__subtitle">{p.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// --- Key Question ---
function KeyQuestion({ platform }) {
  return (
    <div
      className="key-question animate-fade-up"
      style={{
        background: `linear-gradient(135deg, ${platform.color}11, ${platform.color}08)`,
        border: `1px solid ${platform.color}22`,
      }}
    >
      <div className="key-question__label" style={{ color: platform.color }}>
        핵심 판단 질문
      </div>
      <div className="key-question__text">"{platform.decisionQuestion}"</div>
      <div className="key-question__meta">
        <span
          className="badge"
          style={{
            background: platform.difficultyColor + "20",
            color: platform.difficultyColor,
          }}
        >
          난이도: {platform.difficulty}
        </span>
        <span className="meta-info">⏰ {platform.timeline}</span>
        <span className="meta-info">🛠️ {platform.method}</span>
      </div>
    </div>
  );
}

// --- Tab: Overview (Criteria) ---
function TabOverview({ platform }) {
  return (
    <div className="criteria-list">
      {platform.criteria.map((c, i) => (
        <div
          className="criteria-card animate-slide-in"
          key={i}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className="criteria-card__header">
            <div className="criteria-card__label-group">
              <span className="criteria-card__icon">{c.icon}</span>
              <span className="criteria-card__name">{c.label}</span>
            </div>
            <span
              className="criteria-card__weight"
              style={{ color: platform.color, background: platform.colorLight }}
            >
              {c.weight}%
            </span>
          </div>
          <div className="criteria-card__desc">{c.desc}</div>
          <div className="criteria-card__bar-track">
            <div
              className="criteria-card__bar-fill"
              style={{
                width: c.weight + "%",
                background: `linear-gradient(90deg, ${platform.color}, ${platform.color}AA)`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Tab: Fit ---
function TabFit({ platform }) {
  return (
    <div className="fit-section animate-fade-up">
      <div className="fit-card">
        <div className="fit-card__header">
          <span className="fit-card__icon" style={{ background: "#34C75920" }}>✅</span>
          <span className="fit-card__title" style={{ color: "#34C759" }}>확장 적합</span>
        </div>
        <div className="fit-tags">
          {platform.goodFit.map((item, i) => (
            <span className="fit-tag fit-tag--good" key={i}>{item}</span>
          ))}
        </div>
      </div>

      <div className="fit-card">
        <div className="fit-card__header">
          <span className="fit-card__icon" style={{ background: "#FF3B3020" }}>⛔</span>
          <span className="fit-card__title" style={{ color: "#FF3B30" }}>확장 부적합</span>
        </div>
        <div className="fit-tags">
          {platform.badFit.map((item, i) => (
            <span className="fit-tag fit-tag--bad" key={i}>{item}</span>
          ))}
        </div>
      </div>

      <div className="checklist" style={{ background: `linear-gradient(135deg, ${platform.color}08, transparent)` }}>
        <div className="checklist__title">빠른 판단 체크리스트</div>
        {platform.criteria.slice(0, 3).map((c, i) => (
          <div className="checklist__item" key={i}>
            <span className="checklist__item-icon">{c.icon}</span>
            <span className="checklist__item-label">{c.label}</span>
            <span className="checklist__item-badge">필수</span>
          </div>
        ))}
        <div className="checklist__hint">⚡ 상위 3개 기준 중 2개 이상 해당 시 확장 권장</div>
      </div>
    </div>
  );
}

// --- Tab: Examples ---
function TabExamples({ platform }) {
  return (
    <div className="example-list animate-fade-up">
      {platform.realExamples.map((ex, i) => (
        <div className="example-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
          <div
            className="example-card__icon"
            style={{ background: `linear-gradient(135deg, ${platform.color}20, ${platform.color}08)` }}
          >
            {platform.icon}
          </div>
          <div>
            <div className="example-card__name">{ex.app}</div>
            <div className="example-card__reason">{ex.reason}</div>
          </div>
        </div>
      ))}

      <div className="strategy-hint">
        <div className="strategy-hint__title">💡 확장 전략 패턴</div>
        <div className="strategy-hint__text">
          성공적인 유니버셜 앱들의 공통점: iOS에서 검증된 핵심 가치를 유지하면서,
          각 플랫폼의 고유 인터랙션에 맞게 UX를 재설계합니다.
          단순 포팅이 아닌, 플랫폼 네이티브 경험을 제공해야 합니다.
        </div>
      </div>
    </div>
  );
}

// --- Platform Detail ---
function PlatformDetail({ platformKey }) {
  const [activeTab, setActiveTab] = useState("overview");
  const platform = PLATFORM_DATA[platformKey];

  // Reset tab when platform changes
  useEffect(() => {
    setActiveTab("overview");
  }, [platformKey]);

  const tabs = [
    { id: "overview", label: "확장 기준" },
    { id: "fit", label: "적합도 판단" },
    { id: "examples", label: "실제 사례" },
  ];

  return (
    <section className="detail-section">
      <KeyQuestion platform={platform} key={platformKey} />

      <div className="sub-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sub-tab ${activeTab === tab.id ? "sub-tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && <TabOverview platform={platform} key={platformKey + "-overview"} />}
      {activeTab === "fit" && <TabFit platform={platform} key={platformKey + "-fit"} />}
      {activeTab === "examples" && <TabExamples platform={platform} key={platformKey + "-examples"} />}
    </section>
  );
}

// --- Matrix ---
function ComparisonMatrix() {
  const getCellColor = (symbol, platformKey) => {
    if (symbol === "◉") return PLATFORM_DATA[platformKey].color;
    if (symbol === "●") return "#86868B";
    return "#D1D1D6";
  };

  return (
    <section className="matrix-section">
      <h2 className="section-label">플랫폼 비교 매트릭스</h2>
      <div className="matrix">
        <div className="matrix__header">
          <div className="matrix__header-label">요소</div>
          {PLATFORM_KEYS.map((k) => (
            <div key={k}>{PLATFORM_DATA[k].icon}</div>
          ))}
        </div>

        {DECISION_MATRIX.map((row, i) => (
          <div className="matrix__row" key={i}>
            <div className="matrix__factor">{row.factor}</div>
            {PLATFORM_KEYS.map((k) => (
              <div
                className="matrix__cell"
                key={k}
                style={{ color: getCellColor(row[k], k) }}
              >
                {row[k]}
              </div>
            ))}
          </div>
        ))}

        <div className="matrix__legend">
          <span>◉ 핵심</span>
          <span>● 보통</span>
          <span>◎ 낮음</span>
        </div>
      </div>
    </section>
  );
}

// --- Priority Framework ---
function PriorityFramework() {
  return (
    <section className="priority-section">
      <h2 className="section-label">Solo 개발자 확장 우선순위 프레임워크</h2>
      <div className="priority-card">
        <div className="priority-list">
          {PRIORITY_ITEMS.map((item, i) => (
            <div
              className="priority-item"
              key={i}
              style={{ borderLeftColor: item.color }}
            >
              <div
                className="priority-item__number"
                style={{ background: item.color }}
              >
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <div className="priority-item__title">{item.title}</div>
                <div className="priority-item__desc">{item.desc}</div>
              </div>
              <span
                className="priority-item__tag"
                style={{ color: item.color, background: item.color + "20" }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="priority-footer">
          <strong>💡 솔로 개발자 원칙:</strong> 각 플랫폼에서 "80% 가치를 20% 노력으로"
          달성할 수 있는 핵심 기능만 먼저 출시하고, 사용자 피드백을 기반으로
          점진적으로 확장하세요.
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="footer">
      Apple Platform Expansion Guide · Built for iOS developers
    </footer>
  );
}
