/**
 * Pure JavaScript Application Controller
 * Handles all micro-interactions, modal management, filtering, and form submission.
 */

// Project Data for Pure HTML Modal
const PROJECTS_DATA = {
  'omniflow': {
    title: 'OmniFlow Agentic Platform',
    subtitle: '分散式多智能體非同步工作流排程引擎',
    category: 'AI Systems',
    year: '2026',
    impact: '支撐 100K+ 併發工作流，透過動態拓撲排序與狀態快照將 Token 消耗降低 38%，失敗自動重試成功率達 99.2%',
    description: '為複雜業務流程設計的視覺化與程式化 AI Agent 執行平台。支援基於 DAG 的多模型自主決策、工具調用審批流與即時 WebSocket 執行進度串流。',
    highlights: [
      '使用 Redis Streams 與 BullMQ 構建去中心化分散式任務對列，支援子任務分枝與狀態持久化',
      '自研 Token Budget 分配演算法，在長上下文推理情境下自動裁剪歷史上下文與快取重複 Embeddings',
      '採用 WebSocket 提供即時節點執行狀態心跳監控，前端渲染延遲低於 16ms'
    ],
    techStack: ['TypeScript', 'Next.js 15', 'Node.js', 'Redis Streams', 'PostgreSQL', 'Gemini API', 'Docker'],
    metrics: [
      { label: 'Token 成本節省', value: '-38%' },
      { label: '任務自動恢復率', value: '99.2%' },
      { label: '並發排程容量', value: '100K+' }
    ],
    demoUrl: 'https://github.com/sam-lin/omniflow-platform',
    githubUrl: 'https://github.com/sam-lin/omniflow-platform'
  },
  'pulsemetrics': {
    title: 'PulseMetrics Real-Time APM',
    subtitle: '分散式高併發即時可觀測性與日誌分析平台',
    category: 'Cloud & Infrastructure',
    year: '2025',
    impact: '支撐每秒 50,000+ 筆事件遙測日誌攝取，PB 級查詢延遲由 2.4s 壓制至 180ms，整合自動異常根因分析',
    description: '專為微服務架構打造的輕量化遙測監控面板。提供分散式鏈路追蹤（Distributed Tracing）、端點延遲熱圖與基於統計學模型的即時告警系統。',
    highlights: [
      '使用 Go 撰寫高吞吐日誌攝取代理，內存佔用比傳統 Agent 降低 65%',
      '以 ClickHouse 列式資料庫為核心，建立分區索引與物化視圖，加速多維度時序聚合查詢',
      '前端採用 Canvas 與 WebGL 加速繪製萬級資料點即時水流圖，確保 60 FPS 流暢渲染'
    ],
    techStack: ['React 19', 'Go', 'ClickHouse', 'Apache Kafka', 'Tailwind CSS', 'OpenTelemetry', 'gRPC'],
    metrics: [
      { label: '日誌攝取吞吐量', value: '50K/sec' },
      { label: '聚合查詢延遲', value: '180ms' },
      { label: '記憶體消耗優化', value: '-65%' }
    ],
    demoUrl: 'https://github.com/sam-lin/pulsemetrics-apm',
    githubUrl: 'https://github.com/sam-lin/pulsemetrics-apm'
  },
  'nexus': {
    title: 'Nexus Cloud Collaboration Hub',
    subtitle: '基於 CRDT 演算法的零衝突多人即時協同工作區',
    category: 'Full-Stack',
    year: '2025',
    impact: '承載 25,000+ 開發者跨國零衝突協作，端點到端點同步延遲 < 45ms，上線至今維持 99.98% 可用性',
    description: '整合虛擬終端、分散式檔案同步與多人游標協同的網頁端雲原生 IDE。透過 WebAssembly 沙盒直接在瀏覽器執行本機代碼解析與語法樹構建。',
    highlights: [
      '基於 Yjs CRDT（無衝突複製資料類型）設計協同網路，在斷網重連時保證無損狀態收斂',
      '透過 WebRTC 建立點對點即時資料頻道，降低中央伺服器頻寬開銷達 75%',
      '整合虛擬檔案系統（OPFS）實現極速本地快取與秒級專案載入'
    ],
    techStack: ['React 19', 'TypeScript', 'WebAssembly', 'WebRTC', 'Yjs', 'Tailwind CSS', 'FastAPI'],
    metrics: [
      { label: '跨國協作延遲', value: '<45ms' },
      { label: '活躍開發者', value: '25K+' },
      { label: '伺服器頻寬節約', value: '75%' }
    ],
    demoUrl: 'https://github.com/sam-lin/nexus-cloud-ide',
    githubUrl: 'https://github.com/sam-lin/nexus-cloud-ide'
  },
  'veritas': {
    title: 'Veritas Enterprise Multimodal RAG',
    subtitle: '企業級高精準度混合向量檢索與知識庫系統',
    category: 'AI Systems',
    year: '2024',
    impact: '將專業領域問答幻覺率由 14.2% 降至 1.8%，多表關聯與複雜法規文檔檢索召回率高達 94.6%',
    description: '針對金融與醫療領域文檔設計的精準檢索增強生成架構。結合密集向量（Dense Vector）與稀疏語義（BM25），並引入動態交叉重排序模型（Cross-Encoder Reranker）。',
    highlights: [
      '自研階梯式文字切塊（Recursive Semantic Chunking），完整保留結構化表格與階層關係',
      '基於 PostgreSQL + pgvector 建立 HNSW 索引，支援多租戶行級資料安全隔離（RLS）',
      '實作端到端 Grounding 引用標注，精確指向原文出處段落與原始頁碼'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL (pgvector)', 'React', 'Tailwind CSS', 'Gemini Pro', 'Docker'],
    metrics: [
      { label: '幻覺率抑制', value: '1.8%' },
      { label: '複雜檢索召回率', value: '94.6%' },
      { label: '平均檢索響應', value: '320ms' }
    ],
    demoUrl: 'https://github.com/sam-lin/veritas-rag',
    githubUrl: 'https://github.com/sam-lin/veritas-rag'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Email Copy Functionality
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = 'ytpm66666@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-3.5 h-3.5 text-[#e9874f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-[#e9874f] font-sans">COPIED!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
          if (window.lucide) window.lucide.createIcons();
        }, 2200);
      } catch (err) {
        alert('Email 已複製：' + email);
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. System Tab Switching (Schematic vs Diagnostics)
  const tabSchematic = document.getElementById('tab-schematic');
  const tabTelemetry = document.getElementById('tab-telemetry');
  const viewSchematic = document.getElementById('view-schematic');
  const viewTelemetry = document.getElementById('view-telemetry');

  if (tabSchematic && tabTelemetry && viewSchematic && viewTelemetry) {
    tabSchematic.addEventListener('click', () => {
      tabSchematic.classList.add('bg-[#37607e]', 'text-white', 'font-semibold');
      tabSchematic.classList.remove('text-[#8ca8ba]');
      tabTelemetry.classList.remove('bg-[#37607e]', 'text-white', 'font-semibold');
      tabTelemetry.classList.add('text-[#8ca8ba]');
      viewSchematic.classList.remove('hidden');
      viewTelemetry.classList.add('hidden');
    });

    tabTelemetry.addEventListener('click', () => {
      tabTelemetry.classList.add('bg-[#37607e]', 'text-white', 'font-semibold');
      tabTelemetry.classList.remove('text-[#8ca8ba]');
      tabSchematic.classList.remove('bg-[#37607e]', 'text-white', 'font-semibold');
      tabSchematic.classList.add('text-[#8ca8ba]');
      viewTelemetry.classList.remove('hidden');
      viewSchematic.classList.add('hidden');
    });
  }

  // 4. Project Category Filtering
  const filterButtons = document.querySelectorAll('.btn-filter');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#37607e]', 'text-white', 'font-bold', 'border', 'border-[#e9874f]/50');
        b.classList.add('text-[#8ca8ba]');
      });
      btn.classList.add('bg-[#37607e]', 'text-white', 'font-bold', 'border', 'border-[#e9874f]/50');
      btn.classList.remove('text-[#8ca8ba]');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 5. Project Modal Management
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modal) return;

    document.getElementById('modal-category').innerText = `[ SPEC: ${data.category.toUpperCase()} ]`;
    document.getElementById('modal-year').innerText = `RELEASE ${data.year}`;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-subtitle').innerText = data.subtitle;
    document.getElementById('modal-impact').innerText = data.impact;
    document.getElementById('modal-description').innerText = data.description;

    // Render Metrics
    const metricsContainer = document.getElementById('modal-metrics');
    metricsContainer.innerHTML = data.metrics.map(m => `
      <div class="p-3.5 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-center">
        <div class="text-lg sm:text-xl font-bold font-mono text-white">${m.value}</div>
        <div class="text-[11px] text-[#8ca8ba] font-mono mt-1">${m.label}</div>
      </div>
    `).join('');

    // Render Highlights
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = data.highlights.map(h => `
      <div class="flex items-start gap-3 p-3.5 rounded-sm bg-[#232b30] border border-[#37607e]/40 text-xs sm:text-sm text-[#c1d5df]">
        <span class="text-[#e9874f] font-mono mt-0.5">✔</span>
        <span class="font-sans">${h}</span>
      </div>
    `).join('');

    // Render Tech Stack
    const techContainer = document.getElementById('modal-techstack');
    techContainer.innerHTML = data.techStack.map(t => `
      <span class="text-xs font-mono px-3 py-1 rounded-sm bg-[#232b30] border border-[#37607e]/60 text-[#c1d5df]">
        ${t}
      </span>
    `).join('');

    // Links
    document.getElementById('modal-demo-btn').href = data.demoUrl;
    document.getElementById('modal-github-btn').href = data.githubUrl;

    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // 6. Methodology Interactive Step Highlighting
  const methodSteps = document.querySelectorAll('.methodology-step');
  methodSteps.forEach(step => {
    step.addEventListener('click', () => {
      methodSteps.forEach(s => {
        s.classList.remove('border-[#e9874f]', 'bg-[#161817]', 'shadow-lg');
        s.classList.add('bg-[#161817]/60', 'border-[#37607e]/40');
      });
      step.classList.add('border-[#e9874f]', 'bg-[#161817]', 'shadow-lg');
      step.classList.remove('bg-[#161817]/60', 'border-[#37607e]/40');
    });
  });

  // 7. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formResetBtn = document.getElementById('form-reset-btn');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const topic = document.getElementById('form-topic').value;
      const message = document.getElementById('form-message').value;

      if (!name || !email || !message) {
        alert('請填寫完整資訊。');
        return;
      }

      contactForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');

      const mailtoLink = document.getElementById('success-mailto-btn');
      if (mailtoLink) {
        mailtoLink.href = `mailto:ytpm66666@gmail.com?subject=${encodeURIComponent(`[FMI-INQUIRY] ${topic} - ${name}`)}&body=${encodeURIComponent(message)}`;
      }
    });

    if (formResetBtn) {
      formResetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        formSuccess.classList.add('hidden');
      });
    }
  }
});
