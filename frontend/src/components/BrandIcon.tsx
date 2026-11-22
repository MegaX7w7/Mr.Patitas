interface BrandIconProps {
  className?: string;
}

export function BrandIcon({ className = 'h-6 w-6' }: BrandIconProps) {
  return (
    <svg viewBox="0 0 64 64" className={`fill-current ${className}`} aria-hidden="true">
      <ellipse cx="20" cy="24" rx="5.5" ry="7" />
      <ellipse cx="32" cy="19" rx="5.5" ry="7.5" />
      <ellipse cx="44" cy="24" rx="5.5" ry="7" />
      <path d="M32 30c-9 0-15 6.5-15 13 0 4.5 3.5 7 8 7 3 0 5-1.5 7-1.5s4 1.5 7 1.5c4.5 0 8-2.5 8-7 0-6.5-6-13-15-13z" />
    </svg>
  );
}
