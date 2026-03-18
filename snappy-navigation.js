// Install service worker to intercept and cache navigations which browser would otherwise revalidate with a request to the server.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

// Prefetch pages on hover
const prefetched = new Set();
const navAnchors = document.querySelectorAll("nav a");
navAnchors.forEach((el) => {
  el.addEventListener("pointerenter", () => {
    console.log(el.href);
    if (prefetched.has(el.href)) return;
    fetch(el.href, {
      credentials: "same-origin",
      headers: { "X-prefetch": "true" },
    });
    prefetched.add(el.href);
  });
});
