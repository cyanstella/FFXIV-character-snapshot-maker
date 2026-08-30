/* ==========================================
   WORKER
========================================== */

const WORKER_URL =
  "https://ffxiv-character-snapshot-maker.cyan-ciel.workers.dev";


/* ==========================================
   ELEMENTS
========================================== */

const snapshot =
  document.getElementById("snapshot");

const languageToggle =
  document.getElementById("languageToggle");


/* ==========================================
   SCREENSHOT
========================================== */

const imageUpload =
  document.getElementById("imageUpload");

const snapshotImage =
  document.getElementById("snapshotImage");

const photoPlaceholder =
  document.getElementById("photoPlaceholder");

const imageXInput =
  document.getElementById("imageXInput");

const imageXValue =
  document.getElementById("imageXValue");

const imageYInput =
  document.getElementById("imageYInput");

const imageYValue =
  document.getElementById("imageYValue");

const imageScaleInput =
  document.getElementById("imageScaleInput");

const imageScaleValue =
  document.getElementById("imageScaleValue");

const coverOpacityInput =
  document.getElementById("coverOpacityInput");

const coverOpacityValue =
  document.getElementById("coverOpacityValue");

const panelOpacityInput =
  document.getElementById("panelOpacityInput");

const panelOpacityValue =
  document.getElementById("panelOpacityValue");


/* ==========================================
   CHARACTER
========================================== */

const lodestoneUrlInput =
  document.getElementById("lodestoneUrlInput");

const lodestoneFetchButton =
  document.getElementById("lodestoneFetchButton");

const lodestoneStatus =
  document.getElementById("lodestoneStatus");

const characterNameInput =
  document.getElementById("characterNameInput");

const worldInput =
  document.getElementById("worldInput");

const previewCharacterName =
  document.getElementById("previewCharacterName");

const previewWorld =
  document.getElementById("previewWorld");


/* ==========================================
   JOB / PLAY STYLE
========================================== */

const jobIconArea =
  document.getElementById("jobIconArea");

const playStyleCheckboxes =
  document.querySelectorAll(
    'input[name="playStyle"]'
  );

const previewPlayStyle =
  document.getElementById("previewPlayStyle");


/* ==========================================
   QUESTIONS
========================================== */

const questionInputs = [
  document.getElementById("question1Input"),
  document.getElementById("question2Input"),
  document.getElementById("question3Input"),
  document.getElementById("question4Input"),
  document.getElementById("question5Input")
];

const questionPreviewAnswers = [
  document.getElementById("previewAnswer1"),
  document.getElementById("previewAnswer2"),
  document.getElementById("previewAnswer3"),
  document.getElementById("previewAnswer4"),
  document.getElementById("previewAnswer5")
];


/* ==========================================
   MESSAGE / FONT / EXPORT
========================================== */

const messageInput =
  document.getElementById("messageInput");

const previewMessage =
  document.getElementById("previewMessage");

const fontSelect =
  document.getElementById("fontSelect");

const exportButton =
  document.getElementById("exportButton");


/* ==========================================
   OPTION BUTTONS
========================================== */

const coverColorButtons =
  document.querySelectorAll(
    "[data-cover-color]"
  );

const textColorButtons =
  document.querySelectorAll(
    "[data-text-color]"
  );

const panelColorButtons =
  document.querySelectorAll(
    "[data-panel-color]"
  );


/* ==========================================
   STATE
========================================== */

let currentLanguage = "ja";

let currentJobLevels = {};

let currentImageObjectUrl = null;


/*
  元SSサイズ。
*/
let imageNaturalWidth = 0;
let imageNaturalHeight = 0;


/*
  プレビューで実際に使っている
  SSの基準サイズ。

  これはSnapshotのCSS表示サイズから
  毎回計算する。
*/
let imageBaseWidth = 0;
let imageBaseHeight = 0;


/* ==========================================
   JOB ICONS
========================================== */

