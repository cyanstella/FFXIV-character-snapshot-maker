/* ==========================================
   WORKER
========================================== */

const WORKER_URL =
  "https://ffxiv-character-snapshot-maker.cyan-ciel.workers.dev";


/* ==========================================
   ELEMENTS
========================================== */

const snapshot =
  document.getElementById(
    "snapshot"
  );

const languageToggle =
  document.getElementById(
    "languageToggle"
  );


/* ==========================================
   SCREENSHOT
========================================== */

const imageUpload =
  document.getElementById(
    "imageUpload"
  );

const snapshotImage =
  document.getElementById(
    "snapshotImage"
  );

const photoPlaceholder =
  document.getElementById(
    "photoPlaceholder"
  );

const imageXInput =
  document.getElementById(
    "imageXInput"
  );

const imageXValue =
  document.getElementById(
    "imageXValue"
  );

const imageYInput =
  document.getElementById(
    "imageYInput"
  );

const imageYValue =
  document.getElementById(
    "imageYValue"
  );

const imageScaleInput =
  document.getElementById(
    "imageScaleInput"
  );

const imageScaleValue =
  document.getElementById(
    "imageScaleValue"
  );

const coverOpacityInput =
  document.getElementById(
    "coverOpacityInput"
  );

const coverOpacityValue =
  document.getElementById(
    "coverOpacityValue"
  );

const panelOpacityInput =
  document.getElementById(
    "panelOpacityInput"
  );

const panelOpacityValue =
  document.getElementById(
    "panelOpacityValue"
  );


/* ==========================================
   CHARACTER
========================================== */

const lodestoneUrlInput =
  document.getElementById(
    "lodestoneUrlInput"
  );

const lodestoneFetchButton =
  document.getElementById(
    "lodestoneFetchButton"
  );

const lodestoneStatus =
  document.getElementById(
    "lodestoneStatus"
  );

const characterNameInput =
  document.getElementById(
    "characterNameInput"
  );

const worldInput =
  document.getElementById(
    "worldInput"
  );

const previewCharacterName =
  document.getElementById(
    "previewCharacterName"
  );

const previewWorld =
  document.getElementById(
    "previewWorld"
  );


/* ==========================================
   JOBS
========================================== */

const jobIconArea =
  document.getElementById(
    "jobIconArea"
  );


/* ==========================================
   PLAY STYLE
========================================== */

const playStyleCheckboxes =
  document.querySelectorAll(
    'input[name="playStyle"]'
  );

const previewPlayStyle =
  document.getElementById(
    "previewPlayStyle"
  );


/* ==========================================
   QUESTIONS
========================================== */

const questionInputs =
  [
    document.getElementById(
      "question1Input"
    ),

    document.getElementById(
      "question2Input"
    ),

    document.getElementById(
      "question3Input"
    ),

    document.getElementById(
      "question4Input"
    ),

    document.getElementById(
      "question5Input"
    )
  ];

const questionPreviewAnswers =
  [
    document.getElementById(
      "previewAnswer1"
    ),

    document.getElementById(
      "previewAnswer2"
    ),

    document.getElementById(
      "previewAnswer3"
    ),

    document.getElementById(
      "previewAnswer4"
    ),

    document.getElementById(
      "previewAnswer5"
    )
  ];


/* ==========================================
   MESSAGE
========================================== */

const messageInput =
  document.getElementById(
    "messageInput"
  );

const previewMessage =
  document.getElementById(
    "previewMessage"
  );


/* ==========================================
   FONT
========================================== */

const fontSelect =
  document.getElementById(
    "fontSelect"
  );


/* ==========================================
   EXPORT
========================================== */

const exportButton =
  document.getElementById(
    "exportButton"
  );


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
   IMAGE STATE

   元画像のサイズを保持する。

   CSSでwidth/heightを100%固定すると
   縦長SSが正方形へ圧縮されるため、
   naturalWidth/naturalHeightを基準に
   coverサイズを作る。
========================================== */

let snapshotImageNaturalWidth = 0;

let snapshotImageNaturalHeight = 0;

let currentImageObjectUrl = null;


/* ==========================================
   LANGUAGE
========================================== */

let currentLanguage =
  "ja";


/* ==========================================
   JOB LEVEL DATA
========================================== */

