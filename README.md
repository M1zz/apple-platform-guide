# 🍎 Apple 유니버셜 앱 확장 전략

iOS 앱을 Apple 생태계 전체(macOS, iPadOS, watchOS, tvOS, visionOS)로 확장할 때의 **의사결정 프레임워크**를 시각화한 인터랙티브 가이드입니다.

## 📋 포함 내용

- **의사결정 플로우** — 5단계 확장 판단 프로세스
- **플랫폼별 확장 기준** — 가중치 기반 판단 기준 5개씩
- **적합도 판단** — 확장 적합/부적합 앱 유형 분류
- **실제 사례** — Notion, Things 3, GoodNotes 등 실제 앱의 확장 이유
- **비교 매트릭스** — 6개 요소로 5개 플랫폼 한눈에 비교
- **Solo 개발자 우선순위** — 최소 투자로 최대 효과 확장 로드맵

## 🚀 GitHub Pages 배포

1. 이 저장소를 GitHub에 push
2. Settings → Pages → Source를 `main` 브랜치의 `/ (root)` 로 설정
3. 배포 완료!

```bash
git init
git add .
git commit -m "Initial commit: Apple Platform Expansion Guide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apple-platform-guide.git
git push -u origin main
```

## 📁 디렉토리 구조

```
apple-platform-guide/
├── index.html          # 메인 HTML
├── css/
│   └── style.css       # 스타일시트
├── js/
│   ├── data.js         # 플랫폼 데이터 & 상수
│   ├── components.js   # React 컴포넌트
│   └── app.js          # 앱 엔트리포인트
└── README.md
```

## 🛠 기술 스택

- **React 18** (CDN)
- **Babel Standalone** (JSX 트랜스파일)
- **Vanilla CSS** (빌드 도구 불필요)
- 별도 빌드/번들링 없이 **정적 파일로 바로 동작**

## 📄 License

MIT
