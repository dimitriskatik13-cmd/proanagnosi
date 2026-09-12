// =========================================================
// SYLLABLE CARDS  (CV from PDF + ου cards)
// =========================================================
// Canonical content is maintained in data/content.json and validated before release.
const SYLLABLES = window.PROANAGNOSI_CONTENT.syllables;
const WORDS = window.PROANAGNOSI_CONTENT.words;
const PHONEMES = window.PROANAGNOSI_CONTENT.phonemes;
const PHONEME_WORDS = window.PROANAGNOSI_CONTENT.phonemeWords;

const PSEUDO_WORDS = {
  8: [
    { text: "ζεκαλόνι",  phonemes: ["ζ","ε","κ","α","λ","ο","ν","ι"] },
    { text: "μοταφέλι",  phonemes: ["μ","ο","τ","α","φ","ε","λ","ι"] },
    { text: "σαπολίκο",  phonemes: ["σ","α","π","ο","λ","ι","κ","ο"] },
    { text: "βαλεμότι",  phonemes: ["β","α","λ","ε","μ","ο","τ","ι"] },
    { text: "κοθιράνα",  phonemes: ["κ","ο","θ","ι","ρ","α","ν","α"] },
    { text: "δενομάλο",  phonemes: ["δ","ε","ν","ο","μ","α","λ","ο"] },
    { text: "ρικαμόλα",  phonemes: ["ρ","ι","κ","α","μ","ο","λ","α"] },
    { text: "χαλοπίνι",  phonemes: ["χ","α","λ","ο","π","ι","ν","ι"] },
    { text: "τουλαμίκο", phonemes: ["τ","ου","λ","α","μ","ι","κ","ο"] },
    { text: "φαγελότι",  phonemes: ["φ","α","γ","ε","λ","ο","τ","ι"] }
  ],
  9: [
    { text: "λαχανικός", phonemes: ["λ","α","χ","α","ν","ι","κ","ο","σ"] },
    { text: "μοταλέκας", phonemes: ["μ","ο","τ","α","λ","ε","κ","α","σ"] },
    { text: "κρανελότι", phonemes: ["κ","ρ","α","ν","ε","λ","ο","τ","ι"] },
    { text: "φλομεκάνι", phonemes: ["φ","λ","ο","μ","ε","κ","α","ν","ι"] },
    { text: "δρεπανόλι", phonemes: ["δ","ρ","ε","π","α","ν","ο","λ","ι"] },
    { text: "στοκαλέμι", phonemes: ["σ","τ","ο","κ","α","λ","ε","μ","ι"] },
    { text: "πλανετόκι", phonemes: ["π","λ","α","ν","ε","τ","ο","κ","ι"] },
    { text: "βαλεμότος", phonemes: ["β","α","λ","ε","μ","ο","τ","ο","σ"] }
  ],
  10: [
    { text: "χελοπίτανο",  phonemes: ["χ","ε","λ","ο","π","ι","τ","α","ν","ο"] },
    { text: "γαλετοπίνα",  phonemes: ["γ","α","λ","ε","τ","ο","π","ι","ν","α"] },
    { text: "θαρομακούλι", phonemes: ["θ","α","ρ","ο","μ","α","κ","ου","λ","ι"] },
    { text: "σελοκαμίδα",  phonemes: ["σ","ε","λ","ο","κ","α","μ","ι","δ","α"] },
    { text: "μαφοτελίκο",  phonemes: ["μ","α","φ","ο","τ","ε","λ","ι","κ","ο"] },
    { text: "φανετοκόλι",  phonemes: ["φ","α","ν","ε","τ","ο","κ","ο","λ","ι"] }
  ],
  11: [
    { text: "ψαροκαλάθι",  phonemes: ["π","σ","α","ρ","ο","κ","α","λ","α","θ","ι"] },
    { text: "βρατοκανίλα", phonemes: ["β","ρ","α","τ","ο","κ","α","ν","ι","λ","α"] },
    { text: "κρεμαλοφίτο", phonemes: ["κ","ρ","ε","μ","α","λ","ο","φ","ι","τ","ο"] },
    { text: "ταπελονίκος", phonemes: ["τ","α","π","ε","λ","ο","ν","ι","κ","ο","σ"] },
    { text: "δολιμακέτρα", phonemes: ["δ","ο","λ","ι","μ","α","κ","ε","τ","ρ","α"] },
    { text: "χαλομεπίτος", phonemes: ["χ","α","λ","ο","μ","ε","π","ι","τ","ο","σ"] },
    { text: "σαμολεκίδρα", phonemes: ["σ","α","μ","ο","λ","ε","κ","ι","δ","ρ","α"] }
  ],
  12: [
    { text: "λαχανοκαλάθι", phonemes: ["λ","α","χ","α","ν","ο","κ","α","λ","α","θ","ι"] },
    { text: "μελανοκοπίτα", phonemes: ["μ","ε","λ","α","ν","ο","κ","ο","π","ι","τ","α"] },
    { text: "ταμελοκανίδα", phonemes: ["τ","α","μ","ε","λ","ο","κ","α","ν","ι","δ","α"] },
    { text: "βελοκαμιτάρο", phonemes: ["β","ε","λ","ο","κ","α","μ","ι","τ","α","ρ","ο"] },
    { text: "χαμολετοκίνα", phonemes: ["χ","α","μ","ο","λ","ε","τ","ο","κ","ι","ν","α"] },
    { text: "σαροκαλεμίδο", phonemes: ["σ","α","ρ","ο","κ","α","λ","ε","μ","ι","δ","ο"] }
  ]
};