const JOB_ICON_MAP = {
  PLD: "Paladin.png",
  WAR: "Warrior.png",
  DRK: "DarkKnight.png",
  GNB: "Gunbreaker.png",

  WHM: "WhiteMage.png",
  SCH: "Scholar.png",
  AST: "Astrologian.png",
  SGE: "Sage.png",

  MNK: "Monk.png",
  DRG: "Dragoon.png",
  NIN: "Ninja.png",

  SAM: "Samurai.png",
  RPR: "Reaper.png",
  VPR: "Viper.png",

  BRD: "Bard.png",
  MCH: "Machinist.png",
  DNC: "Dancer.png",

  BLM: "BlackMage.png",
  SMN: "Summoner.png",
  RDM: "RedMage.png",
  PCT: "Pictomancer.png",
  BLU: "BlueMage.png",

  CRP: "Carpenter.png",
  BSM: "Blacksmith.png",
  ARM: "Armorer.png",
  GSM: "Goldsmith.png",
  LTW: "Leatherworker.png",
  WVR: "Weaver.png",
  ALC: "Alchemist.png",
  CUL: "Culinarian.png",

  MIN: "Miner.png",
  BTN: "Botanist.png",
  FSH: "Fisher.png"
};


/* ==========================================
   JOB LAYOUT
========================================== */

const JOB_GROUPS = [
  [
    "PLD", "WAR", "DRK", "GNB",
    "WHM", "SCH", "AST", "SGE",
    "MNK", "DRG", "NIN"
  ],

  [
    "SAM", "RPR", "VPR",
    "BRD", "MCH", "DNC",
    "BLM", "SMN", "RDM", "PCT", "BLU"
  ],

  [
    "CRP", "BSM", "ARM", "GSM",
    "LTW", "WVR", "ALC", "CUL",
    "MIN", "BTN", "FSH"
  ]
];


/* ==========================================
   PLAY STYLE
========================================== */

const playStyleTranslations = {
  relax: {
    ja: "のんびり",
    en: "Relax"
  },

  screenshot: {
    ja: "SS撮影",
    en: "Screenshots"
  },

  story: {
    ja: "ストーリー",
    en: "Story"
  },

  battle: {
    ja: "バトル",
    en: "Battle"
  },

  highend: {
    ja: "高難度",
    en: "High-end"
  },

  pvp: {
    ja: "PvP",
    en: "PvP"
  },

  gatherer: {
    ja: "ギャザラー",
    en: "Gathering"
  },

  crafter: {
    ja: "クラフター",
    en: "Crafting"
  },

  housing: {
    ja: "ハウジング",
    en: "Housing"
  },

  glamour: {
    ja: "ミラプリ",
    en: "Glamour"
  },

  goldsaucer: {
    ja: "ゴールドソーサー",
    en: "Gold Saucer"
  },

  fishing: {
    ja: "釣り",
    en: "Fishing"
  },

  treasure: {
    ja: "地図",
    en: "Treasure Maps"
  },

  hunt: {
    ja: "モブハント",
    en: "Hunts"
  },

  roleplay: {
    ja: "ロールプレイ",
    en: "Roleplay"
  },

  friends: {
    ja: "フレンド交流",
    en: "Friends"
  }
};


/* ==========================================
   QUESTIONS
========================================== */

const questionTranslations = {
  ja: [
    "あなたのキャラクターを一言で表すと？",
    "いちばん好きなエオルゼアでの過ごし方は？",
    "冒険で大切にしていることは？",
    "いちばん思い出深い出来事は？",
    "これから叶えたい目標は？"
  ],

  en: [
    "How would you describe your character in one phrase?",
    "What is your favorite way to spend time in Eorzea?",
    "What matters most to you on your adventures?",
    "What is your most memorable experience?",
    "What would you like to achieve next?"
  ]
};


