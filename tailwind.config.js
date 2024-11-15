module.exports = {
  content: [
    "./src/**/*.njk",
    "./src/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "GeistSans Fallback", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Roboto Mono", "Menlo", "Monaco", "Liberation Mono", "DejaVu Sans Mono", "Courier New", "monospace"],
      },
    },
    colors: {
      background: "hsl(0, 0%, 100%)",
      foreground: "hsl(224, 71.4%, 4.1%)",
      card: "hsl(0, 0%, 100%)",
      "card-foreground": "hsl(224, 71.4%, 4.1%)",
      popover: "hsl(0, 0%, 100%)",
      "popover-foreground": "hsl(224, 71.4%, 4.1%)",
      primary: "hsl(220.9, 39.3%, 11%)",
      "primary-foreground": "hsl(210, 20%, 98%)",
      secondary: "hsl(220, 14.3%, 95.9%)",
      "secondary-foreground": "hsl(220.9, 39.3%, 11%)",
      muted: "hsl(220, 14.3%, 95.9%)",
      "muted-foreground": "hsl(220, 8.9%, 46.1%)",
      accent: "hsl(220, 14.3%, 95.9%)",
      "accent-foreground": "hsl(220.9, 39.3%, 11%)",
      destructive: "hsl(0, 84.2%, 60.2%)",
      "destructive-foreground": "hsl(210, 20%, 98%)",
      border: "hsl(220, 13%, 91%)",
      input: "hsl(220, 13%, 91%)",
      ring: "hsl(224, 71.4%, 4.1%)",
    },
  },
  plugins: [],
}