// =========================================================
// APP STATE
// =========================================================
const $  = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

let selected      = { length: null, mode: null };
let currentWord   = null;
let currentLength = null;
let currentMode   = null;
let selectedCardEl = null;
let lastWordIdx   = {};
let greekVoice    = null;

function loadVoices() {
  const voices = speechSynthesis.getVoices();
  greekVoice = voices.find(v => /^el(-|_|$)/i.test(v.lang)) || null;
}
if (typeof speechSynthesis !== "undefined") {
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "el-GR";
  if (greekVoice) u.voice = greekVoice;
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

const CONFETTI_COLORS = ["#8DC63F", "#ED1C24", "#00AEEF", "#F7941D", "#58595B"];
let autoNextTimer = null;

function clearAutoNext() {
  if (autoNextTimer) {
    clearTimeout(autoNextTimer);
    autoNextTimer = null;
  }
}

function launchConfetti() {
  for (let i = 0; i < 44; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = (Math.random() * 100) + "vw";
    p.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    p.style.animationDuration = (1.6 + Math.random() * 1.4) + "s";
    p.style.animationDelay = (Math.random() * 0.4) + "s";
    document.body.appendChild(p);
    // animationend δεν έρχεται με prefers-reduced-motion, οπότε και timeout
    p.addEventListener("animationend", () => p.remove());
    setTimeout(() => p.remove(), 3600);
  }
}

// Οι άτονες μεμονωμένες συλλαβές προφέρονται αναξιόπιστα από το TTS
// (π.χ. "λε" ακούγεται "λι") — τις εκφωνούμε πάντα τονισμένες.
function accentSyllable(t) {
  if (t.includes("ου")) return t.replace("ου", "ού");
  return t.replace("α", "ά").replace("ε", "έ").replace("ι", "ί").replace("ο", "ό");
}

function speakSyllable(t) {
  speak(accentSyllable(t));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =========================================================
// HOME SCREEN
// =========================================================
const SYLLABLE_LENGTHS = [2, 3, 4, 5, 6];
const PHONEME_LENGTHS  = [4, 5, 6, 7, 8, 9, 10];
const PSEUDO_LENGTHS   = [8, 9, 10, 11, 12];

const MODES = {
  A: { kind: "build", unit: "syllable", lengths: SYLLABLE_LENGTHS, bank: WORDS },
  B: { kind: "read",  unit: "syllable", lengths: SYLLABLE_LENGTHS, bank: WORDS },
  C: { kind: "build", unit: "phoneme",  lengths: PHONEME_LENGTHS,  bank: PHONEME_WORDS },
  D: { kind: "read",  unit: "phoneme",  lengths: PHONEME_LENGTHS,  bank: PHONEME_WORDS },
  E: { kind: "build", unit: "phoneme",  lengths: PSEUDO_LENGTHS,   bank: PSEUDO_WORDS, pseudo: true }
};

function getMode(mode = currentMode) {
  return MODES[mode] || MODES.A;
}

function isPhonemeMode(mode = currentMode) {
  return getMode(mode).unit === "phoneme";
}

function setLengthOptions(mode) {
  const config = getMode(mode || "A");
  $("#length-label").textContent = config.unit === "phoneme" ? "Πόσα φωνήματα" : "Πόσες συλλαβές";
  const container = $("#length-choices");
  container.innerHTML = config.lengths
    .map(n => `<button class="choice-btn" data-len="${n}">${n}</button>`)
    .join("");
  $$("#length-choices .choice-btn").forEach(b => {
    b.addEventListener("click", () => {
      $$("#length-choices .choice-btn").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
      selected.length = parseInt(b.dataset.len, 10);
      updateStartBtn();
    });
  });
  // Reset length selection whenever the option set changes
  selected.length = null;
  updateStartBtn();
}

// Initial render (syllable lengths by default)
setLengthOptions(null);

$$("#mode-choices .choice-btn").forEach(b => {
  b.addEventListener("click", () => {
    $$("#mode-choices .choice-btn").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    const newMode = b.dataset.mode;
    const prevLengths = selected.mode ? getMode(selected.mode).lengths : SYLLABLE_LENGTHS;
    const nextLengths = getMode(newMode).lengths;
    selected.mode = newMode;
    if (prevLengths.join() !== nextLengths.join()) setLengthOptions(newMode);
    updateStartBtn();
  });
});

// =========================================================
// SETTINGS  (⚙️ — persisted in localStorage)
// =========================================================
const SETTINGS_KEY = "proanagnosi_settings";
const settings = { pseudowords: false };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}); } catch (e) {}

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
}

