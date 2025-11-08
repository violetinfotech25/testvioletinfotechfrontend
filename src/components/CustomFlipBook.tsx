import React, { lazy, Suspense } from "react";
import type { IEventProps, IFlipSetting } from "react-pageflip/build/html-flip-book/settings";

// Relaxed prop enforcement
interface CustomFlipBookProps extends Partial<IFlipSetting & IEventProps> {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  ref?: any;
}

// Lazy-load the flipbook for non-SSR error safety
const FlipBookComponent = lazy(() => import("react-pageflip"));

const HTMLFlipBook = React.forwardRef<any, CustomFlipBookProps>((props, ref) => {
  const { className = "", ...rest } = props; // ensure a fallback string value

  return (
    <Suspense fallback={<div>Loading Flipbook...</div>}>
      <FlipBookComponent {...(rest as any)} className={className} ref={ref} />
    </Suspense>
  );
});

export default HTMLFlipBook;