/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {
  ja: {
    heroLine1:
      "あなたの冒険を、",

    heroLine2:
      "一枚のスナップショットに。",

    heroDescription:
      "スクリーンショットにキャラクター情報、ジョブ、プレイスタイル、5つの質問への回答を添えて、あなただけの一枚を作成できます。",

    screenshotSelect:
      "スクリーンショット画像を選択",

    imageX:
      "横位置",

    imageY:
      "縦位置",

    imageScale:
      "拡大",

    coverColor:
      "カバー色",

    coverOpacity:
      "カバー濃度",

    textColor:
      "文字色",

    font:
      "フォント",

    panelColor:
      "情報パネル色",

    panelOpacity:
      "情報パネル透明度",

    lodestoneUrl:
      "Lodestone キャラクターURL",

    manualEdit:
      "取得データ / 手動編集",

    characterName:
      "キャラクター名",

    export:
      "SSを書き出す",

    none:
      "未選択",

    emptyAnswer:
      "—",

    lodestoneLoading:
      "キャラクターデータを取得しています。",

    lodestoneSuccess:
      "キャラクターデータを取得しました。",

    lodestoneError:
      "キャラクターデータを取得できませんでした。",

    exportError:
      "画像の書き出しに失敗しました。",

    disclaimer:
      "本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。"
  },


  en: {
    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    heroDescription:
      "Create your own snapshot by combining an FFXIV screenshot with character information, jobs, play styles, five questions and a personal message.",

    screenshotSelect:
      "Select screenshot",

    imageX:
      "Horizontal position",

    imageY:
      "Vertical position",

    imageScale:
      "Zoom",

    coverColor:
      "Cover color",

    coverOpacity:
      "Cover opacity",

    textColor:
      "Text color",

    font:
      "Font",

    panelColor:
      "Panel color",

    panelOpacity:
      "Panel opacity",

    lodestoneUrl:
      "Lodestone Character URL",

    manualEdit:
      "Retrieved data / Manual edit",

    characterName:
      "Character Name",

    export:
      "EXPORT SNAPSHOT",

    none:
      "None",

    emptyAnswer:
      "—",

    lodestoneLoading:
      "Loading character data...",

    lodestoneSuccess:
      "Character data loaded.",

    lodestoneError:
      "Failed to load character data.",

    exportError:
      "Failed to export the image.",

    disclaimer:
      "This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site. Users are responsible for the screenshots and information they choose to use or enter."
  }
};


/* ==========================================
   IMAGE UPLOAD
========================================== */

function handleImageUpload(event) {
  const file =
    event.target.files?.[0];

  if (!file) {
    return;
  }


  if (currentImageObjectUrl) {
    URL.revokeObjectURL(
      currentImageObjectUrl
    );
  }


  currentImageObjectUrl =
    URL.createObjectURL(file);


  snapshotImage.src =
    currentImageObjectUrl;
}


/* ==========================================
   IMAGE LOAD
========================================== */

function handleImageLoad() {
  imageNaturalWidth =
    snapshotImage.naturalWidth;

  imageNaturalHeight =
    snapshotImage.naturalHeight;


  if (
    !imageNaturalWidth ||
    !imageNaturalHeight
  ) {
    return;
  }


  photoPlaceholder.style.display =
    "none";


  /*
    SSの初期位置は変更しない。
  */

  updateImageGeometry();
}


/* ==========================================
   IMAGE GEOMETRY

   ★今回の重要部分

   Snapshotの表示サイズと
   元SSのアスペクト比から
   cover表示に必要なpxサイズを計算。

   画像の縦横比は絶対に変更しない。
========================================== */

function updateImageGeometry() {
  if (
    !imageNaturalWidth ||
    !imageNaturalHeight
  ) {
    return;
  }


  const rect =
    snapshot.getBoundingClientRect();


  const containerWidth =
    rect.width;

  const containerHeight =
    rect.height;


  if (
    containerWidth <= 0 ||
    containerHeight <= 0
  ) {
    return;
  }


  const imageRatio =
    imageNaturalWidth /
    imageNaturalHeight;


  const containerRatio =
    containerWidth /
    containerHeight;


  /*
    CSS object-fit:cover と同じ計算。
  */

  if (
    imageRatio >
    containerRatio
  ) {

    /*
      横長。

      高さをコンテナに合わせる。
    */

    imageBaseHeight =
      containerHeight;

    imageBaseWidth =
      containerHeight *
      imageRatio;

  } else {

    /*
      縦長。

      横幅をコンテナに合わせる。
    */

    imageBaseWidth =
      containerWidth;

    imageBaseHeight =
      containerWidth /
      imageRatio;
  }


  snapshotImage.style.width =
    `${imageBaseWidth}px`;

  snapshotImage.style.height =
    `${imageBaseHeight}px`;


  updateImageTransform();
}


/* ==========================================
   IMAGE TRANSFORM

   X/YはSnapshot幅・高さを基準にする。

   画像自身の幅を基準にしないため、
   縦長・横長で操作感が変わりにくい。
========================================== */

