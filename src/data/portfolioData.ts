/**
 * @file portfolioData.ts
 * @description 個人作品集核心資料庫，已預留清晰中文註解與占位欄位，
 * 您可以隨時在此處置換真實個人資料、專案細節與社群連結。
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'cloud' | 'all';
  categoryLabel: string;
  impact: string; // 核心成果與具體指標
  description: string;
  architectureHighlights: string[]; // 架構亮點
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    focus: string; // 核心應用領域或關鍵字
    highlight?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  // ==========================================
  // 1. 個人基本資訊與定位（可替換）
  // ==========================================
  personal: {
    name: '林詠晟',
    englishName: 'Sam',
    avatarText: 'SL',
    headline: 'Full-Stack Developer & AI Systems Engineer',
    valueProposition: '專注於高可用後端架構、跨平台應用與生產級 AI Agent 系統整合。',
    shortBio: '擁有 6+ 年現代 Web 全端與分散式系統開發經驗，堅持「不以工具複雜度為榮，而以架構簡潔、穩定度與高業務產出為準則」的工程哲學。',
    status: '開放全新技術挑戰與專案顧問合作',
    isAvailableForHire: true,
    location: 'Taipei, Taiwan (UTC+8)',
    email: 'ytpm66666@gmail.com', // 預設信箱，可隨時替換
    socials: {
      github: 'https://github.com/sam-lin',
      linkedin: 'https://linkedin.com/in/sam-lin-dev',
      x: 'https://x.com/sam_dev',
      email: 'mailto:ytpm66666@gmail.com',
    },
    // 關鍵硬指標展示（真實工程指標，避免虛浮打分）
    stats: [
      { label: '軟體開發實務經驗', value: '6+ 年' },
      { label: '核心服務可用性維護', value: '99.95%' },
      { label: '分散式月請求峰值處理', value: '10M+' },
      { label: '端到端產品交付專案', value: '20+ 個' },
    ],
  },

  // ==========================================
  // 2. 關於我（經歷、工程哲學與實務原則）
  // ==========================================
  about: {
    paragraphs: [
      '我是林詠晟（Sam），一名深耕全端技術與 AI 系統架構的軟體工程師。我的工作核心在於銜接現代化敏捷前端體驗與底層高可用分散式架構，並將最前沿的生成式 AI / LLM 技術轉化為具有穩定容錯機制的生產級應用。',
      '在工程實踐中，我主張「強型別導向（Type-Driven Development）」與「可觀測性優先（Observability-First）」。面對龐大流量與高併發場景，我不盲目堆疊框架，而是深入剖析 I/O 瓶頸、快取策略與非同步工作流程，為企業打造具備百萬級擴展性的系統。',
      '近兩年我著重於 AI Agent 運作拓撲、Function Calling 流程編排與混合向量檢索（Hybrid RAG）。我相信未來的卓越應用，必然建立在穩固的資料流管線、嚴格的權限安全邊界與極致的直覺互動之上。',
    ],
    principles: [
      {
        title: '簡潔至上 (Radical Simplicity)',
        description: '可讀性高且容易維護的程式碼，永遠勝過晦澀的過度設計。架構越清晰，邊界情況與潛在漏洞越少。',
        tag: 'Clean Architecture',
      },
      {
        title: '韌性與擴展性 (Resilient Scale)',
        description: '假設任何網路請求都可能逾時、任何節點都可能故障。透過冪等性設計、熔斷重試與分散式快取確保極致高可用。',
        tag: 'Fault-Tolerant',
      },
      {
        title: '生產級 AI 落地 (Deterministic AI)',
        description: '拒絕玩具級 Demo。利用嚴格 JSON Schema 約束、狀態快照、動態 Eval 測試確保 LLM 產出具備確定性與可稽核性。',
        tag: 'Agentic Systems',
      },
    ],
  },

  // ==========================================
  // 3. 精選專案（3~4 個高品質案例）
  // ==========================================
  projects: [
    {
      id: 'omniflow-agent',
      title: 'OmniFlow Agentic Platform',
      subtitle: '分散式多智能體非同步工作流排程引擎',
      category: 'ai',
      categoryLabel: 'AI Systems',
      impact: '支撐 100K+ 併發工作流，透過動態拓撲排序與狀態快照將 Token 消耗降低 38%，失敗自動重試成功率達 99.2%',
      description: '為複雜業務流程設計的視覺化與程式化 AI Agent 執行平台。支援基於 DAG 的多模型自主決策、工具調用審批流與即時 WebSocket 執行進度串流。',
      architectureHighlights: [
        '使用 Redis Streams 與 BullMQ 構建去中心化分散式任務對列，支援子任務分枝與狀態持久化',
        '自研 Token Budget 分配演算法，在長上下文推理情境下自動裁剪歷史上下文與快取重複 Embeddings',
        '採用 WebSocket 提供即時節點執行狀態心跳監控，前端渲染延遲低於 16ms',
      ],
      techStack: ['TypeScript', 'Next.js 15', 'Node.js', 'Redis Streams', 'PostgreSQL', 'Gemini API', 'Docker'],
      liveUrl: 'https://github.com/bowen-chen/omniflow-platform',
      githubUrl: 'https://github.com/bowen-chen/omniflow-platform',
      featured: true,
      year: '2026',
      metrics: [
        { label: 'Token 成本節省', value: '-38%' },
        { label: '任務自動恢復率', value: '99.2%' },
        { label: '並發排程容量', value: '100K+' },
      ],
    },
    {
      id: 'pulsemetrics-engine',
      title: 'PulseMetrics Real-Time APM',
      subtitle: '分散式高併發即時可觀測性與日誌分析平台',
      category: 'cloud',
      categoryLabel: 'Cloud & Infrastructure',
      impact: '支撐每秒 50,000+ 筆事件遙測日誌攝取，PB 級查詢延遲由 2.4s 壓制至 180ms，整合自動異常根因分析',
      description: '專為微服務架構打造的輕量化遙測監控面板。提供分散式鏈路追蹤（Distributed Tracing）、端點延遲熱圖與基於統計學模型的即時告警系統。',
      architectureHighlights: [
        '使用 Go 撰寫高吞吐日誌攝取代理，內存佔用比傳統 Agent 降低 65%',
        '以 ClickHouse 列式資料庫為核心，建立分區索引與物化視圖，加速多維度時序聚合查詢',
        '前端採用 Canvas 與 WebGL 加速繪製萬級資料點即時水流圖，確保 60 FPS 流暢渲染',
      ],
      techStack: ['React 19', 'Go', 'ClickHouse', 'Apache Kafka', 'Tailwind CSS', 'OpenTelemetry', 'gRPC'],
      liveUrl: 'https://github.com/bowen-chen/pulsemetrics-apm',
      githubUrl: 'https://github.com/bowen-chen/pulsemetrics-apm',
      featured: true,
      year: '2025',
      metrics: [
        { label: '日誌攝取吞吐量', value: '50K/sec' },
        { label: '聚合查詢延遲', value: '180ms' },
        { label: '記憶體消耗優化', value: '-65%' },
      ],
    },
    {
      id: 'nexus-cloud-ide',
      title: 'Nexus Cloud Collaboration Hub',
      subtitle: '基於 CRDT 演算法的零衝突多人即時協同工作區',
      category: 'fullstack',
      categoryLabel: 'Full-Stack',
      impact: '承載 25,000+ 開發者跨國零衝突協作，端點到端點同步延遲 < 45ms，上線至今維持 99.98% 可用性',
      description: '整合虛擬終端、分散式檔案同步與多人游標協同的網頁端雲原生 IDE。透過 WebAssembly 沙盒直接在瀏覽器執行本機代碼解析與語法樹構建。',
      architectureHighlights: [
        '基於 Yjs CRDT（無衝突複製資料類型）設計協同網路，在斷網重連時保證無損狀態收斂',
        '透過 WebRTC 建立點對點即時資料頻道，降低中央伺服器頻寬開銷達 75%',
        '整合虛擬檔案系統（OPFS）實現極速本地快取與秒級專案載入',
      ],
      techStack: ['React 19', 'TypeScript', 'WebAssembly', 'WebRTC', 'Yjs', 'Tailwind CSS', 'FastAPI'],
      liveUrl: 'https://github.com/bowen-chen/nexus-cloud-ide',
      githubUrl: 'https://github.com/bowen-chen/nexus-cloud-ide',
      featured: true,
      year: '2025',
      metrics: [
        { label: '跨國協作延遲', value: '<45ms' },
        { label: '活躍開發者', value: '25K+' },
        { label: '伺服器頻寬節約', value: '75%' },
      ],
    },
    {
      id: 'veritas-hybrid-rag',
      title: 'Veritas Enterprise Multimodal RAG',
      subtitle: '企業級高精準度混合向量檢索與知識庫系統',
      category: 'ai',
      categoryLabel: 'AI Systems',
      impact: '將專業領域問答幻覺率由 14.2% 降至 1.8%，多表關聯與複雜法規文檔檢索召回率高達 94.6%',
      description: '針對金融與醫療領域文檔設計的精準檢索增強生成架構。結合密集向量（Dense Vector）與稀疏語義（BM25），並引入動態交叉重排序模型（Cross-Encoder Reranker）。',
      architectureHighlights: [
        '自研階梯式文字切塊（Recursive Semantic Chunking），完整保留結構化表格與階層關係',
        '基於 PostgreSQL + pgvector 建立 HNSW 索引，支援多租戶行級資料安全隔離（RLS）',
        '實作端到端 Grounding 引用標注，精確指向原文出處段落與原始頁碼',
      ],
      techStack: ['Python', 'FastAPI', 'PostgreSQL (pgvector)', 'React', 'Tailwind CSS', 'Gemini Pro', 'Docker'],
      liveUrl: 'https://github.com/bowen-chen/veritas-rag',
      githubUrl: 'https://github.com/bowen-chen/veritas-rag',
      featured: true,
      year: '2024',
      metrics: [
        { label: '幻覺率抑制', value: '1.8%' },
        { label: '複雜檢索召回率', value: '94.6%' },
        { label: '平均檢索響應', value: '320ms' },
      ],
    },
  ] as Project[],

  // ==========================================
  // 4. 技術架構與專業技能分群（不用百分比，用現代 Badge 展示）
  // ==========================================
  skillCategories: [
    {
      id: 'frontend',
      title: 'Frontend & Interactive Systems',
      subtitle: '極致效能、響應式佈局與現代元件架構',
      iconName: 'Layout',
      skills: [
        { name: 'TypeScript', focus: '型別系統與架構設計', highlight: true },
        { name: 'React 19 / Next.js', focus: 'RSC, SSR, 狀態協同', highlight: true },
        { name: 'Tailwind CSS', focus: '設計系統與響應式開發', highlight: true },
        { name: 'State Management', focus: 'Zustand, TanStack Query' },
        { name: 'Web Performance', focus: 'Core Web Vitals, 記憶體調優' },
        { name: 'Real-Time Web', focus: 'WebSockets, WebRTC, SSE' },
        { name: 'WebAssembly (Wasm)', focus: '瀏覽器端高效能運算' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Distributed Systems',
      subtitle: '高併發資料流、非同步佇列與微服務架構',
      iconName: 'Server',
      skills: [
        { name: 'Node.js / Bun', focus: '高效非同步 I/O 伺服器', highlight: true },
        { name: 'Go (Golang)', focus: '高吞吐微服務與並發工具', highlight: true },
        { name: 'Python (FastAPI)', focus: 'AI 服務整合與資料管線' },
        { name: 'PostgreSQL', focus: '複合索引、分散式鎖、交易優化', highlight: true },
        { name: 'Redis', focus: '分散式快取、Pub/Sub、Streams' },
        { name: 'Message Queues', focus: 'Apache Kafka, BullMQ' },
        { name: 'API Standards', focus: 'RESTful, gRPC, GraphQL' },
      ],
    },
    {
      id: 'ai',
      title: 'AI Systems & Agent Engineering',
      subtitle: '生產級推理調度、RAG 向量檢索與工具調用',
      iconName: 'Cpu',
      skills: [
        { name: 'Gemini & LLM APIs', focus: '結構化輸出、多模態推理', highlight: true },
        { name: 'Agent Orchestration', focus: 'DAG 工作流、自主反思決策', highlight: true },
        { name: 'Hybrid RAG Pipeline', focus: 'BM25 + pgvector + Rerank', highlight: true },
        { name: 'Function Calling', focus: '外部 API 呼叫與狀態快照' },
        { name: 'Prompt Architecture', focus: 'Few-shot, CoT, System Prompting' },
        { name: 'LLM Observability', focus: 'Token 成本管控、產出評估' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud, DevOps & SRE',
      subtitle: '基礎設施即代碼、自動化交付與全鏈路監控',
      iconName: 'Cloud',
      skills: [
        { name: 'Docker & Podman', focus: '輕量容器化建置', highlight: true },
        { name: 'Kubernetes', focus: '微服務編排、滾動發布' },
        { name: 'CI/CD Pipelines', focus: 'GitHub Actions 自動化測試', highlight: true },
        { name: 'Cloud Platforms', focus: 'GCP Cloud Run, AWS ECS, Cloudflare' },
        { name: 'Observability', focus: 'OpenTelemetry, Prometheus, Grafana' },
        { name: 'Infrastructure as Code', focus: 'Terraform, Helm Charts' },
      ],
    },
  ] as SkillCategory[],

  // ==========================================
  // 5. 架構設計思維（互動式視覺化流程）
  // ==========================================
  architectureWorkflow: [
    {
      step: '01',
      phase: '領域建模與邊界定義',
      detail: '釐清核心業務痛點，拆分限界上下文（Bounded Contexts），確保存取隔離與強型別約束。',
    },
    {
      step: '02',
      phase: '資料通道與非同步解耦',
      detail: '採用事件驅動架構（EDA），透過佇列與快取屏障避免級聯雪崩，實現水平擴充能力。',
    },
    {
      step: '03',
      phase: '端到端即時反應與回饋',
      detail: '結合樂觀更新（Optimistic UI）與雙向 WebSocket，將繁複的後台運算轉化為順暢反饋。',
    },
    {
      step: '04',
      phase: '多維度監控與自愈容錯',
      detail: '佈署細粒度 OpenTelemetry 追蹤與預警指標，配合金絲雀發佈確保系統 24/7 穩健運作。',
    },
  ],
};
