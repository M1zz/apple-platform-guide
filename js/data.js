// ============================================
// Platform Data & Constants
// ============================================

const PLATFORM_DATA = {
  macOS: {
    icon: "🖥️",
    color: "#0071E3",
    colorLight: "#E8F2FE",
    title: "macOS",
    subtitle: "데스크톱 확장",
    difficulty: "낮음",
    difficultyColor: "#34C759",
    method: "Mac Catalyst / iPad 앱 네이티브 포팅",
    timeline: "2~6주",
    criteria: [
      { label: "장시간 작업 필요", desc: "문서 편집, 코딩, 디자인 등 30분 이상 집중 작업", weight: 95, icon: "⏱️" },
      { label: "키보드/마우스 우선 UX", desc: "단축키, 우클릭 메뉴, 드래그 앤 드롭이 핵심 인터랙션", weight: 90, icon: "⌨️" },
      { label: "대화면 정보 밀도", desc: "멀티 패널, 사이드바, 동시에 많은 정보 표시 필요", weight: 85, icon: "📐" },
      { label: "파일 시스템 접근", desc: "로컬 파일 읽기/쓰기, 폴더 관리, 외부 앱 연동", weight: 80, icon: "📁" },
      { label: "백그라운드 상시 실행", desc: "메뉴바 앱, 알림 모니터링, 자동화 작업", weight: 75, icon: "🔄" },
    ],
    goodFit: ["생산성 도구 (노트, 할일, 캘린더)", "클립보드 매니저", "개발자 도구", "미디어 편집", "파일 관리"],
    badFit: ["피트니스/건강 트래커", "카메라 중심 앱", "위치 기반 서비스"],
    realExamples: [
      { app: "Notion", reason: "장시간 문서 작업 → 데스크톱 필수" },
      { app: "Things 3", reason: "키보드 단축키로 빠른 할일 관리" },
      { app: "Fantastical", reason: "넓은 화면에서 캘린더 전체 뷰" },
    ],
    decisionQuestion: "사용자가 이 앱을 30분 이상 연속 사용하는가?",
  },
  watchOS: {
    icon: "⌚",
    color: "#FF375F",
    colorLight: "#FFF0F3",
    title: "watchOS",
    subtitle: "손목 위의 확장",
    difficulty: "중간",
    difficultyColor: "#FF9500",
    method: "watchOS 독립 앱 / Companion 앱",
    timeline: "3~8주",
    criteria: [
      { label: "5초 이내 글랜스 정보", desc: "빠르게 확인하고 끝나는 핵심 정보 (시간, 날씨, 수치)", weight: 95, icon: "👀" },
      { label: "신체 센서 데이터 활용", desc: "심박수, 걸음 수, 운동량 등 HealthKit 연동", weight: 90, icon: "💓" },
      { label: "즉각적 알림/반응", desc: "진동 알림 후 1탭으로 완료되는 액션", weight: 85, icon: "🔔" },
      { label: "컴플리케이션 가치", desc: "워치페이스에 상시 표시할 의미있는 데이터 존재", weight: 80, icon: "⭕" },
      { label: "iPhone 없이 독립 사용", desc: "운동, 외출 시 iPhone 없이도 핵심 기능 사용 가능", weight: 70, icon: "📱" },
    ],
    goodFit: ["건강/피트니스 트래커", "타이머/알림 앱", "간단한 리모컨", "날씨/교통 정보", "투두 체크리스트"],
    badFit: ["콘텐츠 소비 앱", "복잡한 입력이 필요한 앱", "미디어 편집"],
    realExamples: [
      { app: "AutoSleep", reason: "수면 추적 → 손목 센서 필수" },
      { app: "Streaks", reason: "습관 체크 → 1탭 완료" },
      { app: "Citymapper", reason: "다음 정류장 글랜스 정보" },
    ],
    decisionQuestion: "사용자가 5초 이내에 얻을 수 있는 핵심 정보가 있는가?",
  },
  iPadOS: {
    icon: "📱",
    color: "#5856D6",
    colorLight: "#F3F2FE",
    title: "iPadOS",
    subtitle: "태블릿 최적화",
    difficulty: "낮음",
    difficultyColor: "#34C759",
    method: "Adaptive Layout / 멀티태스킹 지원",
    timeline: "1~4주",
    criteria: [
      { label: "멀티태스킹 시너지", desc: "Split View, Slide Over에서 다른 앱과 함께 사용하는 가치", weight: 95, icon: "🪟" },
      { label: "Apple Pencil 활용", desc: "필기, 드로잉, 정밀 선택 등 펜 입력이 가치를 더함", weight: 85, icon: "✏️" },
      { label: "넓은 캔버스 활용", desc: "큰 화면에서 더 많은 콘텐츠/도구를 동시에 표시", weight: 90, icon: "🖼️" },
      { label: "Stage Manager 대응", desc: "자유 크기 윈도우에서도 레이아웃이 잘 동작", weight: 75, icon: "🎭" },
      { label: "외장 키보드 최적화", desc: "Magic Keyboard 연결 시 단축키 및 트랙패드 지원", weight: 80, icon: "⌨️" },
    ],
    goodFit: ["노트/드로잉 앱", "문서 편집기", "미디어 뷰어", "교육/학습 앱", "프레젠테이션 도구"],
    badFit: ["전화 전용 기능", "소형 위젯 앱", "워치 컴패니언 앱"],
    realExamples: [
      { app: "GoodNotes", reason: "Pencil 필기 → iPad 핵심 경험" },
      { app: "LumaFusion", reason: "넓은 타임라인 → 영상 편집 최적" },
      { app: "Procreate", reason: "대형 캔버스 + Pencil 정밀 입력" },
    ],
    decisionQuestion: "큰 화면과 Pencil이 앱 경험을 본질적으로 향상시키는가?",
  },
  tvOS: {
    icon: "📺",
    color: "#64D2FF",
    colorLight: "#F0FBFF",
    title: "tvOS",
    subtitle: "거실 확장",
    difficulty: "중간",
    difficultyColor: "#FF9500",
    method: "tvOS 전용 앱 / AirPlay 지원",
    timeline: "4~10주",
    criteria: [
      { label: "린백 콘텐츠 소비", desc: "소파에 앉아 편하게 감상하는 영상/음악/사진 콘텐츠", weight: 95, icon: "🛋️" },
      { label: "공유 화면 가치", desc: "가족/친구와 함께 큰 화면으로 보는 것이 의미있음", weight: 90, icon: "👨‍👩‍👧‍👦" },
      { label: "시리 리모트 UX", desc: "스와이프, 클릭 중심의 단순 인터랙션으로 충분", weight: 85, icon: "🎮" },
      { label: "대형 디스플레이 임팩트", desc: "55인치+ 화면에서 콘텐츠가 극적으로 향상됨", weight: 80, icon: "🖥️" },
      { label: "iPhone 리모컨 시너지", desc: "iPhone을 세컨드 스크린/컨트롤러로 활용", weight: 70, icon: "📱" },
    ],
    goodFit: ["스트리밍/미디어 앱", "피트니스 (홈트)", "사진 슬라이드쇼", "게임", "교육 영상"],
    badFit: ["텍스트 입력 중심 앱", "위치 기반 앱", "개인 정보 민감 앱"],
    realExamples: [
      { app: "Fitness+", reason: "거실 운동 → 대형 화면 필수" },
      { app: "Infuse", reason: "미디어 라이브러리 → TV 최적" },
      { app: "Alto's Odyssey", reason: "캐주얼 게임 → 대형 화면 몰입" },
    ],
    decisionQuestion: "콘텐츠가 대형 공유 화면에서 더 가치있어지는가?",
  },
  visionOS: {
    icon: "🥽",
    color: "#AC8E68",
    colorLight: "#FAF6F0",
    title: "visionOS",
    subtitle: "공간 컴퓨팅 확장",
    difficulty: "높음",
    difficultyColor: "#FF3B30",
    method: "visionOS 네이티브 / Compatible iPad 앱",
    timeline: "6~16주",
    criteria: [
      { label: "3D 공간 활용 가치", desc: "콘텐츠가 3D 공간에 배치될 때 새로운 경험 제공", weight: 95, icon: "🌐" },
      { label: "몰입형 콘텐츠", desc: "180°/360° 영상, 공간 오디오, 몰입 환경 활용", weight: 90, icon: "🎬" },
      { label: "무한 캔버스 필요", desc: "여러 윈도우를 공간에 자유롭게 배치하는 워크플로우", weight: 85, icon: "♾️" },
      { label: "시선/제스처 자연 UX", desc: "눈과 손으로 조작하는 것이 자연스러운 인터랙션", weight: 80, icon: "👁️" },
      { label: "개인 극장 경험", desc: "대형 가상 스크린에서의 미디어/작업 경험", weight: 75, icon: "🎭" },
    ],
    goodFit: ["3D 모델 뷰어", "몰입형 미디어", "디자인/건축 도구", "교육/시뮬레이션", "명상/웰빙"],
    badFit: ["빠른 유틸리티 앱", "센서 의존 앱", "대중 시장 앱 (아직)"],
    realExamples: [
      { app: "JigSpace", reason: "3D 모델 → 공간에서 실물 크기 확인" },
      { app: "Mindfulness", reason: "몰입 환경 → 명상 경험 극대화" },
      { app: "Freeform", reason: "무한 캔버스 → 공간에 보드 배치" },
    ],
    decisionQuestion: "앱 경험이 3D 공간 배치로 본질적으로 달라지는가?",
  },
};