function updateImageTransform() {
  const x =
    Number(
      imageXInput.value
    );

  const y =
    Number(
      imageYInput.value
    );

  const scale =
    Number(
      imageScaleInput.value
    ) / 100;


  /*
    50 = 中央。

    最大±30%移動。
  */

  const offsetX =
    (x - 50) * 0.6;

  const offsetY =
    (y - 50) * 0.6;


  snapshot.style.setProperty(
    "--image-offset-x",
    `${offsetX}cqw`
  );

  snapshot.style.setProperty(
    "--image-offset-y",
    `${offsetY}cqw`
  );

  snapshot.style.setProperty(
    "--image-scale",
    scale
  );


  imageXValue.textContent =
    `${x}%`;

  imageYValue.textContent =
    `${y}%`;

  imageScaleValue.textContent =
    `${Math.round(scale * 100)}%`;
}


/* ==========================================
   IMAGE CONTROLS
========================================== */

function updateImageX() {
  updateImageTransform();
}


function updateImageY() {
  updateImageTransform();
}


function updateImageScale() {
  updateImageTransform();
}


/* ==========================================
   COVER
========================================== */

function updateCoverOpacity() {
  const value =
    Number(
      coverOpacityInput.value
    );


  snapshot.style.setProperty(
    "--cover-alpha",
    value / 100
  );


  coverOpacityValue.textContent =
    `${value}%`;
}


/* ==========================================
   PANEL
========================================== */

function updatePanelOpacity() {
  const value =
    Number(
      panelOpacityInput.value
    );


  snapshot.style.setProperty(
    "--panel-alpha",
    value / 100
  );


  panelOpacityValue.textContent =
    `${value}%`;
}


/* ==========================================
   ACTIVE BUTTON
========================================== */

function activateButton(
  buttons,
  target
) {
  buttons.forEach(
    button => {
      button.classList.toggle(
        "active",
        button === target
      );
    }
  );
}


/* ==========================================
   COVER COLOR
========================================== */

function setCoverColor(button) {
  const color =
    button.dataset.coverColor;


  snapshot.style.setProperty(
    "--cover-rgb",

    color === "white"
      ? "255,255,255"
      : "0,0,0"
  );


  activateButton(
    coverColorButtons,
    button
  );
}


/* ==========================================
   TEXT COLOR
========================================== */

function setTextColor(button) {
  const color =
    button.dataset.textColor;


  snapshot.classList.remove(
    "text-white",
    "text-black"
  );


  snapshot.classList.add(
    color === "black"
      ? "text-black"
      : "text-white"
  );


  activateButton(
    textColorButtons,
    button
  );
}


/* ==========================================
   PANEL COLOR
========================================== */

function setPanelColor(button) {
  const color =
    button.dataset.panelColor;


  snapshot.style.setProperty(
    "--panel-rgb",

    color === "white"
      ? "255,255,255"
      : "0,0,0"
  );


  activateButton(
    panelColorButtons,
    button
  );
}


/* ==========================================
   FONT
========================================== */

function updateFont() {
  snapshot.classList.remove(
    "font-gothic",
    "font-rounded",
    "font-mincho",
    "font-modern",
    "font-condensed"
  );


  const value =
    fontSelect.value;


  const classes = {
    gothic:
      "font-gothic",

    rounded:
      "font-rounded",

    mincho:
      "font-mincho",

    modern:
      "font-modern",

    condensed:
      "font-condensed"
  };


  snapshot.classList.add(
    classes[value] ||
    "font-gothic"
  );
}


/* ==========================================
   CHARACTER
========================================== */

function updateCharacter() {
  previewCharacterName.textContent =
    characterNameInput.value.trim() ||
    "HIKARINO SENSHI";


  previewWorld.textContent =
    worldInput.value.trim() ||
    "Ramuh / Meteor";
}


/* ==========================================
   WORLD FORMAT
========================================== */

function formatWorld(value) {
  const match =
    String(value || "")
      .match(
        /^(.+?)\s*\[([^\]]+)\]\s*$/
      );


  if (!match) {
    return value || "";
  }


  return (
    match[1].trim() +
    " / " +
    match[2].trim()
  );
}


/* ==========================================
   LODESTONE STATUS
========================================== */

function setLodestoneStatus(
  type,
  text
) {
  lodestoneStatus.classList.remove(
    "success",
    "error"
  );


  if (type) {
    lodestoneStatus.classList.add(
      type
    );
  }


  lodestoneStatus.textContent =
    text;
}


