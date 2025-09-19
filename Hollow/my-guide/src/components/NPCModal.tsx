// src/components/NPCModal.tsx
import { type JSX } from "react";

type NPC = {
  name: string;
  description: string;
  image?: string | null;
};

type Props = {
  open: boolean;
  npcs: NPC[] | undefined;
  onClose: () => void;
};

export default function NPCModal({ open, npcs = [], onClose }: Props): JSX.Element | null {
  if (!open) return null;

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label="Informações dos NPCs">
      <div className="boss-modal" role="document">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar NPCs">✕</button>

        <h2 className="boss-modal-title npc-modal-title" style={{ marginBottom: "1rem" }}>NPCs</h2>

        <div className="npc-list">
          {npcs.map((npc, i) => (
            <div key={i} className="npc-card">
              <div className="npc-image-wrap">
                {npc?.image ? (
                  <img src={npc.image} alt={npc?.name ?? "NPC"} />
                ) : (
                  <div className="npc-placeholder">Sem imagem</div>
                )}
              </div>

              <div className="npc-info">
                <h3>{npc?.name ?? "NPC"}</h3>
                <div className="npc-desc">
                  {npc.description
                    ? npc.description.split("\n\n").map((p, j) => <p key={j}>{p}</p>)
                    : <p>Nenhuma informação disponível.</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1rem", textAlign: "right" }}>
          <button className="map-btn" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
}
