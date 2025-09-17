// src/App.tsx
import { useEffect, useMemo, useState, type JSX } from "react";
import { AREAS } from "./data/areas";
import type { Area } from "./types";
import AreaList from "./components/AreaList";
import AreaDetail from "./components/AreaDatail";
import MapModal from "./components/ModalMap";
import { Link } from "react-router-dom";
import "./index.css";

export default function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(AREAS[0]?.id ?? null);

  const [mapOpen, setMapOpen] = useState(false);
  const [mapSrc, setMapSrc] = useState<string | null>(null);
  const [mapTitle, setMapTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    // manter seleção coerente
  }, []);

  const filtered = useMemo(() => {
    if (!query) return AREAS;
    const q = query.toLowerCase();
    return AREAS.filter(
      (a) => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (!selectedId && filtered.length) {
      setSelectedId(filtered[0].id);
    } else if (selectedId && !filtered.some((f) => f.id === selectedId)) {
      setSelectedId(filtered[0]?.id ?? null);
    }
  }, [filtered, selectedId]);

  const selected = useMemo(() => filtered.find((a) => a.id === selectedId) ?? null, [filtered, selectedId]);

  const onSelect = (a: Area) => setSelectedId(a.id);

  const currentIndex = filtered.findIndex((a) => a.id === selectedId);
  const goPrev = () => {
    if (currentIndex > 0) setSelectedId(filtered[currentIndex - 1].id);
  };
  const goNext = () => {
    if (currentIndex >= 0 && currentIndex < filtered.length - 1) setSelectedId(filtered[currentIndex + 1].id);
  };

  function openMap(src: string | null, title?: string) {
    if (!src) return;
    setMapSrc(src);
    setMapTitle(title);
    setMapOpen(true);
  }

  function closeMap() {
    setMapOpen(false);
    setMapSrc(null);
    setMapTitle(undefined);
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <div className="title">Guia: Hollow Knight</div>
        </div>

        {/* botão para Silksong no canto direito do header */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Link to="/silksong" style={{ textDecoration: "none" }}>
            <button
              className="map-btn"
              title="Ir para o guia de Silksong"
              style={{ background: "linear-gradient(90deg,#6f4bb0,#5b3fb2)", color: "#fff" }}
            >
              Silksong
            </button>
          </Link>
        </div>
      </header>


      <AreaList areas={filtered} query={query} setQuery={setQuery} selectedId={selectedId} onSelect={onSelect} onOpenMap={openMap} />

      <AreaDetail area={selected} onPrev={goPrev} onNext={goNext} onOpenMap={openMap} />

      <MapModal open={mapOpen} src={mapSrc} title={mapTitle} onClose={closeMap} />
    </div>
  );
}
