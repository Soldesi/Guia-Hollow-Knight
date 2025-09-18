// src/pages/SilksongGuide.tsx
import { useEffect, useMemo, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import AreaList from "../components/AreaList";
import AreaDetail from "../components/AreaDatail"; 
import MapModal from "../components/ModalMap"; 
import SILKSONG_AREAS from "../data/silksongAreas";
import type { Area } from "../types";
import "../silksong.css";

export default function SilksongGuide(): JSX.Element {
  // adicionar classe no body para temas globais (fundo da página)
  useEffect(() => {
    document.body.classList.add("silksong-theme");
    return () => {
      document.body.classList.remove("silksong-theme");
    };
  }, []);

  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(SILKSONG_AREAS[0]?.id ?? null);

  const [mapOpen, setMapOpen] = useState(false);
  const [mapSrc, setMapSrc] = useState<string | null>(null);
  const [mapTitle, setMapTitle] = useState<string | undefined>(undefined);

  const filtered = useMemo(() => {
    if (!query) return SILKSONG_AREAS;
    const q = query.toLowerCase();

    return SILKSONG_AREAS.filter((a) => {
      const nameMatch = a.name.toLowerCase().includes(q);

      let descText = "";
      if (Array.isArray(a.description)) {
        descText = a.description.join(" ").toLowerCase();
      } else if (typeof a.description === "string") {
        descText = a.description.toLowerCase();
      }

      const descMatch = descText.includes(q);
      return nameMatch || descMatch;
    });
  }, [query]);

  useEffect(() => {
    if (!selectedId && filtered.length) setSelectedId(filtered[0].id);
    else if (selectedId && !filtered.some((f) => f.id === selectedId)) setSelectedId(filtered[0]?.id ?? null);
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
    <div className="app silksong-body">
      <header className="header silksong-panel" style={{ alignItems: "center" }}>
        <div>
          <div className="title silksong-title">Silksong</div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="map-btn map-btn--secondary" title="Voltar ao guia Hollow Knight">
              Hollow Knight
            </button>
          </Link>
        </div>
      </header>

      <AreaList
        areas={filtered}
        query={query}
        setQuery={setQuery}
        selectedId={selectedId}
        onSelect={onSelect}
        onOpenMap={openMap} onToggleSecondary={function (): void {
          throw new Error("Function not implemented.");
        } } isSecondary={false}      />

      <AreaDetail area={selected} onPrev={goPrev} onNext={goNext} onOpenMap={openMap} />

      <MapModal open={mapOpen} src={mapSrc} title={mapTitle} onClose={closeMap} />
    </div>
  );
}
