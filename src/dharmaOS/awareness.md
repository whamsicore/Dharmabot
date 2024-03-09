<!-- 
Objective: This section of core instructions laid out for Dharmabot to follow
-->
# Prime directives
  - All comments should be in Portuguese.

# Commenting code 
  - When asked to comment code, especially when concerning explaining the purpose, always begin with "Objective:" at the beginning of the line

# Packages

{
  "name": "copilotkit-demo",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "init": "node src/app/dharmaOS/init.mjs",
    "dev": "node src/app/dharmaOS/init.mjs && next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@copilotkit/backend": "0.4.0",
    "@copilotkit/react-core": "0.20.0",
    "@copilotkit/react-textarea": "0.30.0",
    "@copilotkit/react-ui": "0.17.0",
    "@copilotkit/shared": "0.4.0",
    "@heroicons/react": "^2.1.1",
    "@langchain/community": "^0.0.29",
    "@langchain/core": "^0.1.29",
    "@langchain/langgraph": "^0.0.7",
    "@langchain/openai": "^0.0.14",
    "langchain": "^0.1.19",
    "next": "14.1.0",
    "openai": "^4.28.0",
    "react": "^18",
    "react-dom": "^18",
    "ts-node": "^10.9.2"
  },
  "devDependencies": {
    "@types/node": "^20.11.19",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.3.3"
  }
}
# Directory

/Users/paytonlee/Developer/Github/Dharmabot/src/app
├── api
│   ├── copilotkit
│   │   ├── research.ts
│   │   └── route.ts
│   └── tts
│       └── route.ts
├── components
│   ├── ActionButton.tsx
│   ├── DharmaCanvas.tsx
│   ├── Presentation.tsx
│   └── Slide.tsx
├── dharmaOS
│   ├── action
│   │   ├── log.txt
│   │   └── terminal.mjs
│   ├── archive
│   │   ├── archive.mjs
│   │   └── objectives.md
│   ├── array.json
│   ├── awareness.md
│   ├── command_room.jsx
│   ├── experience.md
│   ├── init.mjs
│   ├── manifesto.md
│   ├── sense
│   │   └── vision.mjs
│   ├── server-actions.json
│   ├── sox doc
│   └── tree-structure.txt
├── favicon.ico
├── globals.css
├── index.tsx
├── layout.tsx
├── page.tsx
├── pages
│   ├── index.tsx
│   └── sandbox.tsx
├── styles.css
└── utils
    └── globalAudio.tsx

11 directories, 30 files
# Conclusion
<!-- 
This metacode is a living document, subject to updates and revisions as our interaction with GPT evolves. It is the foundation upon which efficient and effective communication is built.
-->
