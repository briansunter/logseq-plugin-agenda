/// <reference types="vite/client" />

interface Window {
  faizNavigate: (e: any) => void
  logseqAppUserConfigs: any
  currentApp: 'app' | 'pomodoro' | 'modal'
}
