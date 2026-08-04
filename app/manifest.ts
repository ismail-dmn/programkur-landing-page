import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ProgramKur.com.tr | Uzaktan Yazılım Kurulum ve Teknik Destek",
    short_name: "ProgramKur",
    description:
      "20'den fazla program için aynı gün uzaktan kurulum ve teknik destek.",
    start_url: "/",
    display: "standalone",
    background_color: "#07152f",
    theme_color: "#07152f",
    lang: "tr",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