let currentJobLevels = {};


/* ==========================================
   JOB ICON MAP
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
   JOB GROUPS
========================================== */

const JOB_GROUPS = [
  [
    "PLD",
    "WAR",
    "DRK",
    "GNB",

    "WHM",
    "SCH",
    "AST",
    "SGE",

    "MNK",
    "DRG",
    "NIN"
  ],

  [
    "SAM",
    "RPR",
    "VPR",

    "BRD",
    "MCH",
    "DNC",

    "BLM",
    "SMN",
    "RDM",
    "PCT",
    "BLU"
  ],

  [
    "CRP",
    "BSM",
    "ARM",
    "GSM",

    "LTW",
    "WVR",
    "ALC",
    "CUL",

    "MIN",
    "BTN",
    "FSH"
  ]
];


/* ==========================================
   PLAY STYLE TRANSLATIONS
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
   TRANSLATIONS
========================================== */

const translations = {
  ja: {
    heroLine1:
      "あなたの冒険を、",

    heroLine2:
      "一枚のスナップショットに。",

    none:
      "未選択",

    lodestoneLoading:
      "キャラクターデータを取得しています。",

    lodestoneSuccess:
      "キャラクターデータを取得しました。",

    lodestoneError:
      "キャラクターデータを取得できませんでした。",

    exportError:
      "画像の書き出しに失敗しました。",

    emptyAnswer:
      "—"
  },

  en: {
    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    none:
      "None",

    lodestoneLoading:
      "Loading character data...",

    lodestoneSuccess:
      "Character data loaded.",

    lodestoneError:
      "Failed to load character data.",

    exportError:
      "Failed to export the image.",

    emptyAnswer:
      "—"
  }
};


/* ==========================================
   SCREENSHOT UPLOAD
========================================== */

function handleImageUpload(
  event
) {
  const file =
    event.target.files &&
    event.target.files[0];

  if (!file) {
    return;
  }

  /*
    前のObject URLを破棄。
  */

  if (
    currentImageObjectUrl
  ) {
    URL.revokeObjectURL(
      currentImageObjectUrl
    );
  }

  currentImageObjectUrl =
    URL.createObjectURL(
      file
    );

  /*
    loadイベント内で
    naturalWidth/naturalHeightを取得してから
    srcを設定する。
  */

  snapshotImage.src =
    currentImageObjectUrl;
}


/* ==========================================
   IMAGE LOADED
========================================== */

function handleSnapshotImageLoad() {
  snapshotImageNaturalWidth =
    snapshotImage.naturalWidth;

  snapshotImageNaturalHeight =
    snapshotImage.naturalHeight;

  if (
    photoPlaceholder
  ) {
    photoPlaceholder.style.display =
      "none";
  }

  /*
    元画像の縦横比から
    正方形を完全に覆うサイズを作る。
  */

  updateSnapshotImageLayout();

  /*
    現在のスライダー値を再適用。
  */

  updateImageX();

  updateImageY();

  updateImageScale();
}


/* ==========================================
   IMAGE BASE SIZE

   正方形コンテナに対して
   CSS coverと同じ考え方で
   基準サイズを計算する。

   例:

   1080×1920
   ↓
   width 100%
   height 177.777...%

   1920×1080
   ↓
   width 177.777...%
   height 100%

   これにより画像そのものの
   アスペクト比は絶対に変わらない。
========================================== */

function updateSnapshotImageLayout() {
  if (
    !snapshotImageNaturalWidth ||
    !snapshotImageNaturalHeight
  ) {
    return;
  }

  const imageRatio =
    snapshotImageNaturalWidth /
    snapshotImageNaturalHeight;

  if (imageRatio > 1) {
    /*
      横長画像。

      高さをSnapshotいっぱいにする。
    */

    snapshotImage.style.setProperty(
      "--image-base-width",
      `${imageRatio * 100}%`
    );

    snapshotImage.style.setProperty(
      "--image-base-height",
      "100%"
    );

  } else if (
    imageRatio < 1
  ) {
    /*
      縦長画像。

      横幅をSnapshotいっぱいにする。
    */

    snapshotImage.style.setProperty(
      "--image-base-width",
      "100%"
    );

    snapshotImage.style.setProperty(
      "--image-base-height",
      `${100 / imageRatio}%`
    );

  } else {
    /*
      正方形。
    */

    snapshotImage.style.setProperty(
      "--image-base-width",
      "100%"
    );

    snapshotImage.style.setProperty(
      "--image-base-height",
      "100%"
    );
  }
}


