/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        Lightred: "hsl(356, 100%, 66%)",
        Verylightred: "hsl(355, 100%, 74%)",
        Verydarkblue : "hsl(208, 49%, 24%)",
        footertext: "hsl(240, 2%, 79%)",
        text: "hsl(0, 0%, 100%)",
        Verydarkgrayishblue: "hsl(207, 13%, 34%)",
        vltredbg:  "hsl(13, 100%, 72%)",
        ltredbg: "hsl(353, 100%, 62%)",
        bgrayishbluebg: "hsl(237, 17%, 21%)",
        vddesbg: "hsl(237, 23%, 32%)",
      }
    },
  },
  plugins: [],
}