/* ==========================================
   LODESTONE FETCH
========================================== */

async function fetchLodestone() {
  const url =
    lodestoneUrlInput
      .value
      .trim();


  if (!url) {
    setLodestoneStatus(
      "error",

      translations[
        currentLanguage
      ].lodestoneError
    );

    return;
  }


  setLodestoneStatus(
    "",

    translations[
      currentLanguage
    ].lodestoneLoading
  );


  lodestoneFetchButton.disabled =
    true;


  try {

    const response =
      await fetch(
        WORKER_URL +
        "/?url=" +
        encodeURIComponent(url)
      );


    const data =
      await response.json();


    if (
      !response.ok ||
      !data.success
    ) {
      throw new Error(
        data.error ||
        `HTTP ${response.status}`
      );
    }


    applyLodestoneCharacter(
      data
    );


    setLodestoneStatus(
      "success",

      translations[
        currentLanguage
      ].lodestoneSuccess
    );

  } catch (error) {

    console.error(error);


    setLodestoneStatus(
      "error",

      translations[
        currentLanguage
      ].lodestoneError
    );

  } finally {

    lodestoneFetchButton.disabled =
      false;
  }
}


/* ==========================================
   APPLY LODESTONE
========================================== */

function applyLodestoneCharacter(data) {
  if (data.name) {
    characterNameInput.value =
      data.name;
  }


  if (data.world) {
    worldInput.value =
      formatWorld(
        data.world
      );
  }


  currentJobLevels =
    data.jobs &&
    typeof data.jobs === "object"

      ? data.jobs

      : {};


  updateCharacter();

  renderJobs();
}


/* ==========================================
   JOBS
========================================== */

function renderJobs() {
  jobIconArea.innerHTML =
    "";


  JOB_GROUPS.forEach(
    group => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "job-icon-row";


      group.forEach(
        job => {

          const item =
            document.createElement(
              "div"
            );


          item.className =
            "job-item";


          if (job === "DNC") {
            item.classList.add(
              "job-dnc"
            );
          }


          const image =
            document.createElement(
              "img"
            );


          image.src =
            `assets/jobs/${JOB_ICON_MAP[job]}`;


          image.alt =
            job;


          image.draggable =
            false;


          const level =
            document.createElement(
              "div"
            );


          level.className =
            "job-level";


          const jobLevel =
            currentJobLevels[job];


          if (
            jobLevel !== undefined &&
            jobLevel !== null &&
            jobLevel !== ""
          ) {

            level.textContent =
              String(jobLevel);

          } else {

            level.textContent =
              "—";
          }


          item.appendChild(
            image
          );


          item.appendChild(
            level
          );


          row.appendChild(
            item
          );
        }
      );


      jobIconArea.appendChild(
        row
      );
    }
  );
}


/* ==========================================
   PLAY STYLE
========================================== */

function updatePlayStyle() {
  previewPlayStyle.innerHTML =
    "";


  const selected =
    [...playStyleCheckboxes]
      .filter(
        checkbox =>
          checkbox.checked
      );


  if (
    selected.length === 0
  ) {

    const tag =
      document.createElement(
        "span"
      );


    tag.className =
      "play-style-tag";


    tag.textContent =
      translations[
        currentLanguage
      ].none;


    previewPlayStyle.appendChild(
      tag
    );


    return;
  }


  selected.forEach(
    checkbox => {

      const key =
        checkbox.dataset.style;


      const tag =
        document.createElement(
          "span"
        );


      tag.className =
        "play-style-tag";


      tag.textContent =
        playStyleTranslations[
          key
        ][currentLanguage];


      previewPlayStyle.appendChild(
        tag
      );
    }
  );
}


/* ==========================================
   QUESTIONS
========================================== */

function updateQuestions() {
  questionInputs.forEach(
    (input, index) => {

      questionPreviewAnswers[
        index
      ].textContent =
        input.value.trim() ||
        "—";


      updateCounter(
        input
      );
    }
  );
}


/* ==========================================
   MESSAGE
========================================== */

function updateMessage() {
  previewMessage.textContent =
    messageInput.value.trim() ||
    "—";


  updateCounter(
    messageInput
  );
}


/* ==========================================
   COUNTER
========================================== */

