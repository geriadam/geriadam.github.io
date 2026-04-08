module.exports = {
  content: [
    "./src/**/*.njk",
    "./src/**/*.md",
    "./src/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        surface:  'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink:      'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        accent:   'var(--accent)',
        border:   'var(--border)',
      },
    },
  },
  plugins: [],
}
