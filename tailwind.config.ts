import type { Config } from "tailwindcss";
function withOpacity(variableName: string) {
  return `rgba(var(${variableName}) , <alpha-value>)`;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--background"),
        text: withOpacity("--text"),
      },
    },
  },

  plugins: [],
};
export default config;
