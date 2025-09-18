// src/components/AreaList.tsx

import type { Area } from "../types";

type Props = {
  areas: Area[];
  query: string;
  setQuery: (q: string) => void;
  selectedId: string | null;
  onSelect: (a: Area) => void;
  onOpenMap?: (src: string | null, title?: string) => void;
  onToggleSecondary: () => void;
  isSecondary: boolean;
};

export default function AreaList({
  areas,
  query,
  setQuery,
  selectedId,
  onSelect,
  onOpenMap,
  onToggleSecondary,
  isSecondary,
}: Props) {
  return (
    <aside className="side" aria-label="Lista de áreas">
      <div className="side-header">
        <div className="title-left">Áreas</div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            className="map-btn"
            onClick={() => onOpenMap && onOpenMap("/imagens/Mapas/Mapa-geral.jpg", "Mapa Geral")}
            title="Abrir mapa geral"
          >
            Mapa Geral
          </button>
        </div>
      </div>

      <div className="search">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." />
        <button onClick={() => setQuery("")} style={{ background: "var(--violet)" }}>
          Limpar
        </button>
      </div>

      <div className="areas-list" role="list">
        {areas.map((a) => (
          <div
            key={a.id}
            className={`area-item ${selectedId === a.id ? "active" : ""}`}
            onClick={() => onSelect(a)}
            role="listitem"
            style={{ cursor: "pointer" }}
          >
            <img src={a.image} alt={a.name} className="area-thumb" />
            <div className="area-meta">
              <div className="area-name">{a.name}</div>
            </div>
          </div>
        ))}

        {areas.length === 0 && <div style={{ color: "var(--muted)", padding: "10px 6px" }}>Nenhuma área encontrada.</div>}
      </div>

      <div className="areas-footer">
  <button
    onClick={onToggleSecondary}
    className={`secondary-toggle ${isSecondary ? "active" : ""}`}
    aria-pressed={isSecondary}
    title={isSecondary ? "Mostrar áreas principais" : "Mostrar áreas secundárias"}
  >
    {isSecondary ? "Mostrar áreas principais" : "Áreas secundárias"}
  </button>

  <div className="areas-tip">
    Dica: clique em uma área para ver detalhes à direita.
  </div>
</div>
    </aside>
  );
}