function applySettings() {
  $('[data-mode="E"]').hidden = !settings.pseudowords;
  if (!settings.pseudowords && selected.mode === "E") {
    selected.mode = null;
    $$("#mode-choices .choice-btn").forEach(x => x.classList.remove("selected"));
    setLengthOptions(null);
  }
  updateStartBtn();
}

function closeSettings() {
  $("#settings-modal").hidden = true;
}

$("#settings-btn").addEventListener("click", () => {
  $("#toggle-pseudo").checked = settings.pseudowords;
  $("#settings-modal").hidden = false;
});
$("#settings-close").addEventListener("click", closeSettings);
$("#settings-modal").addEventListener("click", e => {
  if (e.target === $("#settings-modal")) closeSettings();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !$("#settings-modal").hidden) closeSettings();
});
$("#toggle-pseudo").addEventListener("change", e => {
  settings.pseudowords = e.target.checked;
  saveSettings();
  applySettings();
});
applySettings();

function updateStartBtn() {
  $("#start-btn").disabled = !(selected.length && selected.mode);
}

$("#start-btn").addEventListener("click", () => {
  if (!selected.length || !selected.mode) return;
  startRound(selected.length, selected.mode);
});

$$(".back-btn").forEach(b => b.addEventListener("click", goHome));
$('[data-action="new-a"]').addEventListener("click", () => startRound(currentLength, currentMode));
$('[data-action="new-b"]').addEventListener("click", () => startRound(currentLength, currentMode));

// Helpers for mode-aware lookups
function getCurrentDict()  { return isPhonemeMode() ? PHONEMES : SYLLABLES; }
function getTargetParts(w) { return isPhonemeMode() ? (w || currentWord).phonemes : (w || currentWord).syllables; }

function goHome() {
  clearAutoNext();
  cancelDrag();
  if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
  $("#screen-home").hidden    = false;
  $("#screen-mode-a").hidden  = true;
  $("#screen-mode-b").hidden  = true;
}

// =========================================================
// ROUND
// =========================================================
function startRound(len, mode) {
  clearAutoNext();
  cancelDrag();
  currentLength = len;
  currentMode   = mode;
  const config = getMode(mode);
  const candidates = config.bank[len];
  if (!candidates || candidates.length === 0) {
    alert("Δεν υπάρχουν ακόμη λέξεις για αυτό το μήκος.");
    return;
  }
  const key = mode + "_" + len;
  let idx;
  if (candidates.length === 1) {
    idx = 0;
  } else {
    do {
      idx = Math.floor(Math.random() * candidates.length);
    } while (idx === lastWordIdx[key]);
  }
  lastWordIdx[key] = idx;
  currentWord = candidates[idx];

  if (config.kind === "build") renderBuild();
  else                          renderRead();
}

