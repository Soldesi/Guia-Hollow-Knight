// src/App.tsx
import { useEffect, useMemo, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import AreaList from "./components/AreaList";
import AreaDetail from "./components/AreaDetail";
import MapModal from "./components/ModalMap";
import {AREAS} from "./data/areas"; // seu arquivo com todas as áreas (Hollow)
import type { Area } from "./types";
import "./index.css"; // ou "./App.css" / seu css principal

export default function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [showSecondary, setShowSecondary] = useState<boolean>(false);

  // Separa listas primaria / secundaria a partir de AREAS
  const primaryAreas = useMemo(() => AREAS.filter((a) => !a.secondary), []);
  const secondaryAreas = useMemo(() => AREAS.filter((a) => !!a.secondary), []);

  const baseAreas = showSecondary ? secondaryAreas : primaryAreas;

  // selectedId inicial com base na lista ativa
  const [selectedId, setSelectedId] = useState<string | null>(baseAreas[0]?.id ?? null);

  // Ao trocar entre primary/secondary ajusta seleção (escolhe primeiro se atual não existir)
  useEffect(() => {
    if (!selectedId && baseAreas.length) setSelectedId(baseAreas[0].id);
    else if (selectedId && !baseAreas.some((b) => b.id === selectedId)) {
      setSelectedId(baseAreas[0]?.id ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSecondary]);

  // Filtragem por query (nome, descrição, bosses)
  const filtered = useMemo(() => {
    if (!query) return baseAreas;
    const q = query.toLowerCase();
    return baseAreas.filter((a) => {
      const nameMatch = a.name.toLowerCase().includes(q);

      let descText = "";
      if (Array.isArray(a.description)) descText = a.description.join(" ").toLowerCase();
      else if (typeof a.description === "string") descText = a.description.toLowerCase();

      const descMatch = descText.includes(q);

      const bossText = (a.bosses ?? [])
        .map((b) => (typeof b === "string" ? b : b.name))
        .join(" ")
        .toLowerCase();
      const bossMatch = bossText.includes(q);

      return nameMatch || descMatch || bossMatch;
    });
  }, [query, baseAreas]);

  // Garante selectedId válido quando filtered muda
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

  const [mapOpen, setMapOpen] = useState(false);
  const [mapSrc, setMapSrc] = useState<string | null>(null);
  const [mapTitle, setMapTitle] = useState<string | undefined>(undefined);

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

  // Toggle que alterna entre prime/secondary (limpa busca opcionalmente)
  function toggleSecondary() {
    setShowSecondary((s) => {
      const next = !s;
      setQuery(""); // opcional: limpa busca quando troca (remove se não quiser)
      return next;
    });
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <div className="title">Hollow Knight</div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Link to="/silksong" style={{ textDecoration: "none" }}>
            <button className="map-btn" title="Abrir guia Silksong">
              Silksong
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
        onOpenMap={openMap}
        onToggleSecondary={toggleSecondary}
        isSecondary={showSecondary}
      />

  <AreaDetail
  area={selected}
  onPrev={goPrev}
  onNext={goNext}
  onOpenMap={openMap}
  onOpenArea={(id) => {
    // ativa a lista de secundárias e seleciona a área clicada
    setShowSecondary(true);
    setSelectedId(id);
  }}
/>

      <MapModal open={mapOpen} src={mapSrc} title={mapTitle} onClose={closeMap} />
    </div>
  );
}
