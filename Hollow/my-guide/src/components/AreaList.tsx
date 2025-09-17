
import type { Area } from "../types";

type Props = {
  areas: Area[];
  query: string;
  setQuery: (q: string) => void;
  selectedId: string | null;
  onSelect: (a: Area) => void;
  onOpenMap: (src: string | null, title?: string) => void;
};

export default function AreaList({ areas, query, setQuery, selectedId, onSelect, onOpenMap }: Props) {
  return (
    <aside className="side" aria-label="Lista de áreas">
      {/* Header interno: Título + botão Mapa Geral no lugar do 'Guia' */}
      <div className="side-header">
        <div className="title-left">Áreas</div>
        <div style={{ marginLeft: "auto"}}>
          <button
            className="map-btn"
            onClick={() => onOpenMap("/imagens/Mapas/Mapa-geral.jpg", "Mapa Geral")}
            title="Abrir mapa geral"
          >
            Mapa Geral
          </button>
        </div>
      </div>

      <div className="search" style={{ marginBottom: 10 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          aria-label="buscar áreas"
        />
        <button onClick={() => setQuery("")}>Limpar</button>
      </div>

      <nav className="areas-list" aria-label="Navegação de áreas">
        {areas.map((area) => (
          <div
            key={area.id}
            className={`area-item ${selectedId === area.id ? "active" : ""}`}
            onClick={() => onSelect(area)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(area);
            }}
          >
            <img
              src={area.image}
              alt={area.name}
              className="area-thumb"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/320x180?text=${encodeURIComponent(
                  area.name
                )}`;
              }}
            />
            <div className="area-meta">
              <div className="area-name">{area.name}</div>
              <div className="area-sub">{area.bosses?.slice(0, 2).join(" • ")}</div>
            </div>
          </div>
        ))}
      </nav>

      <div style={{ height: 14 }} />

      <div style={{ color: "var(--muted)", fontSize: 13 }}>
        Dica: clique em uma área para ver detalhes à direita.
      </div>
    </aside>
  );
}