// =========================================================
// MODES A/C: Build the word
// =========================================================
function renderBuild() {
  $("#screen-home").hidden    = true;
  $("#screen-mode-b").hidden  = true;
  $("#screen-mode-a").hidden  = false;

  const phonemeMode = isPhonemeMode();
  const target = getTargetParts();
  const dict = getCurrentDict();
  $("#build-heading").textContent = getMode().pseudo
    ? "Άκουσε την ψευδολέξη και βάλε τα φωνήματα στη σειρά"
    : phonemeMode
      ? "Άκουσε τη λέξη και βάλε τα φωνήματα στη σειρά"
      : "Άκουσε τη λέξη και βάλε τις συλλαβές στη σειρά";

  const slotsEl = $("#slots-a");
  slotsEl.innerHTML = "";
  slotsEl.classList.toggle("phoneme-build", phonemeMode);
  for (let i = 0; i < target.length; i++) {
    const s = document.createElement("div");
    s.className   = "slot";
    s.dataset.idx = String(i);
    s.dataset.position = String(i + 1);
    s.tabIndex = 0;
    s.setAttribute("role", "button");
    s.setAttribute("aria-label", `Θέση ${i + 1}`);
    s.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        s.click();
      }
    });
    slotsEl.appendChild(s);
  }

  const needed     = target.slice();
  const usedSet    = new Set(needed);
  const allKeys    = Object.keys(dict);
  const available  = allKeys.filter(k => !usedSet.has(k));
  shuffle(available);
  let distractorCount;
  if (phonemeMode) {
    if (target.length <= 4)      distractorCount = 5;
    else if (target.length <= 6) distractorCount = 6;
    else if (target.length <= 8) distractorCount = 7;
    else                         distractorCount = 8;
  } else {
    if (target.length <= 2)      distractorCount = 4;
    else if (target.length === 3) distractorCount = 5;
    else                          distractorCount = 6;
  }
  const distractors = available.slice(0, distractorCount);
  const palette     = shuffle(needed.concat(distractors));

  const palEl = $("#palette-a");
  palEl.innerHTML = "";
  palette.forEach((id, i) => palEl.appendChild(makeCard(id, i)));

  $("#feedback-a").textContent = "";
  $("#feedback-a").className   = "feedback";
  selectedCardEl = null;

  speak(currentWord.text);
}

$("#listen-a").addEventListener("click", () => speak(currentWord.text));

function cardVisualHTML(s) {
  return `<img class="card-img" src="${s.image}" alt="${s.word}" loading="eager" decoding="async" width="640" height="640">`;
}

function makeCard(id, paletteIdx) {
  const s = getCurrentDict()[id];
  const c = document.createElement("div");
  c.className   = "card";
  c.dataset.id  = id;
  c.dataset.idx = String(paletteIdx);
  c.tabIndex = 0;
  c.setAttribute("role", "button");
  c.setAttribute("aria-label", `${s.text}, ${s.word}`);
  c.setAttribute("draggable", "false");
  c.innerHTML = `${cardVisualHTML(s)}<span class="text">${s.text}</span>`;
  c.addEventListener("pointerdown", onPointerDown);
  c.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTap(c);
    }
  });
  c.addEventListener("dragstart", e => e.preventDefault());
  return c;
}

// ---- Drag & Drop (pointer events: mouse + touch + pen) ----
let drag = null;
const DRAG_THRESHOLD = 5;

// Ακυρώνει ενεργό σύρσιμο (π.χ. όταν αλλάζει λέξη/οθόνη στη μέση του drag),
// αλλιώς η παλιά κάρτα μπορεί να "μπει" στο νέο ταμπλό στο pointerup.
function cancelDrag() {
  if (!drag) return;
  const card = drag.card;
  document.removeEventListener("pointermove",   onPointerMove);
  document.removeEventListener("pointerup",     onPointerUp);
  document.removeEventListener("pointercancel", onPointerUp);
  try { card.releasePointerCapture(drag.pointerId); } catch (err) {}
  if (drag.lastDropTarget) drag.lastDropTarget.classList.remove("drop-target");
  card.remove();
  drag = null;
}

