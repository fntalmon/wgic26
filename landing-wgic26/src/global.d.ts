declare global {
  interface IFrameResizeOptions {
    log?: boolean;
    checkOrigin?: boolean;
    [key: string]: string | number | boolean | undefined;
  }

  interface Window {
    iFrameResize: (options: IFrameResizeOptions, selector: string) => void;
  }
}

export {};
