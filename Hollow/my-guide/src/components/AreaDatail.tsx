// src/components/AreaDetail.tsx
import { useState } from "react";
import type { Area } from "../types";
import BossModal from "./BossModal";

type Props = {
  area: Area | null;
  onPrev?: () => void;
  onNext?: () => void;
  onOpenMap?: (src: string | null, title?: string) => void;
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

export default function AreaDetail({ area, onPrev, onNext, onOpenMap }: Props) {
  const [openBossIndex, setOpenBossIndex] = useState<number | null>(null);

  if (!area) {
    return (
      <section className="detail" aria-label="Detalhes da área">
        <div style={{ fontSize: 18, color: "var(--muted)" }}>Selecione uma área à esquerda para ver detalhes.</div>
      </section>
    );
  }

  const bosses = area.bosses ?? [];

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

  return (
    <>
      <section className="detail" aria-label={`Detalhes: ${area.name}`}>
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

        <div className="detail-body">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div className="detail-title">{area.name}</div>

            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              {onPrev && (
                <button
                  onClick={onPrev}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.04)",
                    padding: "8px 10px",
                    borderRadius: 8,
                    cursor: "pointer",
                    color: "var(--muted)",
                  }}
                  aria-label="Área anterior"
                >
                  ◀
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.04)",
                    padding: "8px 10px",
                    borderRadius: 8,
                    cursor: "pointer",
                    color: "var(--muted)",
                  }}
                  aria-label="Próxima área"
                >
                  ▶
                </button>
              )}
            </div>
          </div>

          <div className="detail-desc" style={{ marginTop: 12, color: "var(--muted)" }}>
            {renderParagraphs(area.description)}
          </div>

          {/* BOTÕES: abrir modal de bosses / mapa da área */}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            {/* Botão principal: ao clicar abre modal direto no primeiro boss */}
            <button
              onClick={() => openBossAt(0)}
              disabled={bosses.length === 0}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
                background: bosses.length ? "var(--accent)" : "transparent",
                color: bosses.length ? "#071226" : "var(--muted)",
                fontWeight: 800,
                cursor: bosses.length ? "pointer" : "not-allowed",
              }}
            >
              Bosses
            </button>

            {area.map && (
              <button
                onClick={() => onOpenMap && onOpenMap(area.map ?? null, `${area.name} — mapa`)}
                style={{
                  marginLeft: "auto",
                  padding: "6px 10px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "var(--accent)",
                  color: "#071226",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Mapa da Área
              </button>
            )}
          </div>

          <div className="hint" style={{ marginTop: 18 }}>
            Clique em <strong>Bosses</strong> para abrir o modal com imagens e informações.
          </div>
        </div>
      </section>

      {/* Modal do boss (navegável) */}
      <BossModal
        open={openBossIndex !== null}
        bosses={bosses}
        currentIndex={openBossIndex ?? 0}
        onClose={closeBossModal}
        onPrev={prevBoss}
        onNext={nextBoss}
      />
    </>
  );
}
