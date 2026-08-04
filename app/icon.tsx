import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07152f",
          borderRadius: 112,
          color: "#22d3ee",
          fontSize: 300,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        {">_"}
      </div>
    ),
    { ...size },
  )
}
