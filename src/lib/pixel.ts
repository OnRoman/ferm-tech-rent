// Facebook Pixel helper
// Pixel snippet placeholder is in src/routes/__root.tsx <head>
export function trackLead(source: string) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead", { source });
  }
  // eslint-disable-next-line no-console
  console.info("[FB Pixel] Lead tracked:", source);
}