function onPointerDown(e) {
  if (getMode().kind !== "build") return;
  if (e.button !== undefined && e.button !== 0) return;
  const card = e.currentTarget;
  if (drag) return; // ignore secondary pointers
  e.preventDefault();
  const rect = card.getBoundingClientRect();
  drag = {
    card,
    origin: card.parentElement,
    pointerId: e.pointerId,
    startX: e.clientX,
    startY: e.clientY,
    grabDX: e.clientX - rect.left,   // pointer offset inside card
    grabDY: e.clientY - rect.top,
    width: rect.width,
    height: rect.height,
    moved: false,
    lastDropTarget: null
  };
  try { card.setPointerCapture(e.pointerId); } catch (err) {}
  // Listen on document so move/up always fire even if the card loses
  // hit-testing (e.g. pointer-events:none during drag) or pointer capture is lost.
  document.addEventListener("pointermove",   onPointerMove);
  document.addEventListener("pointerup",     onPointerUp);
  document.addEventListener("pointercancel", onPointerUp);
}

function onPointerMove(e) {
  if (!drag) return;
  if (e.pointerId !== drag.pointerId) return;
  const dx = e.clientX - drag.startX;
  const dy = e.clientY - drag.startY;
  if (!drag.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
    drag.moved = true;
    const c = drag.card;
    // Don't reparent — pop out via position:fixed in place
    c.style.width  = drag.width  + "px";
    c.style.height = drag.height + "px";
    c.style.margin = "0";
    c.style.position = "fixed";
    c.style.left = (e.clientX - drag.grabDX) + "px";
    c.style.top  = (e.clientY - drag.grabDY) + "px";
    c.style.pointerEvents = "none";
    c.classList.add("dragging");
    c.classList.remove("selected");
    if (selectedCardEl === c) selectedCardEl = null;
    if (drag.origin && drag.origin.classList && drag.origin.classList.contains("slot")) {
      drag.origin.classList.remove("filled", "correct", "wrong");
    }
  }
  if (drag.moved) {
    drag.card.style.left = (e.clientX - drag.grabDX) + "px";
    drag.card.style.top  = (e.clientY - drag.grabDY) + "px";
    // Highlight slot under pointer
    const els = document.elementsFromPoint(e.clientX, e.clientY);
    const slot = els.find(el => el.classList && el.classList.contains("slot"));
    if (drag.lastDropTarget && drag.lastDropTarget !== slot) {
      drag.lastDropTarget.classList.remove("drop-target");
    }
    if (slot && !slot.classList.contains("filled")) {
      slot.classList.add("drop-target");
      drag.lastDropTarget = slot;
    } else {
      drag.lastDropTarget = null;
    }
  }
}

function onPointerUp(e) {
  if (!drag) return;
  if (e.pointerId !== drag.pointerId) return;
  const card = drag.card;
  document.removeEventListener("pointermove",   onPointerMove);
  document.removeEventListener("pointerup",     onPointerUp);
  document.removeEventListener("pointercancel", onPointerUp);
  try { card.releasePointerCapture(drag.pointerId); } catch (err) {}

  if (!drag.moved) {
    drag = null;
    handleTap(card);
    return;
  }

  const els = document.elementsFromPoint(e.clientX, e.clientY);
  const slot = els.find(el => el.classList && el.classList.contains("slot"));

  card.classList.remove("dragging");
  card.style.position = "";
  card.style.left = "";
  card.style.top = "";
  card.style.width = "";
  card.style.height = "";
  card.style.margin = "";
  card.style.pointerEvents = "";
  if (drag.lastDropTarget) drag.lastDropTarget.classList.remove("drop-target");

  let dest;
  if (slot) {
    if (slot.classList.contains("filled")) {
      const existing = slot.querySelector(".card");
      if (existing && existing !== card) {
        $("#palette-a").appendChild(existing);
      }
    }
    dest = slot;
    slot.classList.add("filled");
    slot.classList.remove("correct", "wrong");
  } else {
    dest = $("#palette-a");
  }
  if (card.parentElement !== dest) dest.appendChild(card);

  drag = null;
}

