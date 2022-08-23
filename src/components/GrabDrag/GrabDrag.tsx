import React, { useCallback, useEffect, useState } from "react";
import "./grabDrag.css";
type CoordinateType = {
  x: number;
  y: number;
};
interface Props {
  setTranslate: (obj: CoordinateType) => void;
  translate: CoordinateType;
  translateSensitivity?: number;
  onPointerMove?: (e: React.PointerEvent) => void;
  onDragMove?: (e: React.PointerEvent) => void;
  onPointerDown?: (e: React.PointerEvent) => void;
  onPointerUp?: (e: PointerEvent) => void;
  children?: JSX.Element;
  style?: any;
  className?: any;
}
const GrabDrag: React.FC<Props> = ({
  setTranslate,
  translate,
  translateSensitivity = 1,
  children,
  style,
  className,
  // optional effect functions on mouse movements
  onDragMove,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragMove = (e: React.PointerEvent) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);

    if (onPointerDown) onPointerDown(e);
  };

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      setIsDragging(false);

      if (onPointerUp) onPointerUp(e);
    },
    [onPointerUp]
  );

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) handleDragMove(e);

    if (onPointerMove) onPointerMove(e);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={style}
      className={`${className} default_drag_scroll`}
    >
      <div
        style={{
          transform: `translateX(${
            translate.x * translateSensitivity
          }px) translateY(${translate.y * translateSensitivity}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default GrabDrag;
