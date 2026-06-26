@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-charcoal: var(--charcoal);
  --color-citrus: var(--citrus);
  --color-citrus-foreground: var(--citrus-foreground);
  --font-display: "Fraunces", ui-serif, Georgia, serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.75rem;

  /* Brand: Green, Citrus Orange, White, Charcoal */
  --background: oklch(0.995 0.003 110);
  --foreground: oklch(0.22 0.02 165);

  --card: oklch(1 0 0);
  --card-foreground: oklch(0.22 0.02 165);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.22 0.02 165);

  /* Deep landscape green */
  --primary: oklch(0.42 0.11 152);
  --primary-foreground: oklch(0.99 0.005 110);

  --secondary: oklch(0.96 0.012 140);
  --secondary-foreground: oklch(0.28 0.04 160);

  --muted: oklch(0.96 0.01 130);
  --muted-foreground: oklch(0.48 0.02 160);

  /* Citrus orange accent */
  --accent: oklch(0.74 0.18 56);
  --accent-foreground: oklch(0.18 0.02 60);

  --citrus: oklch(0.74 0.18 56);
  --citrus-foreground: oklch(0.18 0.02 60);

  /* Charcoal */
  --charcoal: oklch(0.22 0.012 240);

  --destructive: oklch(0.58 0.22 27);
  --destructive-foreground: oklch(0.99 0.003 110);

  --border: oklch(0.9 0.012 140);
  --input: oklch(0.92 0.012 140);
  --ring: oklch(0.42 0.11 152);

  /* Design tokens */
  --gradient-hero: linear-gradient(135deg, oklch(0.32 0.09 152 / 0.85) 0%, oklch(0.22 0.012 240 / 0.7) 100%);
  --gradient-citrus: linear-gradient(135deg, oklch(0.78 0.17 60) 0%, oklch(0.7 0.2 45) 100%);
  --shadow-soft: 0 2px 10px -2px oklch(0.22 0.012 240 / 0.08), 0 8px 30px -10px oklch(0.22 0.012 240 / 0.12);
  --shadow-elegant: 0 20px 50px -20px oklch(0.42 0.11 152 / 0.35);
  --shadow-glow: 0 0 60px oklch(0.74 0.18 56 / 0.35);
  --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

@utility container-page {
  width: 100%;
  margin-inline: auto;
  max-width: 80rem;
  padding-inline: 1.25rem;
  @media (min-width: 768px) {
    padding-inline: 2rem;
  }
}

@utility text-balance {
  text-wrap: balance;
}
