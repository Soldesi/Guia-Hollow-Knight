

type Props = {
  open: boolean;
  src: string | null;
  title?: string;
  onClose: () => void;
};

export default function MapModal({ open, src, title, onClose }: Props) {
  if (!open || !src) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,6,10,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1200,
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(900px, 94%)",
          maxHeight: "94%",
          background: "linear-gradient(180deg, #130b3aff, #0f0830ff)",
          borderRadius: 12,
          padding: 12,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ fontWeight: 800, color: "var(--accent)", fontSize: 16 }}>{title}</div>
          <button
            onClick={onClose}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.04)",
              color: "var(--muted)",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Fechar
          </button>
        </div>

        <div style={{ overflow: "auto", borderRadius: 8 }}>
          <img
            src={src}
            alt={title ?? "mapa"}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 8,
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://via.placeholder.com/1200x800?text=Mapa+não+encontrado";
            }}
          />
        </div>
      </div>
    </div>
  );
}
