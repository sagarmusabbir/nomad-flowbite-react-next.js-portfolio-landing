import type { Config } from "tailwindcss";
import colors, { emerald } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,

        // Gradient colors
        neon: {
          blue: "#3b82f6",
          pink: "#ec4899",
          purple: "#a855f7",
          primary: "#14b8a6",
          green: "#22c55e",
          sky: "#0ea5e9",
          amber: "#f59e0b",
          red: "#ef4444",
          secondary: "#10b981",
          slate: "#94a3b8",
          slatelight: "#f8fafc",
          slatelightmd: "#cbd5e1",
          slatedark: "#64748b",
          slatedarker: "#475569",
          slatedarkest: "#1e293b",
          slatedark900: "#0f172a",
          slatemd: "#e2e8f0",

          zinc: "#a1a1aa",
          orange: "#f97316",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          color1: "#0099fd",
          color2: "#009ff5",
          color3: "#00b0df",
          color4: "#00ccbc",
          color5: "#00d7ae",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
