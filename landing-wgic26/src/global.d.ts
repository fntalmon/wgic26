declare global {
  interface Window {
    iFrameResize: (options: Record<string, any>, selector: string) => void;
  }
}

export {};
