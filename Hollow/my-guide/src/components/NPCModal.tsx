import { type JSX } from "react";
import type { NPC } from "../types";

type Props = {
  open: boolean;
  npcs?: NPC[];                // opcional
  startIndex?: number;         // ADICIONADO: índice inicial opcional
  onClose: () => void;
};

export default function NPCModal({
  open,
  npcs = [],
  startIndex = 0,
  onClose,
}: Props): JSX.Element | null {
  if (!open) return null;

  const safeIndex = Math.max(0, Math.min(startIndex, npcs.length - 1));

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label="Informações dos NPCs">
      <div className="boss-modal" role="document">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar NPCs">✕</button>

        <h2 className="boss-modal-title npc-modal-title" style={{ marginBottom: "1rem" }}>NPCs</h2>

        <div className="npc-list">
          {npcs.map((npc, i) => (
            <div key={i} className={`npc-card ${i === safeIndex ? "npc-card-active" : ""}`}>
              <div className="npc-image-wrap">
                {npc?.image ? (
                  <img
                    src={npc.image}
                    alt={npc?.name ?? "NPC"}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://via.placeholder.com/320x240?text=${encodeURIComponent(npc?.name ?? "NPC")}`;
                    }}
                  />
                ) : (
                  <div className="npc-placeholder">Sem imagem</div>
                )}
              </div>

              <div className="npc-info">
                <h3>{npc?.name ?? "NPC"}</h3>
                <div className="npc-desc">
                  {npc?.description
                    ? // normaliza para array de parágrafos
                      (Array.isArray(npc.description)
                        ? npc.description
                        : String(npc.description).split("\n\n")
                      ).map((p, j) => <p key={j}>{p}</p>)
                    : <p>Nenhuma informação disponível.</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
