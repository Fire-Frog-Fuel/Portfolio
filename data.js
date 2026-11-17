/* ============================================================
   LEGACIES OF A LIFETIME — site content
   Exported from admin.html on 17/11/2026, 23:10:02
   ============================================================ */

const SITE = {
  "title": "Legacies of a Lifetime",
  "tagline": "by Farıkito (Moria)",
  "author": "Farıkito (Moria)",
  "email": "hello@example.com",
  "footer": "© 2026 Farıkito (Moria) · Legacies of a Lifetime",
  "defaultSection": "home",
  "defaultTheme": "light",
  "socials": [
    {
      "label": "GitHub",
      "url": "https://github.com/yourname"
    },
    {
      "label": "LinkedIn",
      "url": "https://linkedin.com/in/yourname"
    },
    {
      "label": "Mastodon",
      "url": "https://mastodon.social/@yourname"
    }
  ],
  "sections": [
    {
      "id": "home",
      "type": "home",
      "label": "Home",
      "color": "#12a150",
      "font": "fraunces",
      "heading": "Legacies of a *lifetime*.",
      "intro": "I build things, take pictures of things, and occasionally take them apart to see how they work. This is the long-form record of all of it.",
      "kicker": "Paikito",
      "stats": [
        {
          "value": "12+",
          "label": "Projects shipped"
        },
        {
          "value": "3",
          "label": "Disciplines"
        },
        {
          "value": "∞",
          "label": "Curiosity"
        }
      ],
      "featuredTitle": "Featured work"
    },
    {
      "id": "coding",
      "type": "projects",
      "label": "Coding",
      "color": "#2563eb",
      "font": "space",
      "heading": "Things I've built with code.",
      "intro": "Interfaces, tools and small products — mostly vanilla web tech, always shipped.",
      "cta": {
        "label": "See the source",
        "url": "https://github.com/yourname"
      },
      "items": [
        {
          "title": "gradeboundaries.com website",
          "desc": "A website made to help students see grade boundaries across years for a levels and gcses",
          "tags": [],
          "year": "2026",
          "link": "",
          "image": "",
          "page": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>GradeBoundaries.com — Project Write-up</title>\n    <style>\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n            background: #f5f7fb;\n            color: #1a1a2e;\n            line-height: 1.65;\n            padding: 2rem 1.25rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .container {\n            max-width: 720px;\n            width: 100%;\n            background: #fff;\n            border-radius: 18px;\n            padding: 2.5rem 2rem;\n            box-shadow: 0 4px 24px rgba(0,0,0,.07);\n            border: 1px solid #e8ecf0;\n        }\n        h1 {\n            font-size: 1.8rem;\n            font-weight: 800;\n            color: #0f3460;\n            margin-bottom: .25rem;\n            letter-spacing: -.02em;\n        }\n        .subhead {\n            color: #5c6b7a;\n            font-size: .95rem;\n            margin-bottom: 1.8rem;\n            border-bottom: 1px solid #eef2f6;\n            padding-bottom: 1rem;\n        }\n        .subhead a {\n            color: #2563eb;\n            text-decoration: none;\n        }\n        .subhead a:hover { text-decoration: underline; }\n        h2 {\n            font-size: 1.2rem;\n            font-weight: 700;\n            color: #16213e;\n            margin-top: 1.8rem;\n            margin-bottom: .5rem;\n        }\n        h2:first-of-type { margin-top: 0; }\n        p {\n            margin-bottom: .9rem;\n            color: #2d3748;\n        }\n        ul {\n            margin: .4rem 0 .9rem 1.3rem;\n        }\n        li {\n            margin-bottom: .35rem;\n            color: #2d3748;\n        }\n        .tag-row {\n            display: flex;\n            flex-wrap: wrap;\n            gap: .5rem;\n            margin: .3rem 0 1.2rem;\n        }\n        .tag {\n            background: #eef2f8;\n            color: #0f3460;\n            font-size: .78rem;\n            font-weight: 600;\n            padding: .2rem .7rem;\n            border-radius: 100px;\n        }\n        .divider {\n            margin: 1.8rem 0;\n            border: 0;\n            height: 1px;\n            background: linear-gradient(90deg, transparent, #dce2ea, transparent);\n        }\n        .stats {\n            display: flex;\n            gap: 2rem;\n            flex-wrap: wrap;\n            background: #f8faff;\n            border-radius: 12px;\n            padding: 1.25rem 1.5rem;\n            margin: 1.2rem 0;\n        }\n        .stat-item { text-align: center; }\n        .stat-num {\n            font-size: 1.3rem;\n            font-weight: 800;\n            color: #0f3460;\n        }\n        .stat-label {\n            font-size: .78rem;\n            color: #5c6b7a;\n        }\n        blockquote {\n            border-left: 3px solid #5dade2;\n            padding: .6rem 1rem;\n            margin: 1rem 0;\n            background: #f8faff;\n            border-radius: 6px;\n            color: #2d3748;\n            font-style: italic;\n            font-size: .92rem;\n        }\n        .footer-note {\n            margin-top: 2rem;\n            font-size: .82rem;\n            color: #8a9aa8;\n            text-align: center;\n        }\n        @media (max-width: 500px) {\n            .container { padding: 1.5rem 1.2rem; }\n            h1 { font-size: 1.4rem; }\n        }\n    </style>\n</head>\n<body>\n<div class=\"container\">\n    <h1>📊 GradeBoundaries.com</h1>\n    <div class=\"subhead\">\n        <a href=\"https://gradeboundaries.com\" target=\"_blank\" rel=\"noopener\">gradeboundaries.com</a>\n        &nbsp;·&nbsp; Built 2025\n    </div>\n\n    <div class=\"tag-row\">\n        <span class=\"tag\">HTML</span>\n        <span class=\"tag\">CSS</span>\n        <span class=\"tag\">JavaScript</span>\n        <span class=\"tag\">Charts</span>\n        <span class=\"tag\">CSV data</span>\n        <span class=\"tag\">Open source</span>\n    </div>\n\n    <h2>What it is</h2>\n    <p>\n        GradeBoundaries.com is a free, open-source tool that lets students look up\n        exam grade boundaries for A-Level, GCSE and IGCSE across major UK exam boards —\n        <strong>Edexcel, CIE, Oxford AQA, AQA and OCR</strong> — with data going back to 2015.\n    </p>\n    <p>\n        It was built by two A-Level students as a side project to help themselves and\n        others compare boundaries across boards and years without digging through\n        scattered PDFs.\n    </p>\n\n    <h2>What it does</h2>\n    <ul>\n        <li>Searchable tables of grade boundaries by qualification and exam board</li>\n        <li>Trend charts to visualise how boundaries shift year-on-year</li>\n        <li>Free CSV downloads of the raw data</li>\n        <li>Covers 800+ A-Level units for Edexcel alone, plus IGCSE and GCSE</li>\n    </ul>\n\n    <h2>What I learnt building it</h2>\n    <p>\n        Working with real, messy CSV data and turning it into clean, interactive tables\n        taught me a lot about data parsing and building a user-friendly search experience.\n        I got more comfortable with vanilla JavaScript for rendering dynamic content\n        without a framework — keeping performance fast and the page lightweight.\n    </p>\n    <p>\n        I also learnt about designing for clarity: presenting complex numerical data\n        (grade boundaries across multiple years and boards) in a way that's scannable at\n        a glance. The open-source side meant writing documentation and managing contributions,\n        which was a great intro to collaborating on a real project.\n    </p>\n\n    <div class=\"stats\">\n        <div class=\"stat-item\">\n            <div class=\"stat-num\">800+</div>\n            <div class=\"stat-label\">A-Level units</div>\n        </div>\n        <div class=\"stat-item\">\n            <div class=\"stat-num\">5</div>\n            <div class=\"stat-label\">Exam boards</div>\n        </div>\n        <div class=\"stat-item\">\n            <div class=\"stat-num\">2015–2026</div>\n            <div class=\"stat-label\">Years covered</div>\n        </div>\n    </div>\n\n    <h2>Tech stack</h2>\n    <ul>\n        <li><strong>Frontend:</strong> HTML, CSS, vanilla JavaScript</li>\n        <li><strong>Data:</strong> CSV files parsed and rendered into searchable tables</li>\n        <li><strong>Charts:</strong> JavaScript-based trend visualisations</li>\n        <li><strong>Hosting:</strong> Static site, open-sourced on GitHub</li>\n    </ul>\n\n    <blockquote>\n        \"Built by two A-Level students as a fun project to visualise and compare A-Level grade boundaries. We're both studying A-Levels ourselves, so we know how useful it can be.\"\n    </blockquote>\n\n    <h2>Why it's useful</h2>\n    <p>\n        Grade boundaries change every year and each exam board publishes them in\n        separate PDFs — it's a pain to compare. This site puts everything in one place\n        with a consistent layout, so students can see at a glance what mark they need\n        for their target grade across different qualifications and years.\n    </p>\n\n    <hr class=\"divider\">\n\n    <div style=\"text-align:center;\">\n        <a href=\"https://gradeboundaries.com\" target=\"_blank\" style=\"display:inline-block;background:#0f3460;color:#fff;padding:.7rem 2rem;border-radius:100px;font-weight:700;text-decoration:none;font-size:.95rem;box-shadow:0 4px 14px rgba(15,52,96,.25);\">Visit the live site →</a>\n    </div>\n\n    <div class=\"footer-note\">\n        This is a personal project write-up for my portfolio. GradeBoundaries.com was built by Fire-Frog-Fuel and ChessMastermind.\n    </div>\n</div>\n</body>\n</html>"
        }
      ]
    },
    {
      "id": "photography",
      "type": "gallery",
      "label": "Photography",
      "color": "#8b5cf6",
      "font": "playfair",
      "heading": "Light, mostly unedited.",
      "intro": "Film and digital, streets and skies. Click any frame to open it full size.",
      "items": [
        {
          "title": "Lamposts",
          "meta": "2025",
          "image": "assets/IMG_0882.JPG",
          "caption": "Does more need to be said?",
          "collection": [
            {
              "image": "assets/IMG_0882.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0883.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0884.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0885.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0888.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0887.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0890.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0891.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0892.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0893.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0895.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0897.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0898.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0899.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0900.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0903.jpg",
              "caption": ""
            },
            {
              "image": "assets/IMG_0904.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0906.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0909.JPG",
              "caption": ""
            },
            {
              "image": "assets/IMG_0911.JPG",
              "caption": ""
            }
          ]
        }
      ]
    },
    {
      "id": "blog",
      "type": "blog",
      "label": "Blog",
      "color": "#f59e0b",
      "font": "lora",
      "heading": "Notes & writing",
      "intro": "Occasional posts about design, code, hardware and everything between.",
      "items": [
        {
          "title": "Why every tab has its own font",
          "date": "10 October 2026",
          "tags": [
            "Design"
          ],
          "body": "When you click a tab on this site, the entire page changes colour and typography.\n\nThat's deliberate. Different kinds of content deserve different voices — my work feels sharp and geometric, my writing feels warmer and more literary, like a paperback.\n\nIt also keeps me honest: if a design only works in one font, it probably doesn't work."
        },
        {
          "title": "Shipping small",
          "date": "22 September 2026",
          "tags": [
            "Craft"
          ],
          "body": "The best projects I've finished all had one thing in common: they were small enough to finish.\n\nThis is a short post because that's the whole point."
        },
        {
          "title": "Solder first, ask questions later",
          "date": "3 August 2026",
          "tags": [
            "Electronics"
          ],
          "body": "I spent a weekend debugging a circuit that turned out to be a single reversed diode.\n\nThe lesson isn't \"check your diodes\". The lesson is that a real breadboard teaches you faster than a perfect simulation, because a simulation never lets you burn your finger.\n\nSo now I build the ugly version first, then decide what deserves a PCB."
        }
      ]
    },
    {
      "id": "contact",
      "type": "contact",
      "label": "Contact",
      "color": "#f59e0b",
      "font": "dmsans",
      "heading": "Let's build something.",
      "intro": "Got a project, a question, or just want to say hi? My inbox is open.",
      "email": "ridiculum.manere@gmail.com",
      "socials": [
        {
          "label": "GitHub",
          "url": "https://github.com/fire-frog-fuel"
        }
      ]
    }
  ]
};
