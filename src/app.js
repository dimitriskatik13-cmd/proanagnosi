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

let autoNextTimer = null;

function clearAutoNext() {
  if (autoNextTimer) { clearTimeout(autoNextTimer); autoNextTimer = null; }
}

// =========================================================
// ΕΠΙΒΡΑΒΕΥΣΗ · αντιγραφή του μηχανισμού «Σωστό!» / «Μπράβο!» του Χτίζω πρόταση
// (src/reward.js και celebrate() του app.js). Μία απόκλιση: αν το onCelebrate ακυρώσει
// την επιβράβευση (λάθος σειρά), δεν προγραμματίζεται επόμενη λέξη.
// =========================================================
const HOLD_MS = 1000;
const NEXT_MS = 2000;
class Reward {
  constructor({ready,onHold=()=>{},onCancelHold=()=>{},onCelebrate,onNext,onReset=()=>{},clock=globalThis}) {
    Object.assign(this,{ready,onHold,onCancelHold,onCelebrate,onNext,onReset,clock});this.phase='idle';this.timer=null;this.input=null;
  }
  start(input){if(this.phase!=='idle'||!this.ready())return false;this.phase='holding';this.input=input;this.onHold();this.timer=this.clock.setTimeout(()=>{
    this.timer=null;if(!this.ready()){this.cancel();return;}this.phase='celebrating';this.input=null;this.onCancelHold();this.onCelebrate();
    if(this.phase!=='celebrating')return;
    this.timer=this.clock.setTimeout(()=>{this.timer=null;this.phase='idle';this.onReset();this.onNext();},NEXT_MS);
  },HOLD_MS);return true;}
  cancelHold(){if(this.phase==='holding')this.cancel();}
  cancel(){this.clock.clearTimeout(this.timer);this.timer=null;this.phase='idle';this.input=null;this.onCancelHold();this.onReset();}
}
let layer = null;
let celebrating = false;

function celebrate(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;layer=document.createElement('div');layer.className='success-celebration'+(reduced?' reduced':'');layer.setAttribute('aria-hidden','true');
  layer.innerHTML='<span class="success-burst"></span><div class="success-emblem"><span class="success-ring"></span><span class="success-star star-left"></span><span class="success-star star-right"></span><span class="success-star star-top"></span><span class="success-star star-bottom-left"></span><span class="success-star star-bottom-right"></span><span class="success-check">✓</span><strong>Μπράβο!</strong></div>';
  if(!reduced){const colors=['#8DC63F','#ED1C24','#00AEEF','#F7941D'],count=44;for(let i=0;i<count;i++){
    const wave=i%2,piece=document.createElement('i');piece.className='success-confetti'+(i%3===0?' round':'')+(i%5===0?' big':'');
    const angle=Math.PI*2*i/count+(wave?0.14:0),reach=(wave?150:220)+(i%4)*38;
    piece.style.setProperty('--dx',Math.round(Math.cos(angle)*reach)+'px');piece.style.setProperty('--dy',Math.round(Math.sin(angle)*reach)+'px');piece.style.setProperty('--turn',(i%2?-1:1)*(160+i*23)+'deg');piece.style.setProperty('--delay',(wave*110+(i%3)*30)+'ms');piece.style.background=colors[i%4];layer.append(piece);
  }}document.body.append(layer);
}

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

const MODES = {
  A: { kind: "build", unit: "syllable", lengths: SYLLABLE_LENGTHS, bank: WORDS },
  B: { kind: "read",  unit: "syllable", lengths: SYLLABLE_LENGTHS, bank: WORDS },
  C: { kind: "build", unit: "phoneme",  lengths: PHONEME_LENGTHS,  bank: PHONEME_WORDS },
  D: { kind: "read",  unit: "phoneme",  lengths: PHONEME_LENGTHS,  bank: PHONEME_WORDS }
};
const MODE_NAMES = { A: "Φτιάξε τη λέξη", B: "Διάβασε τη λέξη", C: "Φτιάξε με φωνήματα", D: "Διάβασε με φωνήματα" };

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
const settings = { extra: "auto", pseudo: { A: false, B: false, C: false, D: false } };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}); } catch (e) {}
// Παλιά μορφή (ενιαίος διακόπτης πέμπτης δραστηριότητας) δεν χρησιμοποιείται πλέον.
delete settings.pseudowords;
if (!settings.pseudo || typeof settings.pseudo !== "object") settings.pseudo = {};
for (const m of ["A", "B", "C", "D"]) settings.pseudo[m] = settings.pseudo[m] === true;
function isPseudo(mode = currentMode) { return !!settings.pseudo[mode]; }

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
}