/* ==========================================
   IMAGE X

   50 = 中央。

   cqwを使用することで、
   プレビューでも1080px出力でも
   Snapshot自体の幅を基準に
   同じ割合で移動する。
========================================== */

function updateImageX() {
  if (!imageXInput) {
    return;
  }

  const value =
    Number(
      imageXInput.value
    );

  const offset =
    (value - 50) * 0.6;

  snapshotImage.style.setProperty(
    "--image-offset-x",
    `${offset}cqw`
  );

  if (
    imageXValue
  ) {
    imageXValue.textContent =
      `${value}%`;
  }
}


/* ==========================================
   IMAGE Y
========================================== */

function updateImageY() {
  if (!imageYInput) {
    return;
  }

  const value =
    Number(
      imageYInput.value
    );

  const offset =
    (value - 50) * 0.6;

  snapshotImage.style.setProperty(
    "--image-offset-y",
    `${offset}cqw`
  );

  if (
    imageYValue
  ) {
    imageYValue.textContent =
      `${value}%`;
  }
}


/* ==========================================
   IMAGE SCALE
========================================== */

function updateImageScale() {
  if (!imageScaleInput) {
    return;
  }

  const value =
    Number(
      imageScaleInput.value
    );

  snapshotImage.style.setProperty(
    "--image-scale",
    value / 100
  );

  if (
    imageScaleValue
  ) {
    imageScaleValue.textContent =
      `${value}%`;
  }
}


/* ==========================================
   COVER OPACITY
========================================== */

function updateCoverOpacity() {
  if (!coverOpacityInput) {
    return;
  }

  const value =
    Number(
      coverOpacityInput.value
    );

  snapshot.style.setProperty(
    "--cover-alpha",
    value / 100
  );

  if (
    coverOpacityValue
  ) {
    coverOpacityValue.textContent =
      `${value}%`;
  }
}


/* ==========================================
   PANEL OPACITY
========================================== */

function updatePanelOpacity() {
  if (!panelOpacityInput) {
    return;
  }

  const value =
    Number(
      panelOpacityInput.value
    );

  snapshot.style.setProperty(
    "--panel-alpha",
    value / 100
  );

  if (
    panelOpacityValue
  ) {
    panelOpacityValue.textContent =
      `${value}%`;
  }
}


/* ==========================================
   ACTIVE BUTTON
========================================== */

function setActiveButton(
  buttons,
  activeButton
) {
  buttons.forEach(
    button => {
      button.classList.toggle(
        "active",
        button === activeButton
      );
    }
  );
}


/* ==========================================
   COVER COLOR
========================================== */

function updateCoverColor(
  button
) {
  const color =
    button.dataset.coverColor;

  snapshot.style.setProperty(
    "--cover-rgb",
    color === "white"
      ? "255,255,255"
      : "0,0,0"
  );

  setActiveButton(
    coverColorButtons,
    button
  );
}


/* ==========================================
   TEXT COLOR
========================================== */

function updateTextColor(
  button
) {
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

  setActiveButton(
    textColorButtons,
    button
  );
}


/* ==========================================
   PANEL COLOR
========================================== */

function updatePanelColor(
  button
) {
  const color =
    button.dataset.panelColor;

  snapshot.style.setProperty(
    "--panel-rgb",
    color === "white"
      ? "255,255,255"
      : "0,0,0"
  );

  setActiveButton(
    panelColorButtons,
    button
  );
}


/* ==========================================
   FONT
========================================== */

function updateFont() {
  if (!fontSelect) {
    return;
  }

  snapshot.classList.remove(
    "font-gothic",
    "font-rounded",
    "font-mincho",
    "font-modern",
    "font-condensed"
  );

  const value =
    fontSelect.value;

  const classMap = {
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
    classMap[value] ||
    "font-gothic"
  );
}


/* ==========================================
   CHARACTER
========================================== */

