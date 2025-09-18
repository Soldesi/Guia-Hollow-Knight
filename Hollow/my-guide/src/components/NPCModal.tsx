// src/components/NPCModal.tsx
import { useEffect, useState, type JSX } from "react";

type NPC = {
  name: string;
  description: string;
  image?: string | null;
};

type Props = {
  open: boolean;
  npcs: NPC[] | undefined;
  startIndex?: number;
  onClose: () => void;
};

export default function NPCModal({ open, npcs = [], startIndex = 0, onClose }: Props): JSX.Element | null {
  const [index, setIndex] = useState<number>(startIndex);

  useEffect(() => {
    if (open) {
      setIndex(Math.min(Math.max(0, startIndex), Math.max(0, npcs.length - 1)));
      // impedir scroll do body quando modal aberto
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, startIndex, npcs.length]);

  if (!open) return null;

  const npc = npcs[index] ?? null;

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label="Informações de NPC">
      <div className="boss-modal" role="document">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar NPCs">✕</button>

        <div className="boss-modal-content">
          <div className="boss-modal-image-wrap" style={{ flex: "0 0 40%" }}>
            {npc?.image ? (
              <img src={npc.image} alt={npc?.name ?? "NPC"} />
            ) : (
              <div style={{
                width: "100%",
                height: 220,
                borderRadius: 8,
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--muted)"
              }}>
                Sem imagem
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <h3 className="boss-modal-title npc-modal-title">{npc?.name ?? "NPC"}</h3>

            <div className="boss-modal-desc npc-modal-desc" style={{ maxHeight: "60vh", overflow: "auto" }}>
              {npc ? npc.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>) : <p className="boss-modal-desc">Nenhuma informação disponível.</p>}
            </div>

            {/* navegação simples entre NPCs */}
            <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
              <button
                className="icon-btn icon-btn--small"
                onClick={() => setIndex((s) => Math.max(0, s - 1))}
                disabled={index <= 0}
                aria-label="NPC anterior"
              >
                ◀
              </button>

              <div style={{ color: "var(--muted)", fontSize: 13 }}>
                {index + 1} / {npcs.length}
              </div>

              <button
                className="icon-btn icon-btn--small"
                onClick={() => setIndex((s) => Math.min(npcs.length - 1, s + 1))}
                disabled={index >= npcs.length - 1}
                aria-label="Próximo NPC"
              >
                ▶
              </button>

              <div style={{ marginLeft: "auto" }}>
                <button className="map-btn" onClick={onClose}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
