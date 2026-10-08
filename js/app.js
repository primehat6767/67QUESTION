(function () {
  "use strict";
const BG_PATTERN = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='rgb(97, 166, 250)'/><path d='M14.499 11.82L4.36 5.968l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.029l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.117L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z' stroke-linecap='square' stroke-width='0.5' stroke='hsla(213, 99%, 23%, 1)' fill='none'/></pattern></defs><rect width='800%25' height='800%25' transform='translate(0,-0.46)' fill='url(%23a)'/></svg>";

const ICON_PREV = `<span role="img" class="mdi"><svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg></span>`;
const ICON_NEXT = `<span role="img" class="mdi"><svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></span>`;

function headerHTML() {
  return `
    <div class="pt-6 pb-24 shadow-sm border-gray-300 px-4 bg-gradient-to-r text-white" style="background-image: url(&quot;${BG_PATTERN.replace(/"/g, "&quot;")}&quot;);">
      <div class="flex justify-between flex-col sm:flex-row">
        <div class="flex items-center space-x-1">
          <div class="h-16 w-16 bg-white py-1 px-1 rounded-md items-center justify-center flex">
            <img src="${CONFIG.schoolLogo}" alt="Extraordinary CBT Logi" class="h-12 w-12 object-cover">
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">${CONFIG.schoolName}</p>
            <p class="text-sm text-gray-100">${CONFIG.schoolCity}</p>
          </div>
        </div>
        <div class="flex space-x-2 justify-end">
          <div class="flex flex-col">
            <p class="font-semibold text-right">${CONFIG.studentName}</p>
            <p class="text-sm text-right">${CONFIG.studentId}</p>
          </div>
          <button class="h-12 w-12 flex items-center justify-center bg-white text-gray-600 rounded-md hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 feather feather-log-out">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>`;
}

function soalHTML(no, state) {
  const total = QUESTIONS.length;
  const q = QUESTIONS[no - 1];
  const selected = state.jawaban[String(no)];
  const isRagu = state.ragu.includes(no);
  const answered = Object.keys(state.jawaban).map(Number);

  const daftar = Array.from({ length: total }, (_, k) => k + 1).map((i) => {
    const cls = i === no
      ? "bg-blue-500 text-white border-blue-500"
      : answered.includes(i)
        ? "bg-green-100 border-green-400 text-green-700"
        : "border-gray-400 text-gray-700";
    return `<a href="#/soal/${i}" class="w-8 h-8 flex items-center justify-center rounded border ${cls}">${i}</a>`;
  }).join("");

  const options = q.options.map((opt, idx) => `
              <div class="flex space-x-1">
                <div>
                  <div class="flex items-center mr-2 mb-4">
                    <input id="answer-radio-${idx}" type="radio" name="jwb" class="hidden" value="${idx}" ${selected === idx ? "checked" : ""}>
                    <label for="answer-radio-${idx}" class="flex items-center cursor-pointer text-xl">
                      <span class="w-6 h-6 text-sm mr-2 rounded-full border border-gray-400 flex-no-shrink flex items-center justify-center uppercase">${HURUF[idx]}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <p>${opt}</p>
                </div>
              </div>`).join("");

  const btnPrev = no > 1
    ? `<button type="button" data-go="#/soal/${no - 1}" class="py-1 pr-3 border-2 rounded-md hover:shadow-lg sm:flex sm:items-center bg-red-500 text-white border-transparent">${ICON_PREV}<span class="hidden sm:block">Sebelumnya</span></button>`
    : `<button type="button" disabled class="py-1 pr-3 border-2 rounded-md sm:flex sm:items-center bg-gray-300 text-white border-transparent cursor-not-allowed">${ICON_PREV}<span class="hidden sm:block">Sebelumnya</span></button>`;

  const btnNext = no < total
    ? `<button type="button" data-go="#/soal/${no + 1}" class="py-1 pl-3 border-2 rounded-md hover:shadow-lg flex items-center text-white bg-blue-500 border-blue-500"><span class="hidden sm:block">Selanjutnya</span>${ICON_NEXT}</button>`
    : `<button type="button" data-go="#/selesai" class="py-1 pl-3 border-2 rounded-md hover:shadow-lg flex items-center text-white bg-green-500 border-green-500"><span class="hidden sm:block">Selesai</span>${ICON_NEXT}</button>`;

  return `
    ${headerHTML()}
    <div class="container md:mx-auto flex flex-col justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 -mt-12 sm:-mt-24">
      <div class="w-full lg:py-4 lg:px-4 mb-20">
        <div class="bg-white border border-gray-500 shadow sm:shadow-lg rounded-t-2xl rounded-b-2xl">
          <div class="pt-4 pb-2 pr-2 flex justify-between border-b border-gray-400 mb-2 items-center">
            <div class="flex items-center">
              <p class="relative font-bold w-10 h-10 flex items-center pl-2 text-sm rounded-r-full text-gray-700 border-t border-r border-b border-gray-500 bg-gray-200">
                <div>
                  <div class="w-6 h-6 absolute rounded -top-2 right-0">
                    <span role="img" class="mdi text-red-500">
                      <svg fill="currentColor" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z"></path></svg>
                    </span>
                  </div>
                </div>
                <span>${no}</span>
              </p>
              <div>
                <p class="font-medium text-gray-700 text-sm px-2">Pilihan ganda</p>
                <p class="text-xs px-2 text-gray-500">You're too smart to cheat</p>
              </div>
            </div>
            <div class="flex justify-end space-x-2 mb-2 items-center">
              <div class="rounded-md bg-yellow-10 px-2 text-gray-800 border-2 border-gray-400 text-sm flex font-bold">
                <span role="img" class="mdi mr-1 text-gray-500">
                  <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"></path></svg>
                </span>
                <div>${CONFIG.timer}</div>
              </div>
            </div>
          </div>

          <div class="py-2 px-2 my-2 border-b border-dashed border-gray-400 flex justify-between">
            <div class="flex flex-col"><div class=""><!----></div></div>
            <div class="flex space-x-1">
              <button type="button" id="btn-daftar" class="py-0.5 pl-1 pr-2 text-gray-600 border-b border-gray-400 hover:shadow flex items-center">
                <span role="img" class="mdi mr-2">
                  <svg fill="currentColor" width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"></path></svg>
                </span>
                <span class="text-2xs">Daftar Soal</span>
              </button>
              <button type="button" class="py-0.5 pl-1 pr-2 text-gray-600 border-b border-gray-400 hover:shadow flex items-center">
                <span role="img" class="mdi mr-2">
                  <svg fill="currentColor" width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"></path></svg>
                </span>
                <span class="text-2xs">Fokus</span>
              </button>
            </div>
          </div>

          <div id="daftar-soal-panel" class="px-2 pb-2 ${panelOpen ? "" : "hidden"}">
            <div class="flex flex-wrap gap-2">${daftar}</div>
          </div>

          <div class="px-2 flex justify-end">
            <div class="w-20">
              <label for="minmax-range" class="block text-2xs text-gray-600">Zoom size</label>
              <div>
                <input id="minmax-range" type="range" min="100" max="300" value="${zoom}" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer">
              </div>
            </div>
          </div>

          <div class="py-8 px-2 sm:px-8" id="soal-body" style="zoom: ${zoom}%;">
            <div class="my-2">
              <div>
                <p>${q.text}</p>
                ${q.image ? `<p>&nbsp;</p><p><img src="${q.image}" alt="gambar">&nbsp;</p><p>&nbsp;</p>` : ""}
              </div>
            </div>
            <div class="flex flex-col space-y-3 mt-5">${options}
            </div>
          </div>

          <div class="py-4 px-2 sm:px-4 flex justify-between border-t border-gray-400 border-dashed items-center">
            ${btnPrev}
            <div>
              <div class="flex justify-start items-start cursor-pointer" id="ragu-wrap">
                <div class="bg-white border-2 cursor-pointer rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <input type="checkbox" id="ragu-ragu" name="ragu" class="opacity-0 absolute" ${isRagu ? "checked" : ""}>
                  <svg class="fill-current ${isRagu ? "" : "hidden"} w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path></svg>
                </div>
                <label class="select-none cursor-pointer" for="ragu-ragu">ragu-ragu</label>
              </div>
            </div>
            ${btnNext}
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full border-t border-gray-300 text-gray-600 py-2 px-4 text-center bg-white">
      <span class="text-sm">© 2024 Extraordinary CBT 4.7.0-ROSETTA-COMUNITY-EDITION</span>
    </div>`;
}

const HURUF = ["a", "b", "c", "d", "e"];
const STORAGE_KEY = "cbt-state-v3";
const app = document.getElementById("app");
let panelOpen = false;
let zoom = 100;
let live = false;
let began = false;
let endGuard = null;

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (s && s.jawaban && Array.isArray(s.ragu)) return s;
  } catch (e) {}
  return { jawaban: {}, ragu: [], finished: false, stopped: false };
}
function saveState(s) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {} }
function resetState() { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} }

