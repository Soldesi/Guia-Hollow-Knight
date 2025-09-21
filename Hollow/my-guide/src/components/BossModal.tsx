import { type JSX } from "react";
import type { Boss } from "../types";

type Props = {
  open: boolean;
  bosses?: Array<string | Boss>;
  currentIndex?: number;    // ADICIONADO: índice inicial opcional
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function BossModal({
  open,
  bosses = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}: Props): JSX.Element | null {
  if (!open || bosses.length === 0) return null;

  const safeIndex = Math.max(0, Math.min(currentIndex, bosses.length - 1));
  const raw = bosses[safeIndex];
  const boss: { name: string; description?: string | string[]; image?: string | null } =
    typeof raw === "string" ? { name: raw } : raw;

  // normaliza description para renderizar parágrafos
  const descriptionParagraphs = boss.description
    ? (Array.isArray(boss.description) ? boss.description : String(boss.description).split("\n\n"))
    : [];

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label="Informações dos Bosses">
      <div className="boss-modal" role="document">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar modal">✕</button>

        <h2 className="boss-modal-title npc-modal-title" style={{ marginBottom: "1rem" }}>Bosses</h2>

        <div className="boss-controls" style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {onPrev && <button onClick={onPrev} aria-label="Boss anterior">◀</button>}
          <div style={{ flex: 1, textAlign: "center", alignSelf: "center" }}>
            {safeIndex + 1} / {bosses.length}
          </div>
          {onNext && <button onClick={onNext} aria-label="Próximo boss">▶</button>}
        </div>

        <div className="npc-list">
          <div className="npc-card">
            <div className="npc-boss-wrap">
              <img
                src={boss.image ?? `/imagens/bosses/${encodeURIComponent(boss.name)}.jpg`}
                alt={boss.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    `https://via.placeholder.com/960x640?text=${encodeURIComponent(boss.name)}`;
                }}
              />
            </div>

            <div className="npc-info">
              <h3>{boss.name}</h3>
              <div className="npc-desc">
                {descriptionParagraphs.length > 0 ? (
                  descriptionParagraphs.map((p, j) => <p key={j}>{p}</p>)
                ) : (
                  <p style={{ color: "var(--muted)" }}>(Descrição não disponível)</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