function applySettings() {
  updateStartBtn();
}

function closeSettings() {
  $("#settings-modal").hidden = true;
}

// Επιπλέον κάρτες: "auto" = ο υπάρχων κανόνας ανά μήκος, αλλιώς σταθερός αριθμός 0-8.
const EXTRA_VALUES = ["auto", "0", "2", "4", "6", "8"];
if (!EXTRA_VALUES.includes(String(settings.extra))) settings.extra = "auto";

function autoDistractorCount(targetLength, phonemeMode) {
  if (phonemeMode) {
    if (targetLength <= 4) return 5;
    if (targetLength <= 6) return 6;
    if (targetLength <= 8) return 7;
    return 8;
  }
  if (targetLength <= 2) return 4;
  if (targetLength === 3) return 5;
  return 6;
}

function distractorCountFor(targetLength, phonemeMode) {
  if (settings.extra === "auto") return autoDistractorCount(targetLength, phonemeMode);
  return Number(settings.extra);
}

function renderExtraChoices() {
  $$("#extra-choices .choice-btn").forEach(b => {
    const on = b.dataset.extra === String(settings.extra);
    b.classList.toggle("selected", on);
    b.setAttribute("aria-pressed", String(on));
  });
  $("#extra-note").textContent = settings.extra === "auto"
    ? "Αυτόματα: 4–6 επιπλέον στις συλλαβές, 5–8 στα φωνήματα, ανάλογα με το μήκος της λέξης."
    : `Σταθερά ${settings.extra} επιπλέον κάρτες σε κάθε λέξη.`;
}

function openSettings() {
  $("#toggle-pseudo").checked = isPseudo();
  $("#pseudo-activity").textContent = MODE_NAMES[currentMode] || "";
  renderExtraChoices();
  $("#settings-modal").hidden = false;
  $("#settings-close").focus({ preventScroll: true });
}

