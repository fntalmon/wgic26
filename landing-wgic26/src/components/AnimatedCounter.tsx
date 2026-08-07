interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Renderiza el valor final directamente: la animación desde 0 mostraba
// "0 +" en el HTML inicial, en capturas y en cargas lentas.
export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  return (
    <div className={className}>
      {value}
      {suffix}
    </div>
  );
}
