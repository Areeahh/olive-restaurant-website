// Tries to load a local photo; if it's not there yet (404), quietly swaps
// to a styled placeholder instead of showing a broken image icon.
export default function SmartImg({ src, fallback, alt = "", className, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        if (fallback && e.currentTarget.src !== fallback) {
          e.currentTarget.src = fallback;
        }
      }}
      {...rest}
    />
  );
}
