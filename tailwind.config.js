export default {
        content: ["./src/**/*.{js,jsx,ts,tsx}"],
        theme: {
          extend: {
            fontFamily: {
              syne: ["Syne","sans-serif"],
              dm:   ["DM Sans","sans-serif"],
              mono: ["JetBrains Mono","monospace"],
            },
            keyframes: {
              fadeUp:    { from:{opacity:0,transform:"translateY(14px)"},to:{opacity:1,transform:"none"} },
              slideUp:   { from:{opacity:0,transform:"translateY(14px)"},to:{opacity:1,transform:"none"} },
              orbit:     { to:{transform:"rotate(360deg)"} },
              pulseGlow: { "0%,100%":{boxShadow:"0 0 0 0 rgba(74,222,128,.5)"},"50%":{boxShadow:"0 0 0 5px rgba(74,222,128,0)"} },
              typingDot: { "0%,60%,100%":{transform:"translateY(0)",opacity:.4},"30%":{transform:"translateY(-5px)",opacity:1} },
            },
            animation: {
              fadeUp:   "fadeUp .35s ease both",
              slideUp:  "slideUp .28s ease both",
              orbit:    "orbit 18s linear infinite",
              pulseGlow:"pulseGlow 2s ease-in-out infinite",
              td1:      "typingDot 1.2s ease-in-out infinite",
              td2:      "typingDot 1.2s ease-in-out .2s infinite",
              td3:      "typingDot 1.2s ease-in-out .4s infinite",
            },
          },
        },
        plugins: [],
      };