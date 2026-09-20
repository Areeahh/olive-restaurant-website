const base = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "currentColor" };

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.9.25-1.5 1.55-1.5h1.65V4.2C15.9 4.1 15 4 13.94 4 11.7 4 10.2 5.3 10.2 7.8v2.6H7.6v3h2.6V21h3.3z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  );
}

export function TwitterIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 5.9c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.5.7-2.3.9A3.6 3.6 0 0 0 11 8.6c0 .3 0 .6.1.8-3-.1-5.6-1.6-7.4-3.7-.3.5-.5 1.2-.5 1.8 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A7.3 7.3 0 0 1 3 17.5 10.3 10.3 0 0 0 8.6 19c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.2 1.8-2z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.7v4.6l4-2.3-4-2.3z" />
    </svg>
  );
}