$$('[data-action="settings"]').forEach(b => b.addEventListener("click", openSettings));
$("#settings-close").addEventListener("click", closeSettings);
$("#settings-close-x").addEventListener("click", closeSettings);
$("#extra-choices").addEventListener("click", e => {
  const b = e.target.closest("[data-extra]");
  if (!b) return;
  settings.extra = b.dataset.extra;
  saveSettings();
  renderExtraChoices();
  refreshPaletteIfPlaying();
});
$("#settings-modal").addEventListener("click", e => {
  if (e.target === $("#settings-modal")) closeSettings();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !$("#settings-modal").hidden) closeSettings();
});
$("#toggle-pseudo").addEventListener("change", e => {
  if (!currentMode) return;
  settings.pseudo[currentMode] = e.target.checked;
  saveSettings();
  // Αλλάζει ο τύπος λέξης, άρα ξεκινά αμέσως νέα λέξη του νέου τύπου.
  startRound(currentLength, currentMode);
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
  if (typeof reward !== "undefined") reward.cancel();
  cancelDrag();
  if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
  $("#screen-home").hidden    = false;
  $("#screen-mode-a").hidden  = true;
  $("#screen-mode-b").hidden  = true;
}

// =========================================================
// ΨΕΥΔΟΛΕΞΕΙΣ · παράγονται από τα υπάρχοντα κομμάτια (συλλαβές/φωνήματα) του λεξιλογίου
// =========================================================
const PSEUDO_VOWELS = new Set(["α", "ε", "ι", "ο", "ου"]);
const stripAccents = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const REAL_WORDS = new Set();
for (const bank of [WORDS, PHONEME_WORDS]) for (const len of Object.keys(bank)) for (const w of bank[len]) REAL_WORDS.add(stripAccents(w.text));
let lastPseudoText = null;

function randomOf(arr, avoid) {
  let pick;
  do { pick = arr[Math.floor(Math.random() * arr.length)]; } while (arr.length > 1 && pick === avoid);
  return pick;
}

// Τόνος στην παραλήγουσα (ή στη μοναδική φωνηεντική μονάδα) για φυσική εκφώνηση.
function accentParts(parts, phonemeMode) {
  const vowelIdx = parts.map((p, i) => (phonemeMode ? PSEUDO_VOWELS.has(p) : true) ? i : -1).filter(i => i >= 0);
  const idx = vowelIdx.length >= 2 ? vowelIdx[vowelIdx.length - 2] : vowelIdx[0];
  return parts.map((p, i) => i === idx ? accentSyllable(p) : p).join("");
}

function makePseudoWord(mode, len) {
  const phonemeMode = getMode(mode).unit === "phoneme";
  // Φωνήματα 8-10: προτιμώνται οι επιμελημένες ψευδολέξεις της τράπεζας.
  if (phonemeMode && PSEUDO_WORDS[len] && PSEUDO_WORDS[len].length) {
    const w = randomOf(PSEUDO_WORDS[len].filter(x => x.phonemes.every(p => PHONEMES[p])), null);
    if (w && w.text !== lastPseudoText) { lastPseudoText = w.text; return w; }
  }
  const keys = Object.keys(phonemeMode ? PHONEMES : SYLLABLES);
  const vowels = keys.filter(k => PSEUDO_VOWELS.has(k));
  const consonants = keys.filter(k => !PSEUDO_VOWELS.has(k));
  for (let tries = 0; tries < 60; tries++) {
    const parts = [];
    if (phonemeMode) {
      // Ζυγό μήκος: ΣΦΣΦ…  Μονό μήκος: ΦΣΦΣ…Φ. Πάντα τελειώνει σε φωνήεν.
      let consonantTurn = len % 2 === 0;
      for (let i = 0; i < len; i++) {
        const pool = consonantTurn ? consonants : vowels;
        parts.push(randomOf(pool, parts[parts.length - 2]));
        consonantTurn = !consonantTurn;
      }
    } else {
      for (let i = 0; i < len; i++) parts.push(randomOf(keys, parts[parts.length - 1]));
    }
    const plain = parts.join("");
    if (REAL_WORDS.has(plain) || plain === lastPseudoText) continue;
    lastPseudoText = plain;
    const text = accentParts(parts, phonemeMode);
    return phonemeMode ? { text, phonemes: parts } : { text, syllables: parts };
  }
  return phonemeMode ? { text: "λαμοτίκα", phonemes: ["λ","α","μ","ο","τ","ι","κ","α"].slice(0, len) } : { text: "καλόνε", syllables: ["κα","λο","νε"].slice(0, len) };
}

// =========================================================
// ROUND
// =========================================================
function startRound(len, mode) {
  clearAutoNext();
  if (typeof reward !== "undefined" && reward.phase !== "idle") reward.cancel();
  cancelDrag();
  currentLength = len;
  currentMode   = mode;
  const config = getMode(mode);
  const candidates = config.bank[len];
  if (!candidates || candidates.length === 0) {
    alert("Δεν υπάρχουν ακόμη λέξεις για αυτό το μήκος.");
    return;
  }
  if (isPseudo(mode)) {
    currentWord = makePseudoWord(mode, len);
  } else {
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
  }

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
  $("#build-heading").textContent = isPseudo()
    ? (phonemeMode ? "Άκουσε την ψευδολέξη και βάλε τα φωνήματα στη σειρά" : "Άκουσε την ψευδολέξη και βάλε τις συλλαβές στη σειρά")
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

  buildPalette(false);

  $("#feedback-a").textContent = "";
  $("#feedback-a").className   = "feedback";
  updateCheckBtn();

  speak(currentWord.text);
}

// Χτίζει την παλέτα: σωστά κομμάτια (χωρίς όσα είναι ήδη σε θέση, όταν keepPlaced) + παραπλανητικές κάρτες.
function buildPalette(keepPlaced) {
  const phonemeMode = isPhonemeMode();
  const target = getTargetParts();
  const dict = getCurrentDict();
  const needed = target.slice();
  if (keepPlaced) {
    $$("#slots-a .slot .card").forEach(c => {
      const i = needed.indexOf(c.dataset.id);
      if (i > -1) needed.splice(i, 1);
    });
  }
  const usedSet    = new Set(target);
  const available  = Object.keys(dict).filter(k => !usedSet.has(k));
  shuffle(available);
  const distractorCount = Math.min(distractorCountFor(target.length, phonemeMode), available.length);
  const distractors = available.slice(0, distractorCount);
  const palette     = shuffle(needed.concat(distractors));

  const palEl = $("#palette-a");
  palEl.innerHTML = "";
  palette.forEach((id, i) => palEl.appendChild(makeCard(id, i)));
  selectedCardEl = null;
}

// Αλλαγή «Επιπλέον κάρτες» ενώ παίζεται λέξη: η παλέτα ανανεώνεται αμέσως, οι τοποθετημένες κάρτες μένουν.
function refreshPaletteIfPlaying() {
  if ($("#screen-mode-a").hidden) return;
  cancelDrag();
  buildPalette(true);
}

$("#listen-a").addEventListener("click", () => speak(currentWord.text));

function cardVisualHTML(s) {
  // Οι κάρτες δείχνουν την έκδοση 200 px (εμφάνιση 58–76 px, οθόνες retina). Τα 640 px παραμένουν πηγή του content.
  return `<img class="card-img" src="${s.image.replace('assets/illustrations/', 'assets/illustrations-200/')}" alt="${s.word}" loading="eager" decoding="async" width="200" height="200">`;
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
  if (celebrating) return;
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
  if (celebrating) return;
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
  if (celebrating) return;
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

function allSlotsFilled() {
  const slots = $$("#slots-a .slot");
  return slots.length > 0 && slots.every(slot => slot.querySelector(".card"));
}
function updateCheckBtn() {
  $("#check-btn").disabled = celebrating || $("#screen-mode-a").hidden || !allSlotsFilled();
}
new MutationObserver(updateCheckBtn).observe($("#slots-a"), { childList: true, subtree: true });
const buildButtons = () => $$('#screen-mode-a button:not(.back-btn)');

const reward = new Reward({
  ready: () => !$("#screen-mode-a").hidden && !celebrating && allSlotsFilled() && !document.hidden,
  onHold: () => $("#check-btn").classList.add("holding"),
  onCancelHold: () => $("#check-btn").classList.remove("holding"),
  onCelebrate: () => {
    const slots  = $$("#slots-a .slot");
    const target = getTargetParts();
    let allCorrect = true;
    slots.forEach((slot, i) => {
      const card = slot.querySelector(".card");
      const ok = !!card && card.dataset.id === target[i];
      slot.classList.toggle("correct", ok);
      slot.classList.toggle("wrong", !ok);
      if (!ok) allCorrect = false;
    });
    const fb = $("#feedback-a");
    if (!allCorrect) {
      fb.textContent = "Δοκίμασε ξανά!";
      fb.className   = "feedback error";
      reward.cancel();
      return;
    }
    celebrating = true;
    cancelDrag();
    if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
    closeSettings();
    $("#screen-mode-a").classList.add("is-celebrating");
    buildButtons().forEach(b => b.disabled = true);
    fb.textContent = "🌟 Μπράβο! " + currentWord.text;
    fb.className   = "feedback success";
    speak(currentWord.text);
    celebrate();
  },
  onReset: () => {
    if (layer) { layer.remove(); layer = null; }
    celebrating = false;
    $("#screen-mode-a").classList.remove("is-celebrating");
    buildButtons().forEach(b => b.disabled = false);
    updateCheckBtn();
  },
  onNext: () => startRound(currentLength, currentMode)
});

const correct = $("#check-btn");
correct.style.setProperty("--hold-duration", HOLD_MS + "ms");
correct.addEventListener("pointerdown", e => { if (e.button > 0 || e.isPrimary === false) return; reward.start({ kind: "pointer", id: e.pointerId }); });
const endPointer = e => { if (reward.input?.kind === "pointer" && reward.input.id === e.pointerId) reward.cancelHold(); };
for (const name of ["pointerup", "pointercancel", "pointerleave", "lostpointercapture"]) correct.addEventListener(name, endPointer);
document.addEventListener("pointerup", endPointer);
document.addEventListener("pointercancel", endPointer);
document.addEventListener("pointermove", e => {
  if (reward.input?.kind !== "pointer" || reward.input.id !== e.pointerId) return;
  const r = correct.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) reward.cancelHold();
});
correct.addEventListener("keydown", e => { if (!["Enter", " "].includes(e.key)) return; e.preventDefault(); if (!e.repeat) reward.start({ kind: "keyboard", key: e.key }); });
correct.addEventListener("keyup", e => { if (!["Enter", " "].includes(e.key)) return; e.preventDefault(); if (reward.input?.key === e.key) reward.cancelHold(); });
document.addEventListener("visibilitychange", () => { if (document.hidden) reward.cancel(); });

// =========================================================
// MODES B/D: Read the word
// =========================================================
function renderRead() {
  $("#screen-home").hidden    = true;
  $("#screen-mode-a").hidden  = true;
  $("#screen-mode-b").hidden  = false;

  const phonemeMode = isPhonemeMode();
  const dict = getCurrentDict();
  $("#read-heading").textContent = isPseudo()
    ? (phonemeMode ? "Διάβασε την ψευδολέξη φώνημα-φώνημα" : "Διάβασε την ψευδολέξη συλλαβή-συλλαβή")
    : phonemeMode
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
