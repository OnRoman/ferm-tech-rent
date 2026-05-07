export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw-V3-AKNiurpibrExJRwCDIqORIbF4fPCjL2OhtmwHp1lx11SLNLOInD1EhCchQH5Ihw/exec";

export async function submitToGoogleScript(payload: Record<string, unknown>) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
