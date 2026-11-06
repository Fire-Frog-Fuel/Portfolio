/* ============================================================
   LEGACIES OF A LIFETIME — site content
   by Farıkito (Moria)
   ------------------------------------------------------------
   This is the ONLY file you need to touch to change text.
   You can also edit everything visually in admin.html and then
   press "Export data.js" to regenerate this file.

   Each section = one tab at the top of the site. Every tab owns a
   colour and a font, and clicking it re-themes the whole page.
   ============================================================ */

const SITE = {

  /* ---------- Site-wide info (header, footer, contact) ---------- */
  title: "Legacies of a Lifetime",
  tagline: "by Farıkito (Moria)",
  author: "Farıkito (Moria)",
  email: "hello@example.com",
  footer: "© 2026 Farıkito (Moria) · Legacies of a Lifetime",
  defaultSection: "home",
  defaultTheme: "light",          // "light" or "dark"

  socials: [
    { label: "GitHub",   url: "https://github.com/yourname" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { label: "Mastodon", url: "https://mastodon.social/@yourname" }
  ],

  /* ============================================================
     SECTIONS / TABS
     type can be: home | projects | gallery | blog | about | contact
     ============================================================ */
  sections: [

    /* ---------------------------------------------------------
       1. HOME
       --------------------------------------------------------- */
    {
      id: "home",
      type: "home",
      label: "Home",
      color: "#12a150",          // green — the ink colour of the sketch
      font: "fraunces",
      /* *asterisks* around a word paint it in the tab's colour. */
      heading: "Legacies of a *lifetime*.",
      intro: "I build things, take pictures of things, and occasionally take them apart to see how they work. This is the long-form record of all of it.",
      kicker: "Farıkito (Moria)",
      stats: [
        { value: "12+", label: "Projects shipped" },
        { value: "3",   label: "Disciplines" },
        { value: "∞",   label: "Curiosity" }
      ],
      featuredTitle: "Featured work"
    },

    /* ---------------------------------------------------------
       2. CODING
       --------------------------------------------------------- */
    {
      id: "coding",
      type: "projects",
      label: "Coding",
      color: "#2563eb",          // blue
      font: "space",
      heading: "Things I've built with code.",
      intro: "Interfaces, tools and small products — mostly vanilla web tech, always shipped.",
      cta: { label: "See the source", url: "https://github.com/yourname" },
      items: [
        {
          title: "Ember Dashboard",
          desc: "A realtime analytics dashboard with live charts, dark mode and a plugin system. Built with vanilla JS and Canvas — no framework, no build step.",
          tags: ["JavaScript", "Canvas", "UI"],
          year: "2026",
          link: "https://example.com",
          image: ""
        },
        {
          title: "Paper Routes",
          desc: "A tiny route-planning app for a local paper delivery round. Offline-first, installs to the home screen.",
          tags: ["PWA", "Maps"],
          year: "2025",
          link: "",
          image: ""
        },
        {
          title: "Type Foundry Site",
          desc: "Marketing site and interactive type tester for an independent type foundry.",
          tags: ["Design", "Webfonts"],
          year: "2025",
          link: "",
          image: ""
        },
        {
          title: "Static Site Toolkit",
          desc: "A 40-line templating layer that turns a folder of Markdown into a complete blog with zero dependencies.",
          tags: ["Node", "Tooling"],
          year: "2024",
          link: "",
          image: ""
        }
      ]
    },

    /* ---------------------------------------------------------
       3. ELECTRONICS
       --------------------------------------------------------- */
    {
      id: "electronics",
      type: "projects",
      label: "Electronics",
      color: "#e11d48",          // red
      font: "plexmono",
      heading: "Hardware that blinks, senses and survives.",
      intro: "Microcontrollers, sensors and the occasional cloud of solder smoke. Schematics and build notes included.",
      items: [
        {
          title: "Desk Weather Station",
          desc: "An ESP32 with an e-paper display showing temperature, humidity and pressure from a small solar cell. Runs for weeks between charges.",
          tags: ["ESP32", "C++", "PCB"],
          year: "2026",
          link: "",
          image: ""
        },
        {
          title: "LoRa Garden Nodes",
          desc: "Four battery-powered soil-moisture nodes talking to a base station over LoRa. Data lands in a local SQLite file.",
          tags: ["LoRa", "Sensors", "Power"],
          year: "2025",
          link: "",
          image: ""
        },
        {
          title: "Fixing a 1980s Synth",
          desc: "Replacing capacitors, reflowing dead traces and mapping the original firmware's voice allocation.",
          tags: ["Repair", "Audio"],
          year: "2024",
          link: "",
          image: ""
        }
      ]
    },

    /* ---------------------------------------------------------
       4. PHOTOGRAPHY
       --------------------------------------------------------- */
    {
      id: "photography",
      type: "gallery",
      label: "Photography",
      color: "#8b5cf6",          // purple
      font: "playfair",
      heading: "Light, mostly unedited.",
      intro: "Film and digital, streets and skies. Click any frame to open it full size.",
      items: [
        { title: "Morning Fog",    meta: "35mm film · 2026", image: "assets/photo-01.svg", caption: "Fog rolling off the river just after sunrise." },
        { title: "Market Light",   meta: "Digital · 2025",   image: "assets/photo-02.svg", caption: "Late afternoon behind the vegetable stalls." },
        { title: "Rooftops",       meta: "35mm film · 2025", image: "assets/photo-03.svg", caption: "Taken from a fire escape I probably shouldn't have been on." },
        { title: "Long Exposure",  meta: "Digital · 2024",   image: "assets/photo-04.svg", caption: "Thirty seconds of traffic, one frame." },
        { title: "Quiet Interior", meta: "Medium format · 2024", image: "assets/photo-05.svg", caption: "An empty library in the middle of the day." },
        { title: "Coastline",      meta: "Digital · 2023",   image: "assets/photo-06.svg", caption: "Wind, salt and a very patient tripod." }
      ]
    },

    /* ---------------------------------------------------------
       5. BLOG
       --------------------------------------------------------- */
    {
      id: "blog",
      type: "blog",
      label: "Blog",
      color: "#f59e0b",          // amber
      font: "lora",
      heading: "Notes & writing",
      intro: "Occasional posts about design, code, hardware and everything between.",
      items: [
        {
          title: "Why every tab has its own font",
          date: "10 October 2026",
          tags: ["Design"],
          body: "When you click a tab on this site, the entire page changes colour and typography.\n\nThat's deliberate. Different kinds of content deserve different voices — my work feels sharp and geometric, my writing feels warmer and more literary, like a paperback.\n\nIt also keeps me honest: if a design only works in one font, it probably doesn't work."
        },
        {
          title: "Shipping small",
          date: "22 September 2026",
          tags: ["Craft"],
          body: "The best projects I've finished all had one thing in common: they were small enough to finish.\n\nThis is a short post because that's the whole point."
        },
        {
          title: "Solder first, ask questions later",
          date: "3 August 2026",
          tags: ["Electronics"],
          body: "I spent a weekend debugging a circuit that turned out to be a single reversed diode.\n\nThe lesson isn't \"check your diodes\". The lesson is that a real breadboard teaches you faster than a perfect simulation, because a simulation never lets you burn your finger.\n\nSo now I build the ugly version first, then decide what deserves a PCB."
        }
      ]
    },

    /* ---------------------------------------------------------
       6. CONTACT
       --------------------------------------------------------- */
    {
      id: "contact",
      type: "contact",
      label: "Contact",
      color: "#f59e0b",          // amber (matches the sketch's last tab)
      font: "dmsans",
      heading: "Let's build something.",
      intro: "Got a project, a question, or just want to say hi? My inbox is open.",
      email: "hello@example.com",
      socials: [
        { label: "GitHub",   url: "https://github.com/yourname" },
        { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
        { label: "Mastodon", url: "https://mastodon.social/@yourname" }
      ]
    }
  ]
};