function selesaiHTML(state) {
  const total = QUESTIONS.length;
  let score = 0;
  QUESTIONS.forEach((q, i) => {
    const p = state.jawaban[String(i + 1)];
    if (p !== undefined && Number(p) === q.answer_index) score++;
  });
  const percent = total ? Math.round((score / total) * 100) : 0;
  const answeredCount = Object.keys(state.jawaban).length;
  const v = CBTGuard.count();
  return `
    <div class="bg-gray-100" style="min-height:100vh">
      <div class="container mx-auto max-w-lg mt-24 px-4">
        <div class="bg-white border border-gray-500 shadow rounded-2xl p-8 text-center">
          <h1 class="text-2xl font-bold mb-4">Ujian Selesai</h1>
          ${state.stopped ? '<p class="mb-2" style="color:#dc2626;font-weight:700">Ujian dihentikan otomatis karena pelanggaran.</p>' : ""}
          <p class="mb-2">Jumlah soal dijawab: ${answeredCount} / ${total}</p>
          <p class="mb-2">Skor: ${score} / ${total} (${percent}%)</p>
          <p class="mb-6">Pelanggaran tercatat: ${v}</p>
          ${CONFIG.allowRetry ? '<button type="button" id="btn-ulang" class="inline-block py-2 px-4 rounded-md text-white bg-blue-500 border-blue-500 border-2 hover:shadow-lg">Ulangi</button>' : ""}
        </div>
      </div>
    </div>`;
}