function handleTap(card) {
  if (card.parentElement && card.parentElement.classList.contains("slot")) {
    const slot = card.parentElement;
    $("#palette-a").appendChild(card);
    slot.classList.remove("filled", "correct", "wrong");
    return;
  }
  if (selectedCardEl === card) {
    card.classList.remove("selected");
    selectedCardEl = null;
  } else {
    if (selectedCardEl) selectedCardEl.classList.remove("selected");
    card.classList.add("selected");
    selectedCardEl = card;
    // Στις συλλαβές η κάρτα "μιλάει" όταν επιλέγεται· στα φωνήματα όχι
    // (το TTS θα έλεγε το όνομα του γράμματος, π.χ. "βήτα").
    if (!isPhonemeMode()) {
      const s = getCurrentDict()[card.dataset.id];
      if (s) speakSyllable(s.text);
    }
  }
}

// Tap-to-place (fallback) — clicking an empty slot with a card selected
$("#slots-a").addEventListener("click", (e) => {
  const slot = e.target.closest(".slot");
  if (!slot) return;
  if (slot.classList.contains("filled")) return;
  if (!selectedCardEl) return;
  slot.appendChild(selectedCardEl);
  slot.classList.add("filled");
  slot.classList.remove("correct", "wrong");
  selectedCardEl.classList.remove("selected");
  selectedCardEl = null;
});

$("#check-btn").addEventListener("click", () => {
  const slots  = $$("#slots-a .slot");
  const target = getTargetParts();
  let allFilled  = true;
  let allCorrect = true;
  slots.forEach((slot, i) => {
    const card = slot.querySelector(".card");
    if (!card) { allFilled = false; return; }
    if (card.dataset.id === target[i]) {
      slot.classList.add("correct");
      slot.classList.remove("wrong");
    } else {
      slot.classList.add("wrong");
      slot.classList.remove("correct");
      allCorrect = false;
    }
  });
  const fb = $("#feedback-a");
  if (!allFilled) {
    fb.textContent = "Συμπλήρωσε όλες τις θέσεις";
    fb.className   = "feedback";
  } else if (allCorrect) {
    fb.textContent = "Μπράβο! 🎉  " + currentWord.text;
    fb.className   = "feedback success";
    speak(currentWord.text);
    launchConfetti();
    clearAutoNext();
    autoNextTimer = setTimeout(() => {
      autoNextTimer = null;
      startRound(currentLength, currentMode);
    }, 3200);
  } else {
    fb.textContent = "Δοκίμασε ξανά!";
    fb.className   = "feedback error";
  }
});

// =========================================================
// MODES B/D: Read the word
// =========================================================
function renderRead() {
  $("#screen-home").hidden    = true;
  $("#screen-mode-a").hidden  = true;
  $("#screen-mode-b").hidden  = false;

  const phonemeMode = isPhonemeMode();
  const dict = getCurrentDict();
  $("#read-heading").textContent = phonemeMode
    ? "Διάβασε τη λέξη φώνημα-φώνημα"
    : "Διάβασε τη λέξη συλλαβή-συλλαβή";

  const row = $("#read-row");
  row.innerHTML = "";
  getTargetParts().forEach(id => {
    const s = dict[id];
    const c = document.createElement("div");
    c.className = "card read-card";
    c.innerHTML = `${cardVisualHTML(s)}<span class="text">${s.text}</span>`;
    if (!phonemeMode) {
      c.classList.add("tappable");
      c.tabIndex = 0;
      c.setAttribute("role", "button");
      c.setAttribute("aria-label", `Άκουσε: ${s.text}`);
      const sayIt = () => speakSyllable(s.text);
      c.addEventListener("click", sayIt);
      c.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          sayIt();
        }
      });
    }
    row.appendChild(c);
  });
  $("#hint-b").textContent = phonemeMode ? "" : "Πάτησε μια συλλαβή για να την ακούσεις";
}

$("#listen-b").addEventListener("click", () => speak(currentWord.text));
