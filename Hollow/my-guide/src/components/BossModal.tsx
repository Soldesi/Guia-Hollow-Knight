// src/components/BossModal.tsx
import { type JSX } from "react";
import type { Boss } from "../types";

type Props = {
  open: boolean;
  bosses: Array<string | Boss> | undefined;
  onClose: () => void;
};

export default function BossModal({ open, bosses = [], onClose }: Props): JSX.Element | null {
  if (!open || bosses.length === 0) return null;

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label="Informações dos Bosses">
      <div className="boss-modal" role="document">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar modal">✕</button>

        <h2 className="boss-modal-title npc-modal-title" style={{ marginBottom: "1rem" }}>Bosses</h2>

        <div className="npc-list">
          {bosses.map((raw, i) => {
            const boss: { name: string; description?: string; image?: string } =
              typeof raw === "string" ? { name: raw } : raw;

            return (
              <div key={i} className="npc-card">
                <div className="npc-boss-wrap">
                  <img
                    src={boss.image ?? `/imagens/bosses/${encodeURIComponent(boss.name)}.jpg`}
                    alt={boss.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/960x640?text=${encodeURIComponent(boss.name)}`;
                    }}
                  />
                </div>

                <div className="npc-info">
                  <h3>{boss.name}</h3>
                  <div className="npc-desc">
                    {boss.description
                      ? boss.description.split("\n\n").map((p, j) => (
                          <p key={j}>{p}</p>
                        ))
                      : <p style={{ color: "var(--muted)" }}>(Descrição não disponível)</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
