import { useState, type ReactNode } from "react";

type IconName =
  | "archive"
  | "bookmark"
  | "books"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "close"
  | "download"
  | "expand"
  | "folder"
  | "grid"
  | "highlight"
  | "list"
  | "menu"
  | "minus"
  | "more"
  | "note"
  | "plus"
  | "print"
  | "search"
  | "settings"
  | "sparkle"
  | "sun"
  | "text"
  | "upload";

const paths: Record<IconName, ReactNode> = {
  archive: <><path d="M4 7h16M6 7l1 13h10l1-13M9 11h6"/><path d="M5 4h14v3H5z"/></>,
  bookmark: <path d="M7 4.8A1.8 1.8 0 0 1 8.8 3h6.4A1.8 1.8 0 0 1 17 4.8V21l-5-3-5 3V4.8Z"/>,
  books: <><path d="M4 5h5v15H4zM9 5h5v15H9zM15.5 5.5l3.3-.9 3.7 14.5-3.3.9z"/><path d="M5.5 9h2M10.5 16h2M17.5 9l2-.5"/></>,
  chevronDown: <path d="m8 10 4 4 4-4"/>,
  chevronLeft: <path d="m14 7-5 5 5 5"/>,
  chevronRight: <path d="m10 7 5 5-5 5"/>,
  close: <path d="m7 7 10 10M17 7 7 17"/>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></>,
  expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></>,
  folder: <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"/>,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
  highlight: <><path d="m15 4 5 5L10 19H5v-5L15 4Z"/><path d="m13 6 5 5M4 21h8"/></>,
  list: <><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r=".5" fill="currentColor"/><circle cx="4.5" cy="12" r=".5" fill="currentColor"/><circle cx="4.5" cy="18" r=".5" fill="currentColor"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  minus: <path d="M7 12h10"/>,
  more: <><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></>,
  note: <><path d="M5 3h14v18H5zM8 8h8M8 12h8M8 16h5"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  print: <><path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v7H7z"/></>,
  search: <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.5 1a8 8 0 0 0-1.7-1L14.3 3h-4.6L9.3 6a8 8 0 0 0-1.7 1L5.1 6l-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.4 3h4.6l.4-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.6a7 7 0 0 0 .1-1Z"/></>,
  sparkle: <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3ZM18.5 15l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"/>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></>,
  text: <><path d="M4 6V3h16v3M12 3v18M8 21h8"/></>,
  upload: <><path d="M12 16V4m0 0L8 8m4-4 4 4M5 20h14"/></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function IconButton({ name, label, active, onClick }: { name: IconName; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button className={`icon-button ${active ? "active" : ""}`} aria-label={label} title={label} onClick={onClick}>
      <Icon name={name} />
    </button>
  );
}

const libraryItems = [
  { icon: "books" as IconName, label: "All documents", count: "128" },
  { icon: "bookmark" as IconName, label: "Favorites", count: "12" },
  { icon: "note" as IconName, label: "My notes", count: "34" },
];

const folders = [
  { label: "Research papers", count: "48" },
  { label: "Product design", count: "24" },
  { label: "Books", count: "16" },
  { label: "Receipts & bills", count: "31" },
];

const thumbs = [
  { page: 1, title: "Designing interfaces", type: "cover" },
  { page: 2, title: "Contents", type: "contents" },
  { page: 3, title: "Design is a process", type: "chapter" },
  { page: 4, title: "A framework for clarity", type: "text" },
  { page: 5, title: "Start with intent", type: "text" },
];

function MiniPage({ type }: { type: string }) {
  if (type === "cover") {
    return (
      <div className="mini-page cover">
        <span className="mini-kicker">Field Guide 01</span>
        <strong>Designing<br />interfaces<br />that feel clear.</strong>
        <span className="mini-dot" />
      </div>
    );
  }
  return (
    <div className={`mini-page ${type}`}>
      <span className="mini-label">{type === "contents" ? "CONTENTS" : type === "chapter" ? "CHAPTER 01" : "DESIGN NOTES"}</span>
      {type === "chapter" && <span className="mini-title">Design is<br />a process.</span>}
      <span className="mini-rule wide" />
      <span className="mini-rule" />
      <span className="mini-rule medium" />
      <span className="mini-rule wide" />
      <span className="mini-rule short" />
    </div>
  );
}

function Sidebar({ open, onClose, active, onNavigate, onOpen }: { open: boolean; onClose: () => void; active: string; onNavigate: (label: string) => void; onOpen: () => void }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand-row">
        <div className="brand-mark"><span /><span /><span /></div>
        <span className="brand-name">Shelf.</span>
        <IconButton name="close" label="Close sidebar" onClick={onClose} />
      </div>

      <button className="import-button" onClick={onOpen}><Icon name="plus" size={17} /> Add PDF files</button>

      <nav className="nav-section" aria-label="Library">
        <span className="section-label">LIBRARY</span>
        {libraryItems.map((item) => (
          <button key={item.label} className={`nav-item ${active === item.label ? "selected" : ""}`} onClick={() => onNavigate(item.label)}>
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
            <small>{item.count}</small>
          </button>
        ))}
      </nav>

      <nav className="nav-section folders" aria-label="Folders">
        <div className="section-heading">
          <span className="section-label">FOLDERS</span>
          <button aria-label="Add folder"><Icon name="plus" size={15} /></button>
        </div>
        {folders.map((folder, index) => (
          <button key={folder.label} className={`nav-item ${active === folder.label ? "selected" : ""}`} onClick={() => onNavigate(folder.label)}>
            <span className={`folder-color color-${index}`} />
            <span>{folder.label}</span>
            <small>{folder.count}</small>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item"><Icon name="archive" size={18} /><span>Archive</span></button>
        <button className="nav-item"><Icon name="settings" size={18} /><span>Settings</span></button>
        <div className="storage">
          <div><span>Storage</span><span>6.2 GB of 10 GB</span></div>
          <div className="storage-track"><span /></div>
        </div>
        <button className="profile">
          <span className="avatar">AK</span>
          <span><strong>Alex Kim</strong><small>alex@studio.co</small></span>
          <Icon name="more" size={18} />
        </button>
      </div>
    </aside>
  );
}

const documents = [
  { title: "Designing Interfaces That Feel Clear", folder: "Product design", pages: 48, size: "12.4 MB", modified: "2 min ago", progress: 6, tone: "charcoal", type: "Editorial" },
  { title: "The Psychology of Everyday Things", folder: "Books", pages: 241, size: "28.1 MB", modified: "Yesterday", progress: 38, tone: "coral", type: "Book" },
  { title: "Spatial Computing: Research Review", folder: "Research papers", pages: 84, size: "16.8 MB", modified: "Mar 14", progress: 72, tone: "blue", type: "Research" },
  { title: "Quarterly Product Strategy", folder: "Product design", pages: 32, size: "8.2 MB", modified: "Mar 12", progress: 0, tone: "lime", type: "Report" },
  { title: "Modern Grid Systems", folder: "Books", pages: 156, size: "21.6 MB", modified: "Mar 08", progress: 14, tone: "cream", type: "Reference" },
  { title: "Customer Discovery Notes", folder: "Research papers", pages: 67, size: "6.9 MB", modified: "Mar 02", progress: 91, tone: "violet", type: "Notes" },
];

function DocumentCover({ document, compact = false }: { document: typeof documents[number]; compact?: boolean }) {
  return (
    <div className={`document-cover ${document.tone} ${compact ? "compact" : ""}`}>
      <span className="cover-type">{document.type}</span>
      <strong>{document.title}</strong>
      <span className="cover-shape" />
      <span className="cover-pages">{document.pages} pages</span>
    </div>
  );
}

function AllDocuments({ onOpen, onMenu }: { onOpen: () => void; onMenu: () => void }) {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  const filtered = documents.filter((document) => document.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="library-page">
      <header className="library-topbar">
        <div className="library-heading">
          <IconButton name="menu" label="Open sidebar" onClick={onMenu} />
          <div>
            <span className="section-label">YOUR LIBRARY</span>
            <h1>All documents</h1>
          </div>
          <span className="document-count">128 files</span>
        </div>
        <div className="library-actions">
          <IconButton name="sun" label="Appearance" />
          <IconButton name="settings" label="Settings" />
          <button className="library-avatar">AK</button>
        </div>
      </header>

      <div className="library-content">
        <div className="library-controls">
          <label className="library-search">
            <Icon name="search" size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search 128 documents by title or content..." />
            <kbd>⌘ K</kbd>
          </label>
          <button className="filter-button"><Icon name="folder" size={16} /> All folders <Icon name="chevronDown" size={14} /></button>
          <button className="filter-button">Last updated <Icon name="chevronDown" size={14} /></button>
          <div className="display-switch">
            <IconButton name="grid" label="Grid view" active={display === "grid"} onClick={() => setDisplay("grid")} />
            <IconButton name="list" label="List view" active={display === "list"} onClick={() => setDisplay("list")} />
          </div>
        </div>

        <section className="recent-section">
          <div className="content-heading">
            <div><h2>Continue reading</h2><span>Pick up where you left off</span></div>
            <button>View reading history <Icon name="chevronRight" size={15} /></button>
          </div>
          <div className="continue-grid">
            {documents.slice(0, 3).map((document) => (
              <button className="continue-card" key={document.title} onClick={onOpen}>
                <DocumentCover document={document} compact />
                <span className="continue-info">
                  <span className="file-type">PDF</span>
                  <strong>{document.title}</strong>
                  <small>{document.folder} · {document.pages} pages</small>
                  <span className="card-progress"><i style={{ width: `${document.progress}%` }} /></span>
                  <small>{document.progress}% read</small>
                </span>
                <Icon name="more" size={18} />
              </button>
            ))}
          </div>
        </section>

        <section className="all-files-section">
          <div className="content-heading">
            <div><h2>All files</h2><span>{filtered.length} shown</span></div>
            <button className="upload-secondary"><Icon name="upload" size={16} /> Upload PDFs</button>
          </div>
          {display === "grid" ? (
            <div className="document-grid">
              {filtered.map((document) => (
                <button className="document-card" key={document.title} onClick={onOpen}>
                  <DocumentCover document={document} />
                  <span className="document-details">
                    <strong>{document.title}</strong>
                    <small>{document.folder}</small>
                    <span><small>{document.size} · {document.modified}</small><Icon name="more" size={17} /></span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="document-table">
              <div className="table-head"><span>Name</span><span>Folder</span><span>Pages</span><span>Modified</span><span /></div>
              {filtered.map((document) => (
                <button className="table-row" key={document.title} onClick={onOpen}>
                  <span className="table-name"><DocumentCover document={document} compact /><span><strong>{document.title}</strong><small>{document.size}</small></span></span>
                  <span>{document.folder}</span><span>{document.pages}</span><span>{document.modified}</span><Icon name="more" size={17} />
                </button>
              ))}
            </div>
          )}
          {filtered.length === 0 && <div className="empty-state"><Icon name="search" size={24} /><strong>No documents found</strong><span>Try another title or keyword.</span></div>}
        </section>
      </div>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState<"library" | "reader">("library");
  const [activeNav, setActiveNav] = useState("All documents");
  const [panelOpen, setPanelOpen] = useState(true);
  const [activePage, setActivePage] = useState(3);
  const [zoom, setZoom] = useState(82);
  const [tool, setTool] = useState<"cursor" | "highlight" | "note">("cursor");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="app-shell">
      {sidebarOpen && <button className="scrim" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} />}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        active={activeNav}
        onNavigate={(label) => {
          setActiveNav(label);
          if (label === "All documents") setView("library");
          setSidebarOpen(false);
        }}
        onOpen={() => setView("reader")}
      />

      <main className="workspace">
        {view === "library" ? (
          <AllDocuments onOpen={() => setView("reader")} onMenu={() => setSidebarOpen(true)} />
        ) : (
        <>
        <header className="topbar">
          <div className="document-identity">
            <IconButton name="menu" label="Open sidebar" onClick={() => setSidebarOpen(true)} />
            <div className="file-badge">PDF</div>
            <div className="file-meta">
              <strong>Designing Interfaces That Feel Clear</strong>
              <span>Product design <b>•</b> Saved 2 min ago</span>
            </div>
            <IconButton name="chevronDown" label="Document menu" />
          </div>
          <div className="top-actions">
            <div className={`search-box ${searchOpen ? "open" : ""}`}>
              <Icon name="search" size={17} />
              <input aria-label="Search in document" placeholder="Search in document" />
              <kbd>⌘ F</kbd>
            </div>
            <IconButton name="search" label="Search" onClick={() => setSearchOpen(!searchOpen)} />
            <IconButton name="print" label="Print" />
            <IconButton name="download" label="Download" />
            <IconButton name="more" label="More options" />
          </div>
        </header>

        <div className="reader">
          <aside className={`page-panel ${panelOpen ? "" : "collapsed"}`}>
            <div className="panel-header">
              <div className="panel-tabs">
                <button className="active"><Icon name="grid" size={17} /> Pages</button>
                <button><Icon name="list" size={17} /> Outline</button>
              </div>
              <IconButton name="chevronLeft" label="Collapse page panel" onClick={() => setPanelOpen(false)} />
            </div>
            <div className="thumbnail-list">
              {thumbs.map((thumb) => (
                <button key={thumb.page} className={`thumbnail-row ${activePage === thumb.page ? "active" : ""}`} onClick={() => setActivePage(thumb.page)}>
                  <span className="page-number">{thumb.page}</span>
                  <MiniPage type={thumb.type} />
                  <span className="thumb-label">{thumb.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {!panelOpen && (
            <button className="expand-panel" onClick={() => setPanelOpen(true)} aria-label="Open page panel">
              <Icon name="chevronRight" />
            </button>
          )}

          <section className="canvas">
            <div className="reading-progress"><span style={{ width: `${(activePage / 48) * 100}%` }} /></div>
            <div className="document-page">
              <span className="eyebrow">CHAPTER 01 · FOUNDATIONS</span>
              <h1>Design is a<br /><em>process.</em></h1>
              <div className="page-lead">
                <span className="drop-cap">G</span>
                <p>reat interfaces rarely begin as great interfaces. They become clear through a deliberate process of removing friction, testing assumptions, and giving every element a reason to exist.</p>
              </div>
              <div className="quote-block">
                <span className="quote-mark">“</span>
                <blockquote>Clarity isn’t the absence of complexity. It’s the result of understanding it.</blockquote>
              </div>
              <div className="article-columns">
                <div>
                  <h2>Start with the reader</h2>
                  <p>Every useful page starts with a simple question: what does the reader need right now? Good hierarchy answers before they have to ask.</p>
                </div>
                <div>
                  <h2>Make space meaningful</h2>
                  <p>Whitespace is not empty. It creates relationships, signals importance, and gives ideas room to become visible.</p>
                </div>
              </div>
              <span className="page-index">03</span>
              {tool === "highlight" && <span className="active-highlight">deliberate process</span>}
            </div>

            <div className="floating-toolbar">
              <div className="tool-group">
                <IconButton name="text" label="Select text" active={tool === "cursor"} onClick={() => setTool("cursor")} />
                <IconButton name="highlight" label="Highlight" active={tool === "highlight"} onClick={() => setTool("highlight")} />
                <IconButton name="note" label="Add note" active={tool === "note"} onClick={() => setTool("note")} />
              </div>
              <span className="divider" />
              <div className="tool-group">
                <IconButton name="minus" label="Zoom out" onClick={() => setZoom(Math.max(40, zoom - 10))} />
                <button className="zoom-value" onClick={() => setZoom(100)}>{zoom}%</button>
                <IconButton name="plus" label="Zoom in" onClick={() => setZoom(Math.min(160, zoom + 10))} />
              </div>
              <span className="divider" />
              <IconButton name="expand" label="Full screen" />
            </div>
          </section>

          <aside className="insights-panel">
            <div className="insights-header">
              <div><Icon name="sparkle" size={17} /><span>Document insights</span></div>
              <IconButton name="close" label="Close insights" />
            </div>
            <div className="insight-card">
              <span className="insight-label">READING PROGRESS</span>
              <strong>12 minutes left</strong>
              <p>Page 3 of 48 · 6% complete</p>
              <div className="insight-progress"><span /></div>
            </div>
            <div className="insight-section">
              <span className="insight-label">ON THIS PAGE</span>
              <button>Design is a process <span>1</span></button>
              <button>Start with the reader <span>2</span></button>
              <button>Make space meaningful <span>3</span></button>
            </div>
            <div className="insight-section">
              <span className="insight-label">YOUR ACTIVITY</span>
              <div className="activity-row"><span className="activity-icon yellow"><Icon name="highlight" size={15} /></span><span><strong>8 highlights</strong><small>in this document</small></span></div>
              <div className="activity-row"><span className="activity-icon blue"><Icon name="note" size={15} /></span><span><strong>3 notes</strong><small>last added yesterday</small></span></div>
            </div>
            <button className="focus-mode"><Icon name="sun" size={17} /><span><strong>Focus mode</strong><small>Dim distractions while reading</small></span><span className="toggle"><i /></span></button>
          </aside>
        </div>
        </>
        )}
      </main>
    </div>
  );
}

export default App;
