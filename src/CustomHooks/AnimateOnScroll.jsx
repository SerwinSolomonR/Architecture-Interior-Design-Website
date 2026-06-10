import { useOnScreen } from "./useOnScreen";

export default function AnimateOnScroll({
  children,
  className = "",
  animationClass = "show",
  baseClass = "hidden",
  threshold = 0.3,
  triggerOnce = false,
}) {
  const [ref, isVisible] = useOnScreen({ threshold }, triggerOnce);

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? animationClass : ""} ${className}`}
    >
      {children}
    </div>
  );
}