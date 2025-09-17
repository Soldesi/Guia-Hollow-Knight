// src/components/BossModal.tsx
import { useEffect } from "react";
import type { Boss } from "../types";

type Props = {
  open: boolean;
  bosses: Array<string | Boss> | null;
  currentIndex: number; // índice do boss atual no array
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function BossModal({ open, bosses, currentIndex, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev && onPrev();
      if (e.key === "ArrowRight") onNext && onNext();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !bosses || bosses.length === 0 || currentIndex < 0 || currentIndex >= bosses.length) return null;

  const raw = bosses[currentIndex];
  const bossObj: { name: string; description?: string; image?: string } =
    typeof raw === "string" ? { name: raw } : raw;

  return (
    <div className="boss-modal-overlay" role="dialog" aria-modal="true" aria-label={`Boss ${bossObj.name}`}>
      <div className="boss-modal">
        <button className="boss-modal-close" onClick={onClose} aria-label="Fechar modal">
          ✕
        </button>

        <div className="boss-modal-content">
          <div className="boss-modal-image-wrap">
            <img
              src={bossObj.image ?? `/imagens/bosses/${encodeURIComponent(bossObj.name)}.jpg`}
              alt={bossObj.name}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/960x640?text=${encodeURIComponent(
                  bossObj.name
                )}`;
              }}
            />
          </div>

          <div className="boss-modal-body">
            <h3 className="boss-modal-title">{bossObj.name}</h3>
            <div className="boss-modal-desc">
              {bossObj.description ? (
                bossObj.description.split(/\n\s*\n/).map((p, i) => (
                  <p key={i} style={{ margin: "0 0 12px 0", lineHeight: 1.6 }}>
                    {p}
                  </p>
                ))
              ) : (
                <p style={{ color: "var(--muted)" }}>(Descrição não disponível)</p>
              )}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button
                onClick={onPrev}
                disabled={!onPrev}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "transparent",
                  color: onPrev ? "var(--muted)" : "rgba(150,150,150,0.5)",
                  cursor: onPrev ? "pointer" : "default",
                  fontWeight: 700,
                }}
                aria-label="Boss anterior"
              >
                ◀ Anterior
              </button>

              <button
                onClick={onNext}
                disabled={!onNext}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "transparent",
                  color: onNext ? "var(--muted)" : "rgba(150,150,150,0.5)",
                  cursor: onNext ? "pointer" : "default",
                  fontWeight: 700,
                }}
                aria-label="Próximo boss"
              >
                Próximo ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