function updateCharacter() {
  if (
    previewCharacterName &&
    characterNameInput
  ) {
    previewCharacterName.textContent =
      characterNameInput.value.trim() ||
      "HIKARI NO SENSHI";
  }

  if (
    previewWorld &&
    worldInput
  ) {
    previewWorld.textContent =
      worldInput.value.trim() ||
      "Ramuh / Meteor";
  }
}


/* ==========================================
   LODESTONE STATUS
========================================== */

function setLodestoneStatus(
  type,
  message
) {
  if (!lodestoneStatus) {
    return;
  }

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
    message;
}


/* ==========================================
   FETCH LODESTONE
========================================== */

async function fetchLodestone() {
  const url =
    lodestoneUrlInput
      ? lodestoneUrlInput.value.trim()
      : "";

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

  if (
    lodestoneFetchButton
  ) {
    lodestoneFetchButton.disabled =
      true;
  }

  try {
    const response =
      await fetch(
        WORKER_URL +
        "/?url=" +
        encodeURIComponent(
          url
        )
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
    console.error(
      error
    );

    setLodestoneStatus(
      "error",
      translations[
        currentLanguage
      ].lodestoneError
    );

  } finally {
    if (
      lodestoneFetchButton
    ) {
      lodestoneFetchButton.disabled =
        false;
    }
  }
}


/* ==========================================
   APPLY LODESTONE
========================================== */

function applyLodestoneCharacter(
  data
) {
  if (
    characterNameInput &&
    data.name
  ) {
    characterNameInput.value =
      data.name;
  }

  if (
    worldInput &&
    data.world
  ) {
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
   WORLD FORMAT

   Lodestone:
   Mandragora [Meteor]

   Preview:
   Mandragora / Meteor
========================================== */

function formatWorld(
  value
) {
  if (!value) {
    return "";
  }

  const match =
    String(value).match(
      /^(.+?)\s*\[([^\]]+)\]\s*$/
    );

  if (!match) {
    return value;
  }

  return (
    match[1].trim() +
    " / " +
    match[2].trim()
  );
}


/* ==========================================
   JOBS
========================================== */

function renderJobs() {
  if (!jobIconArea) {
    return;
  }

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

          if (
            job === "DNC"
          ) {
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

          /*
            Workerが返さないジョブは
            未取得として—表示。
          */

          const value =
            currentJobLevels[
              job
            ];

          level.textContent =
            Number.isFinite(
              Number(value)
            )
              ? String(value)
              : "—";

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
  if (!previewPlayStyle) {
    return;
  }

  previewPlayStyle.innerHTML =
    "";

  const selected =
    [
      ...playStyleCheckboxes
    ].filter(
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
        ]
          ? playStyleTranslations[
              key
            ][currentLanguage]
          : checkbox.value;

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
    (
      input,
      index
    ) => {
      if (
        !input ||
        !questionPreviewAnswers[
          index
        ]
      ) {
        return;
      }

      questionPreviewAnswers[
        index
      ].textContent =
        input.value.trim() ||
        translations[
          currentLanguage
        ].emptyAnswer;

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
  if (
    !messageInput ||
    !previewMessage
  ) {
    return;
  }

  previewMessage.textContent =
    messageInput.value.trim() ||
    translations[
      currentLanguage
    ].emptyAnswer;

  updateCounter(
    messageInput
  );
}


/* ==========================================
   COUNTER

   対応するカウンターは

   data-counter-for="question1Input"

   または

   id="question1InputCounter"

   のどちらにも対応。
========================================== */

function updateCounter(
  input
) {
  if (!input) {
    return;
  }

  const max =
    Number(
      input.maxLength
    );

  if (
    !Number.isFinite(max) ||
    max <= 0
  ) {
    return;
  }

  let counter =
    document.querySelector(
      `[data-counter-for="${input.id}"]`
    );

  if (!counter) {
    counter =
      document.getElementById(
        `${input.id}Counter`
      );
  }

  if (!counter) {
    return;
  }

  counter.textContent =
    `${input.value.length} / ${max}`;
}


/* ==========================================
   LANGUAGE
========================================== */

function setLanguage(
  language
) {
  currentLanguage =
    language === "en"
      ? "en"
      : "ja";

  document.documentElement.lang =
    currentLanguage;

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
          ] &&
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

  updatePlayStyle();

  updateQuestions();

  updateMessage();
}


/* ==========================================
   WAIT FOR IMAGES
========================================== */

function waitForImages(
  root
) {
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
   EXPORT

   重要:

   1. プレビューをcloneNode(true)で複製
   2. 1080×1080に固定
   3. SSに設定済みのCSS変数も
      cloneNodeでそのまま複製
   4. html2canvasで直接1080×1080化
   5. 後からcanvasを引き伸ばさない

   これにより、

   ・元SSの縦横比
   ・横位置
   ・縦位置
   ・拡大率

   をプレビューと出力で共通化する。
========================================== */

async function exportSnapshot() {
  if (!exportButton) {
    return;
  }

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

       snapshotImage.styleに設定した

       --image-base-width
       --image-base-height
       --image-offset-x
       --image-offset-y
       --image-scale

       もcloneNode(true)で引き継がれる。
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
       1080 × 1080
    ======================================== */

    clone.style.width =
      "1080px";

    clone.style.height =
      "1080px";

    clone.style.minWidth =
      "1080px";

    clone.style.minHeight =
      "1080px";

    clone.style.maxWidth =
      "1080px";

    clone.style.maxHeight =
      "1080px";

    clone.style.aspectRatio =
      "auto";


    /* ========================================
       WAIT IMAGES
    ======================================== */

    await waitForImages(
      clone
    );


    /* ========================================
       WAIT FONTS
    ======================================== */

    if (
      document.fonts &&
      document.fonts.ready
    ) {
      await document.fonts.ready;
    }


    /* ========================================
       WAIT LAYOUT

       2フレーム待って、
       1080pxのcontainer query unitが
       確定してから撮影する。
    ======================================== */

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
       CAPTURE
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
        "PNG blob creation failed."
      );
    }


    /* ========================================
       DOWNLOAD
    ======================================== */

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
    console.error(
      error
    );

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
   EVENTS
========================================== */

if (
  imageUpload
) {
  imageUpload.addEventListener(
    "change",
    handleImageUpload
  );
}


if (
  snapshotImage
) {
  snapshotImage.addEventListener(
    "load",
    handleSnapshotImageLoad
  );
}


if (
  imageXInput
) {
  imageXInput.addEventListener(
    "input",
    updateImageX
  );
}


if (
  imageYInput
) {
  imageYInput.addEventListener(
    "input",
    updateImageY
  );
}


if (
  imageScaleInput
) {
  imageScaleInput.addEventListener(
    "input",
    updateImageScale
  );
}


if (
  coverOpacityInput
) {
  coverOpacityInput.addEventListener(
    "input",
    updateCoverOpacity
  );
}


if (
  panelOpacityInput
) {
  panelOpacityInput.addEventListener(
    "input",
    updatePanelOpacity
  );
}


coverColorButtons.forEach(
  button => {
    button.addEventListener(
      "click",
      () => {
        updateCoverColor(
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
        updateTextColor(
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
        updatePanelColor(
          button
        );
      }
    );
  }
);


if (
  fontSelect
) {
  fontSelect.addEventListener(
    "change",
    updateFont
  );
}


if (
  characterNameInput
) {
  characterNameInput.addEventListener(
    "input",
    updateCharacter
  );
}


if (
  worldInput
) {
  worldInput.addEventListener(
    "input",
    updateCharacter
  );
}


if (
  lodestoneFetchButton
) {
  lodestoneFetchButton.addEventListener(
    "click",
    fetchLodestone
  );
}


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
    if (!input) {
      return;
    }

    input.addEventListener(
      "input",
      updateQuestions
    );
  }
);


if (
  messageInput
) {
  messageInput.addEventListener(
    "input",
    updateMessage
  );
}


if (
  languageToggle
) {
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
}


if (
  exportButton
) {
  exportButton.addEventListener(
    "click",
    exportSnapshot
  );
}


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

  updateImageX();

  updateImageY();

  updateImageScale();

  updateCoverOpacity();

  updatePanelOpacity();

  /*
    HTML側ですでに画像srcが
    設定されている場合にも対応。
  */

  if (
    snapshotImage &&
    snapshotImage.complete &&
    snapshotImage.naturalWidth > 0
  ) {
    handleSnapshotImageLoad();
  }

  setLanguage(
    currentLanguage
  );
}


initialize();