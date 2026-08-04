import { ImageResponse } from "next/og"

export const alt =
  "ProgramKur.com.tr — Uzaktan Yazılım Kurulum ve Teknik Destek"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #07152f 0%, #0b1f3f 55%, #06263f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#0b1f3f",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#22d3ee",
              fontSize: 44,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            {">_"}
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>
            <span>ProgramKur</span>
            <span style={{ color: "#3b82f6" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          Bilgisayarınıza Uzaktan Program Kurulumu
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 1000,
          }}
        >
          AutoCAD, Revit, Lumion, Office, Adobe ve 20+ program için aynı gün
          uzaktan kurulum ve teknik destek.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 16,
              background: "#2563eb",
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            1000 TL — Tek Seferlik Kurulum
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              color: "#22d3ee",
            }}
          >
            ★ 4.9 · Türkiye Geneli Hizmet
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