function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
function parseRoute() {
  const h = location.hash.replace(/^#/, "");
  if (h === "/selesai") return { page: "selesai" };
  const m = h.match(/^\/soal\/(\d+)$/);
  const no = m ? parseInt(m[1], 10) : 1;
  if (!m || no < 1 || no > QUESTIONS.length) return { page: "soal", no: 1, redirect: true };
  return { page: "soal", no };
}

function startExam() {
  if (began) return;
  began = true;
  CBTGuard.begin({
    max: CONFIG.maxViolations,
    onReady(end) { endGuard = end; live = true; render(); },
    onStop() { finishExam(true); },
  });
}
function finishExam(stopped) {
  if (endGuard) { endGuard(); endGuard = null; }
  live = false;
  const s = loadState();
  s.finished = true; s.stopped = !!stopped; saveState(s);
  history.replaceState(null, "", "#/selesai");
  render();
}

function render() {
  const state = loadState();
  const route = parseRoute();

  if (state.finished) {
    if (location.hash !== "#/selesai") history.replaceState(null, "", "#/selesai");
    document.title = "Extraordinary CBT - Selesai";
    app.innerHTML = selesaiHTML(state);
    const b = document.getElementById("btn-ulang");
    if (b) b.addEventListener("click", () => {
      resetState(); CBTGuard.reset();
      panelOpen = false; live = false; began = false;
      history.replaceState(null, "", "#/soal/1");
      render();
    });
    window.scrollTo(0, 0);
    return;
  }

  if (!live) {
    app.innerHTML = "";
    startExam();
    return;
  }

  if (route.page === "selesai") { history.replaceState(null, "", "#/soal/1"); render(); return; }
  if (route.redirect) history.replaceState(null, "", "#/soal/1");
  const no = route.no;
  document.title = "Extraordinary CBT";
  app.innerHTML = soalHTML(no, state);

  app.querySelectorAll('input[name="jwb"]').forEach((el) => {
    el.addEventListener("change", () => {
      const s = loadState();
      s.jawaban[String(no)] = parseInt(el.value, 10);
      saveState(s); render();
    });
  });

  function setRagu(on) {
    const s = loadState(), i = s.ragu.indexOf(no);
    if (on && i === -1) s.ragu.push(no);
    if (!on && i !== -1) s.ragu.splice(i, 1);
    saveState(s); render();
  }
  const cb = document.getElementById("ragu-ragu");
  cb.addEventListener("change", () => setRagu(cb.checked));
  document.getElementById("ragu-wrap").addEventListener("click", (e) => {
    if (e.target === cb || e.target.tagName === "LABEL") return;
    setRagu(!cb.checked);
  });

  app.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dest = btn.dataset.go;
      if (dest === "#/selesai") finishExam(false); else go(dest);
    });
  });
  document.getElementById("btn-daftar").addEventListener("click", () => {
    panelOpen = !panelOpen;
    document.getElementById("daftar-soal-panel").classList.toggle("hidden", !panelOpen);
  });
  document.getElementById("minmax-range").addEventListener("input", (e) => {
    zoom = parseInt(e.target.value, 10);
    document.getElementById("soal-body").style.zoom = zoom + "%";
  });
}

window.addEventListener("hashchange", () => { window.scrollTo(0, 0); render(); });
if (!location.hash) history.replaceState(null, "", "#/soal/1");
render();

})();