function updateCounter(input) {
  const counter =
    document.querySelector(
      `[data-counter-for="${input.id}"]`
    );


  if (!counter) {
    return;
  }


  counter.textContent =
    `${input.value.length} / ${input.maxLength}`;
}


/* ==========================================
   LANGUAGE
========================================== */

function setLanguage(language) {
  currentLanguage =
    language === "en"
      ? "en"
      : "ja";


  document.documentElement.lang =
    currentLanguage;


  document
    .querySelectorAll(
      "[data-lang]"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",

          button.dataset.lang ===
          currentLanguage
        );
      }
    );


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      element => {

        const key =
          element.dataset.i18n;


        if (
          translations[
            currentLanguage
          ][key] !== undefined
        ) {

          element.textContent =
            translations[
              currentLanguage
            ][key];
        }
      }
    );


  /*
    PLAY STYLE入力側
  */

  document
    .querySelectorAll(
      "[data-play-label]"
    )
    .forEach(
      element => {

        const key =
          element.dataset.playLabel;


        element.textContent =
          playStyleTranslations[
            key
          ][currentLanguage];
      }
    );


  /*
    QUESTIONS
  */

  document
    .querySelectorAll(
      "[data-question-title]"
    )
    .forEach(
      element => {

        const index =
          Number(
            element.dataset.questionTitle
          ) - 1;


        element.textContent =
          questionTranslations[
            currentLanguage
          ][index];
      }
    );


  document
    .querySelectorAll(
      "[data-form-question]"
    )
    .forEach(
      element => {

        const number =
          Number(
            element.dataset.formQuestion
          );


        element.textContent =
          `${number}. ${
            questionTranslations[
              currentLanguage
            ][number - 1]
          }`;
      }
    );


  updatePlayStyle();
}


/* ==========================================
   WAIT IMAGES
========================================== */

function waitForImages(root) {
  const images =
    [
      ...root.querySelectorAll(
        "img"
      )
    ];


  return Promise.all(
    images.map(
      image => {

        if (
          image.complete &&
          image.naturalWidth > 0
        ) {
          return Promise.resolve();
        }


        return new Promise(
          resolve => {

            const done =
              () => {

                image.removeEventListener(
                  "load",
                  done
                );

                image.removeEventListener(
                  "error",
                  done
                );

                resolve();
              };


            image.addEventListener(
              "load",
              done
            );


            image.addEventListener(
              "error",
              done
            );
          }
        );
      }
    )
  );
}


/* ==========================================
   PREPARE EXPORT IMAGE

   ★重要

   プレビューは例えば700×700、
   出力は1080×1080。

   プレビューで使ったSSのpxサイズを
   そのままコピーすると位置が変わる。

   そこで1080×1080用に
   coverサイズを再計算する。

   X/Y/Scaleは同じ割合を使用。
========================================== */

function prepareExportImage(clone) {
  const cloneImage =
    clone.querySelector(
      ".snapshot-image"
    );


  if (
    !cloneImage ||
    !imageNaturalWidth ||
    !imageNaturalHeight
  ) {
    return;
  }


  const exportSize =
    1080;


  const imageRatio =
    imageNaturalWidth /
    imageNaturalHeight;


  let width;
  let height;


  if (imageRatio > 1) {

    height =
      exportSize;

    width =
      exportSize *
      imageRatio;

  } else {

    width =
      exportSize;

    height =
      exportSize /
      imageRatio;
  }


  cloneImage.style.width =
    `${width}px`;


  cloneImage.style.height =
    `${height}px`;
}


/* ==========================================
   EXPORT
========================================== */

