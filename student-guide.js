/* Student Guide Mode: click the floating button to show editable areas. */
(function () {
  const guideItems = [
    [".availability", "01 · Availability"],
    [".hero h1", "02 · Main headline"],
    [".hero-description", "03 · Intro description"],
    [".stats", "04 · Your stats"],
    [".hero-portrait", "05 · Profile photo"],
    [".about-card", "06 · About you"],
    [".tag-row", "07 · Your skills"],
    [".featured-video", "08 · Featured video"],
    [".reels-wrapper", "09 · Recent projects"],
    [".longform-grid", "10 · Long-form projects"],
    [".services-grid", "11 · Your services"],
    [".contact-card", "12 · Contact and social links"]
  ];
  guideItems.forEach(([selector, label]) => {
    document.querySelectorAll(selector).forEach(el => el.setAttribute("data-guide-label", label));
  });

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "student-guide-toggle";
  toggle.textContent = "✦ Student Guide: OFF";
  toggle.setAttribute("aria-pressed", "false");
  toggle.setAttribute("aria-label", "Toggle Student Guide Mode");
  document.body.appendChild(toggle);

  const panel = document.createElement("aside");
  panel.className = "student-guide-panel";
  panel.hidden = true;
  panel.innerHTML = `<strong>Student Guide Mode</strong><p>Yellow outlines show the areas you can personalize. Edit the matching section in <code>student-info.js</code>, save the file, then refresh the page.</p><ol><li>Change your name and profession.</li><li>Update your text and skills.</li><li>Replace photos in the <code>assets</code> folder.</li><li>Add your own project/video IDs.</li><li>Update your contact and social links.</li></ol><p class="guide-note">Keep the design files unchanged.</p>`;
  document.body.appendChild(panel);

  toggle.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("student-guide-mode");
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.textContent = enabled ? "✦ Student Guide: ON" : "✦ Student Guide: OFF";
    panel.hidden = !enabled;
  });
})();