const FLOW_STEPS = [
  { id: 1, title: "iOS 앱 핵심 가치 정의", desc: "앱의 Core Value Proposition이 무엇인가?", icon: "🎯" },
  { id: 2, title: "사용 맥락 분석", desc: "사용자가 언제, 어디서, 얼마나 사용하는가?", icon: "🔍" },
  { id: 3, title: "플랫폼 시너지 평가", desc: "해당 플랫폼의 고유 기능이 앱 가치를 높이는가?", icon: "⚡" },
  { id: 4, title: "투자 대비 효과 판단", desc: "개발/유지보수 비용 대비 사용자 가치가 충분한가?", icon: "💰" },
  { id: 5, title: "확장 실행", desc: "점진적 확장: 핵심 기능 먼저 → 플랫폼 고유 기능 추가", icon: "🚀" },
];

const DECISION_MATRIX = [
  { factor: "사용 시간", macOS: "◉", watchOS: "◎", iPadOS: "◉", tvOS: "●", visionOS: "●" },
  { factor: "입력 복잡도", macOS: "◉", watchOS: "◎", iPadOS: "●", tvOS: "◎", visionOS: "●" },
  { factor: "화면 크기 의존", macOS: "●", watchOS: "◎", iPadOS: "◉", tvOS: "◉", visionOS: "◉" },
  { factor: "센서 활용", macOS: "◎", watchOS: "◉", iPadOS: "●", tvOS: "◎", visionOS: "●" },
  { factor: "공유 사용", macOS: "◎", watchOS: "◎", iPadOS: "●", tvOS: "◉", visionOS: "◎" },
  { factor: "이동 중 사용", macOS: "◎", watchOS: "◉", iPadOS: "●", tvOS: "◎", visionOS: "◎" },
];

const PRIORITY_ITEMS = [
  { step: "1", title: "iPadOS 최적화", desc: "Adaptive Layout만으로 큰 효과, 최소 투자", color: "#34C759", tag: "Quick Win" },
  { step: "2", title: "macOS (Catalyst)", desc: "iOS 코드 재사용 극대화, 프로 사용자 확보", color: "#0071E3", tag: "High ROI" },
  { step: "3", title: "watchOS 컴패니언", desc: "핵심 글랜스 기능만 구현, 앱 생태계 완성", color: "#FF375F", tag: "Ecosystem" },
  { step: "4", title: "tvOS / visionOS", desc: "콘텐츠 중심 앱만 선별적 확장", color: "#AC8E68", tag: "Strategic" },
];

const PLATFORM_KEYS = ["macOS", "watchOS", "iPadOS", "tvOS", "visionOS"];