async function exportSnapshot() {
  exportButton.disabled =
    true;


  const originalText =
    exportButton.textContent;


  exportButton.textContent =
    "...";


  let stage = null;


  try {

    /* ========================================
       STAGE
    ======================================== */

    stage =
      document.createElement(
        "div"
      );


    stage.className =
      "export-stage";


    /* ========================================
       CLONE
    ======================================== */

    const clone =
      snapshot.cloneNode(
        true
      );


    clone.removeAttribute(
      "id"
    );


    stage.appendChild(
      clone
    );


    document.body.appendChild(
      stage
    );


    /* ========================================
       FORCE 1080
    ======================================== */

    clone.style.width =
      "1080px";


    clone.style.height =
      "1080px";


    clone.style.aspectRatio =
      "auto";


    /*
      SSだけ1080用coverサイズへ
      再計算。

      縦横比は維持される。
    */

    prepareExportImage(
      clone
    );


    /* ========================================
       WAIT
    ======================================== */

    await waitForImages(
      clone
    );


    if (
      document.fonts &&
      document.fonts.ready
    ) {
      await document.fonts.ready;
    }


    await new Promise(
      resolve => {

        requestAnimationFrame(
          () => {

            requestAnimationFrame(
              resolve
            );
          }
        );
      }
    );


    /* ========================================
       HTML2CANVAS

       ここから先で
       canvasのリサイズはしない。
    ======================================== */

    const canvas =
      await html2canvas(
        clone,
        {
          width: 1080,

          height: 1080,

          scale: 1,

          useCORS: true,

          allowTaint: false,

          backgroundColor: null,

          logging: false,

          scrollX: 0,

          scrollY: 0,

          windowWidth: 1080,

          windowHeight: 1080
        }
      );


    /* ========================================
       PNG
    ======================================== */

    const blob =
      await new Promise(
        resolve => {

          canvas.toBlob(
            resolve,
            "image/png"
          );
        }
      );


    if (!blob) {
      throw new Error(
        "PNG creation failed."
      );
    }


    const objectUrl =
      URL.createObjectURL(
        blob
      );


    const link =
      document.createElement(
        "a"
      );


    link.href =
      objectUrl;


    link.download =
      "ffxiv-character-snapshot.png";


    document.body.appendChild(
      link
    );


    link.click();


    link.remove();


    setTimeout(
      () => {

        URL.revokeObjectURL(
          objectUrl
        );
      },

      1000
    );

  } catch (error) {

    console.error(error);


    alert(
      translations[
        currentLanguage
      ].exportError
    );

  } finally {

    if (stage) {
      stage.remove();
    }


    exportButton.disabled =
      false;


    exportButton.textContent =
      originalText;
  }
}


/* ==========================================
   RESIZE

   ブラウザ幅が変わると
   プレビューサイズも変わるため、
   SSのcoverサイズを再計算。
========================================== */

function handleResize() {
  updateImageGeometry();
}


/* ==========================================
   EVENTS
========================================== */

imageUpload.addEventListener(
  "change",
  handleImageUpload
);


snapshotImage.addEventListener(
  "load",
  handleImageLoad
);


imageXInput.addEventListener(
  "input",
  updateImageX
);


imageYInput.addEventListener(
  "input",
  updateImageY
);


imageScaleInput.addEventListener(
  "input",
  updateImageScale
);


coverOpacityInput.addEventListener(
  "input",
  updateCoverOpacity
);


panelOpacityInput.addEventListener(
  "input",
  updatePanelOpacity
);


coverColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        setCoverColor(
          button
        );
      }
    );
  }
);


textColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        setTextColor(
          button
        );
      }
    );
  }
);


panelColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        setPanelColor(
          button
        );
      }
    );
  }
);


fontSelect.addEventListener(
  "change",
  updateFont
);


characterNameInput.addEventListener(
  "input",
  updateCharacter
);


worldInput.addEventListener(
  "input",
  updateCharacter
);


lodestoneFetchButton.addEventListener(
  "click",
  fetchLodestone
);


playStyleCheckboxes.forEach(
  checkbox => {

    checkbox.addEventListener(
      "change",
      updatePlayStyle
    );
  }
);


questionInputs.forEach(
  input => {

    input.addEventListener(
      "input",
      updateQuestions
    );
  }
);


messageInput.addEventListener(
  "input",
  updateMessage
);


languageToggle
  .querySelectorAll(
    "[data-lang]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.lang
          );
        }
      );
    }
  );


exportButton.addEventListener(
  "click",
  exportSnapshot
);


window.addEventListener(
  "resize",
  handleResize
);


/* ==========================================
   INITIALIZE
========================================== */

function initialize() {
  updateCharacter();

  renderJobs();

  updatePlayStyle();

  updateQuestions();

  updateMessage();

  updateFont();

  updateImageTransform();

  updateCoverOpacity();

  updatePanelOpacity();

  setLanguage("ja");


  /*
    HTML等で最初から画像が
    設定されている場合。
  */

  if (
    snapshotImage.complete &&
    snapshotImage.naturalWidth > 0
  ) {
    handleImageLoad();
  }
}


initialize();