// src/components/AreaDetail.tsx
import { useEffect, useState } from "react";
import type { Area } from "../types";
import { AREAS } from "../data/areas"; // ajuste o path se necessário
import BossModal from "./BossModal";
import NPCModal from "./NPCModal";

type Props = {
  area: Area | null;
  onPrev?: () => void;
  onNext?: () => void;
  onOpenMap?: (src: string | null, title?: string) => void;
  onOpenArea?: (areaId: string) => void; // quando uma subárea for clicada
};

function renderParagraphs(desc?: string | string[]) {
  if (!desc) return null;
  if (Array.isArray(desc)) {
    return desc.map((p, i) => (
      <p key={i} style={{ margin: "0 0 12px 0", lineHeight: 1.6 }}>
        {p}
      </p>
    ));
  }
  return desc
    .split(/\n\s*\n/)
    .map((p, i) => (
      <p key={i} style={{ margin: "0 0 12px 0", lineHeight: 1.6 }}>
        {p}
      </p>
    ));
}

export default function AreaDetail({ area, onPrev, onNext, onOpenMap, onOpenArea }: Props) {
  const [openBossIndex, setOpenBossIndex] = useState<number | null>(null);

  // NPC modal state
  const [npcOpen, setNpcOpen] = useState(false);
  const [npcStart, setNpcStart] = useState<number>(0);

  useEffect(() => {
    // quando a área muda, feche modais abertos
    setOpenBossIndex(null);
    setNpcOpen(false);
    setNpcStart(0);
  }, [area?.id]);

  if (!area) {
    return (
      <section className="detail" aria-label="Detalhes da área">
        <div style={{ fontSize: 18, color: "var(--muted)" }}>
          Selecione uma área à esquerda para ver detalhes.
        </div>
      </section>
    );
  }

  const bosses = area.bosses ?? [];
  const npcs = (area as any).npcs ?? []; // se tipou Area com npcs, remova o any

  // Encontra áreas secundárias cujo parent === area.id
  const secondaryAreas = AREAS.filter((a) => a.parent === area.id);

  /* ---------- Boss modal handlers ---------- */
  function openBossAt(index: number) {
    if (!bosses || bosses.length === 0) return;
    const idx = Math.max(0, Math.min(index, bosses.length - 1));
    setOpenBossIndex(idx);
  }

  function closeBossModal() {
    setOpenBossIndex(null);
  }

  function prevBoss() {
    if (openBossIndex === null) return;
    if (openBossIndex > 0) setOpenBossIndex(openBossIndex - 1);
  }
  function nextBoss() {
    if (openBossIndex === null) return;
    if (openBossIndex < bosses.length - 1) setOpenBossIndex(openBossIndex + 1);
  }

  /* ---------- NPC modal handlers ---------- */
  function openNPCAt(index = 0) {
    if (!npcs || npcs.length === 0) return;
    const idx = Math.max(0, Math.min(index, npcs.length - 1));
    setNpcStart(idx);
    setNpcOpen(true);
  }

  function closeNPC() {
    setNpcOpen(false);
    setNpcStart(0);
  }

  return (
    <>
      <section className="detail" aria-label={`Detalhes: ${area.name}`}>
        {/* LEFT COLUMN: imagem + áreas secundárias (embaixo da imagem) */}
        <div className="detail-left">
          <img
            src={area.image}
            alt={area.name}
            className="detail-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/1200x720?text=${encodeURIComponent(
                area.name
              )}`;
            }}
          />

          {/* Bloco de áreas secundárias (aparece somente se existirem) */}
          {secondaryAreas.length > 0 && (
            <div className="secondary-box" style={{ marginTop: 0 }}>
  <div style={{ marginBottom: 14, color: "var(--muted)", fontWeight: 700 }}>
    <strong>Áreas secundárias</strong>
  </div>

  <div className="secondary-list" style={{ display: "flex", gap: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
    {secondaryAreas.map((s) => (
      <button
        key={s.id}
        className="secondary-card compact"
        onClick={() => {
          if (onOpenArea) {
            onOpenArea(s.id);
          } else {
            console.warn("onOpenArea não foi passado para AreaDetail — passe (id) => setSelectedId(id) no componente pai");
          }
        }}
        title={s.name}
      >
        <img
          src={s.image}
          alt={s.name}
          className="secondary-thumb"
          onError={(e) =>
            (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/120x120?text=${encodeURIComponent(s.name)}`
          }
        />
        <div className="secondary-meta">
          <div className="secondary-name">{s.name}</div>
        </div>
      </button>
    ))}
  </div>
</div>
          )}
        </div>

        {/* RIGHT COLUMN: título, descrição, botões, hint (a "legenda") */}
        <div className="detail-body">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div className="detail-title">{area.name}</div>

            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="icon-btn icon-btn--small"
                  aria-label="Área anterior"
                  title="Área anterior"
                >
                  ◀
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="icon-btn icon-btn--small"
                  aria-label="Próxima área"
                  title="Próxima área"
                >
                  ▶
                </button>
              )}
            </div>
          </div>

          <div className="detail-desc" style={{ marginTop: 12, color: "var(--muted)" }}>
            {renderParagraphs(area.description)}
          </div>

          {/* BOTÕES: abrir modal de bosses / npcs / mapa da área */}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => openBossAt(0)}
              disabled={bosses.length === 0}
              className="btn-base bosses-btn"
              aria-disabled={bosses.length === 0}
              title="Abrir modal do primeiro boss"
            >
              Bosses
            </button>

            <button
              onClick={() => openNPCAt(0)}
              disabled={npcs.length === 0}
              className="btn-base npc-btn"
              aria-disabled={npcs.length === 0}
              title="Abrir NPCs"
            >
              NPCs
            </button>

            {area.map && (
              <button
                onClick={() => onOpenMap && onOpenMap(area.map ?? null, `${area.name} — mapa`)}
                className="btn-base area-map-btn"
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                title={`${area.name} — mapa`}
              >
                Mapa da Área
                <img
                  src="/imagens/Mapas/Icone-mapa.jpg"
                  alt="Ícone do mapa"
                  style={{ width: "26px", height: "26px" }}
                />
              </button>
            )}
          </div>

          <div className="hint" style={{ marginTop: 18 }}>
            Clique em <strong>Bosses</strong> para abrir o modal com imagens e informações. Use{" "}
            <strong>NPCs</strong> para ver personagens e diálogos da área.
          </div>
        </div>
      </section>

      {/* Modais */}
      <BossModal
        open={openBossIndex !== null}
        bosses={bosses}
        currentIndex={openBossIndex ?? 0}
        onClose={closeBossModal}
        onPrev={prevBoss}
        onNext={nextBoss}
      />

      <NPCModal open={npcOpen} npcs={npcs} startIndex={npcStart} onClose={closeNPC} />
    </>
  );
}
