// ============================================
// React Components — Chapter-based Architecture
// ============================================

const { useState, useEffect, useRef } = React;

// --- Header ---
function Header() {
  return (
    <header className="header">
      <div className="header__label">Apple Platform Expansion</div>
      <h1 className="header__title">유니버셜 앱 확장 전략</h1>
      <p className="header__subtitle">근간 플랫폼을 선택하고, 확장 전략을 탐색하세요</p>
    </header>
  );
}

// --- Platform Selector (All 6) ---
function PlatformSelector({ selected, onSelect }) {
  const allPlatforms = BASE_PLATFORMS.map((key) => {
    if (key === "iOS") return { key, ...IOS_PLATFORM_DATA };
    const p = PLATFORM_DATA[key];
    return { key, icon: p.icon, color: p.color, colorLight: p.colorLight, title: p.title, subtitle: p.subtitle };
  });

  return (
    <section className="platform-section">
      <h2 className="section-label">근간 플랫폼 선택</h2>
      <div className="platform-tabs">
        {allPlatforms.map((p) => {
          const isActive = selected === p.key;
          return (
            <button
              key={p.key}
              className={`platform-tab ${isActive ? "platform-tab--active" : ""}`}
              onClick={() => onSelect(p.key)}
              style={{
                borderColor: isActive ? p.color : "transparent",
                background: isActive ? p.colorLight : "#fff",
              }}
            >
              <span className="platform-tab__icon">{p.icon}</span>
              <div>
                <div className="platform-tab__title" style={{ color: isActive ? p.color : "#1D1D1F" }}>
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

// --- Chapter Navigation ---
function ChapterNav({ chapters, activeChapter, onSelect, color }) {
  return (
    <div className="chapter-nav">
      {chapters.map((ch) => (
        <button
          key={ch.id}
          className={`chapter-nav__item ${activeChapter === ch.id ? "chapter-nav__item--active" : ""}`}
          onClick={() => onSelect(ch.id)}
          style={activeChapter === ch.id ? { color: color, borderBottomColor: color } : {}}
        >
          <span className="chapter-nav__icon">{ch.icon}</span>
          <span className="chapter-nav__label">{ch.label}</span>
        </button>
      ))}
    </div>
  );
}

// --- Platform Overview Chapter ---
function ChapterOverview({ platformKey }) {
  const expansion = EXPANSION_MAP[platformKey];

  if (platformKey === "iOS") {
    return (
      <div className="chapter-content animate-fade-up">
        <div className="overview-hero" style={{ background: `linear-gradient(135deg, ${expansion.color}11, ${expansion.color}06)`, borderColor: `${expansion.color}22` }}>
          <div className="overview-hero__icon">{expansion.icon}</div>
          <div className="overview-hero__title">{platformKey}</div>
          <div className="overview-hero__desc">{expansion.desc}</div>
        </div>

        <div className="overview-info-grid">
          <div className="overview-info-card">
            <div className="overview-info-card__label">핵심 특성</div>
            <div className="overview-info-card__value">터치 중심 UX</div>
          </div>
          <div className="overview-info-card">
            <div className="overview-info-card__label">사용자 기반</div>
            <div className="overview-info-card__value">가장 큰 시장</div>
          </div>
          <div className="overview-info-card">
            <div className="overview-info-card__label">개발 방식</div>
            <div className="overview-info-card__value">SwiftUI / UIKit</div>
          </div>
          <div className="overview-info-card">
            <div className="overview-info-card__label">확장 가능</div>
            <div className="overview-info-card__value">5개 플랫폼</div>
          </div>
        </div>

        <div className="decision-flow-inline">
          <div className="section-label" style={{ marginBottom: 14 }}>의사결정 플로우</div>
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
        </div>
      </div>
    );
  }

  const platform = PLATFORM_DATA[platformKey];
  return (
    <div className="chapter-content animate-fade-up">
      <div className="overview-hero" style={{ background: `linear-gradient(135deg, ${platform.color}11, ${platform.color}06)`, borderColor: `${platform.color}22` }}>
        <div className="overview-hero__icon">{platform.icon}</div>
        <div className="overview-hero__title">{platform.title}</div>
        <div className="overview-hero__desc">{expansion.desc}</div>
      </div>

      <div className="key-question" style={{ background: `linear-gradient(135deg, ${platform.color}11, ${platform.color}08)`, border: `1px solid ${platform.color}22` }}>
        <div className="key-question__label" style={{ color: platform.color }}>핵심 판단 질문</div>
        <div className="key-question__text">"{platform.decisionQuestion}"</div>
        <div className="key-question__meta">
          <span className="badge" style={{ background: platform.difficultyColor + "20", color: platform.difficultyColor }}>
            난이도: {platform.difficulty}
          </span>
          <span className="meta-info">⏰ {platform.timeline}</span>
          <span className="meta-info">🛠️ {platform.method}</span>
        </div>
      </div>

      <div className="overview-info-grid">
        <div className="overview-info-card">
          <div className="overview-info-card__label">핵심 특성</div>
          <div className="overview-info-card__value">{platform.subtitle}</div>
        </div>
        <div className="overview-info-card">
          <div className="overview-info-card__label">개발 방식</div>
          <div className="overview-info-card__value">{platform.method}</div>
        </div>
        <div className="overview-info-card">
          <div className="overview-info-card__label">예상 기간</div>
          <div className="overview-info-card__value">{platform.timeline}</div>
        </div>
        <div className="overview-info-card">
          <div className="overview-info-card__label">확장 난이도</div>
          <div className="overview-info-card__value" style={{ color: platform.difficultyColor }}>{platform.difficulty}</div>
        </div>
      </div>
    </div>
  );
}

// --- Criteria Chapter (non-iOS only) ---
function ChapterCriteria({ platformKey }) {
  const platform = PLATFORM_DATA[platformKey];
  if (!platform) return null;

  return (
    <div className="chapter-content animate-fade-up">
      <div className="chapter-section-title">이 플랫폼으로 확장할 때 평가 기준</div>
      <div className="criteria-list">
        {platform.criteria.map((c, i) => (
          <div className="criteria-card animate-slide-in" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="criteria-card__header">
              <div className="criteria-card__label-group">
                <span className="criteria-card__icon">{c.icon}</span>
                <span className="criteria-card__name">{c.label}</span>
              </div>
              <span className="criteria-card__weight" style={{ color: platform.color, background: platform.colorLight }}>
                {c.weight}%
              </span>
            </div>
            <div className="criteria-card__desc">{c.desc}</div>
            <div className="criteria-card__bar-track">
              <div
                className="criteria-card__bar-fill"
                style={{ width: c.weight + "%", background: `linear-gradient(90deg, ${platform.color}, ${platform.color}AA)`, animationDelay: `${i * 0.08}s` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="fit-section">
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
        </div>
      </div>

      <div className="checklist" style={{ background: `linear-gradient(135deg, ${platform.color}08, transparent)`, marginTop: 14 }}>
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

// --- Expansion Directions Chapter ---
function ChapterExpansion({ platformKey }) {
  const [openTarget, setOpenTarget] = useState(null);
  const base = EXPANSION_MAP[platformKey];
  const targetKeys = Object.keys(base.expansions);

  useEffect(() => { setOpenTarget(null); }, [platformKey]);

  const difficultyColor = (d) => {
    if (d === "낮음") return "#34C759";
    if (d === "중간") return "#FF9500";
    return "#FF3B30";
  };

  const effortDots = (n) => {
    const filled = Math.round(n / 2);
    return Array.from({ length: 5 }, (_, i) => i < filled ? "●" : "○").join("");
  };

  return (
    <div className="chapter-content animate-fade-up">
      <div className="chapter-section-title">{platformKey}에서 다른 플랫폼으로 확장</div>
      <p className="chapter-section-desc">{base.desc}</p>

      <div className="expansion-targets">
        {targetKeys.map((targetKey, i) => {
          const exp = base.expansions[targetKey];
          const target = EXPANSION_MAP[targetKey];
          const isOpen = openTarget === targetKey;
          return (
            <div key={targetKey} className="expansion-target animate-slide-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <button
                className={`expansion-target__header ${isOpen ? "expansion-target__header--active" : ""}`}
                onClick={() => setOpenTarget(isOpen ? null : targetKey)}
                style={{ borderLeftColor: target.color }}
              >
                <div className="expansion-target__left">
                  <span className="expansion-target__icons">
                    {base.icon} <span className="expansion-target__arrow-icon">→</span> {target.icon}
                  </span>
                  <div>
                    <div className="expansion-target__title">{targetKey} 확장</div>
                    <div className="expansion-target__approach">{exp.approach}</div>
                  </div>
                </div>
                <div className="expansion-target__right">
                  <span className="badge" style={{ background: difficultyColor(exp.difficulty) + "20", color: difficultyColor(exp.difficulty) }}>
                    {exp.difficulty}
                  </span>
                  <span className="expansion-target__chevron">{isOpen ? "▾" : "▸"}</span>
                </div>
              </button>
              {isOpen && (
                <div className="expansion-detail animate-fade-up">
                  <div className="expansion-detail__changes">
                    <div className="expansion-detail__subtitle">핵심 변환 포인트</div>
                    {exp.keyChanges.map((change, j) => (
                      <div className="expansion-detail__change" key={j}>
                        <span className="expansion-detail__change-bullet" style={{ background: target.color }} />
                        <span>{change}</span>
                      </div>
                    ))}
                  </div>
                  <div className="expansion-detail__consideration">
                    <div className="expansion-detail__subtitle">고려사항</div>
                    <p>{exp.considerations}</p>
                  </div>
                  <div className="expansion-detail__meta">
                    <div className="expansion-detail__effort">
                      <span className="expansion-detail__effort-label">개발 노력도</span>
                      <span className="expansion-detail__effort-dots" style={{ color: target.color }}>{effortDots(exp.effort)}</span>
                      <span className="expansion-detail__effort-num">{exp.effort}/10</span>
                    </div>
                  </div>
                  <div className="expansion-detail__example" style={{ background: `${target.color}08`, borderColor: `${target.color}15` }}>
                    <div className="expansion-detail__subtitle">실제 사례</div>
                    <p>{exp.example}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Examples Chapter (non-iOS) ---
function ChapterExamples({ platformKey }) {
  const platform = PLATFORM_DATA[platformKey];
  if (!platform) return null;

  return (
    <div className="chapter-content animate-fade-up">
      <div className="chapter-section-title">{platformKey} 확장 성공 사례</div>
      <div className="example-list">
        {platform.realExamples.map((ex, i) => (
          <div className="example-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="example-card__icon" style={{ background: `linear-gradient(135deg, ${platform.color}20, ${platform.color}08)` }}>
              {platform.icon}
            </div>
            <div>
              <div className="example-card__name">{ex.app}</div>
              <div className="example-card__reason">{ex.reason}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="strategy-hint">
        <div className="strategy-hint__title">💡 확장 전략 패턴</div>
        <div className="strategy-hint__text">
          성공적인 유니버셜 앱들의 공통점: 근간 플랫폼에서 검증된 핵심 가치를 유지하면서,
          각 플랫폼의 고유 인터랙션에 맞게 UX를 재설계합니다.
          단순 포팅이 아닌, 플랫폼 네이티브 경험을 제공해야 합니다.
        </div>
      </div>
    </div>
  );
}

// --- Comparison Chapter ---
function ChapterComparison() {
  const getCellColor = (symbol, platformKey) => {
    if (symbol === "◉") return PLATFORM_DATA[platformKey].color;
    if (symbol === "●") return "#86868B";
    return "#D1D1D6";
  };

  return (
    <div className="chapter-content animate-fade-up">
      <div className="chapter-section-title">플랫폼 비교 매트릭스</div>
      <p className="chapter-section-desc">각 요소별로 플랫폼의 중요도를 한눈에 비교합니다.</p>
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
              <div className="matrix__cell" key={k} style={{ color: getCellColor(row[k], k) }}>
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
    </div>
  );
}

// --- Priority Chapter ---
function ChapterPriority() {
  return (
    <div className="chapter-content animate-fade-up">
      <div className="chapter-section-title">Solo 개발자 확장 우선순위</div>
      <p className="chapter-section-desc">iOS 기반 앱의 권장 확장 순서입니다.</p>
      <div className="priority-card">
        <div className="priority-list">
          {PRIORITY_ITEMS.map((item, i) => (
            <div className="priority-item" key={i} style={{ borderLeftColor: item.color }}>
              <div className="priority-item__number" style={{ background: item.color }}>{item.step}</div>
              <div style={{ flex: 1 }}>
                <div className="priority-item__title">{item.title}</div>
                <div className="priority-item__desc">{item.desc}</div>
              </div>
              <span className="priority-item__tag" style={{ color: item.color, background: item.color + "20" }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="priority-footer">
          <strong>💡 솔로 개발자 원칙:</strong> 각 플랫폼에서 "80% 가치를 20% 노력으로"
          달성할 수 있는 핵심 기능만 먼저 출시하고, 사용자 피드백을 기반으로 점진적으로 확장하세요.
        </div>
      </div>
    </div>
  );
}

// --- Main Platform Page ---
function PlatformPage({ platformKey }) {
  const [activeChapter, setActiveChapter] = useState("overview");
  const isIOS = platformKey === "iOS";
  const color = isIOS ? IOS_PLATFORM_DATA.color : PLATFORM_DATA[platformKey].color;

  const chapters = isIOS
    ? [
        { id: "overview", label: "개요", icon: "📋" },
        { id: "expansion", label: "확장 방향", icon: "🧭" },
        { id: "comparison", label: "비교 매트릭스", icon: "📊" },
        { id: "priority", label: "우선순위", icon: "🎯" },
      ]
    : [
        { id: "overview", label: "개요", icon: "📋" },
        { id: "criteria", label: "확장 기준", icon: "📏" },
        { id: "expansion", label: "확장 방향", icon: "🧭" },
        { id: "examples", label: "실제 사례", icon: "💡" },
      ];

  useEffect(() => {
    setActiveChapter("overview");
  }, [platformKey]);

  return (
    <section className="page-section">
      <ChapterNav chapters={chapters} activeChapter={activeChapter} onSelect={setActiveChapter} color={color} />
      <div className="page-content">
        {activeChapter === "overview" && <ChapterOverview platformKey={platformKey} key={platformKey + "-overview"} />}
        {activeChapter === "criteria" && <ChapterCriteria platformKey={platformKey} key={platformKey + "-criteria"} />}
        {activeChapter === "expansion" && <ChapterExpansion platformKey={platformKey} key={platformKey + "-expansion"} />}
        {activeChapter === "examples" && <ChapterExamples platformKey={platformKey} key={platformKey + "-examples"} />}
        {activeChapter === "comparison" && <ChapterComparison key="comparison" />}
        {activeChapter === "priority" && <ChapterPriority key="priority" />}
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
