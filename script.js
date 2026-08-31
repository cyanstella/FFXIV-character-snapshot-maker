/* ==========================================
   CONFIG
========================================== */

const WORKER_URL =
  "https://ffxiv-character-snapshot-maker.cyan-ciel.workers.dev";

const SITE_URL =
  "https://cyanstella.github.io/FFXIV-character-snapshot-maker/";

const SITE_TITLE =
  "FFXIV CHARACTER SNAPSHOT MAKER";

const X_HASHTAG =
  "FFXIVCHARACTERSNAPSHOTMAKER";


/* ==========================================
   ELEMENTS
========================================== */

const snapshot =
  document.getElementById("snapshot");

const languageToggle =
  document.getElementById("languageToggle");

const heroXSearchButton =
  document.getElementById("heroXSearchButton");

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

const jobIconArea =
  document.getElementById("jobIconArea");

const playStyleCheckboxes =
  document.querySelectorAll(
    'input[name="playStyle"]'
  );

const previewPlayStyle =
  document.getElementById("previewPlayStyle");

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

const messageInput =
  document.getElementById("messageInput");

const previewMessage =
  document.getElementById("previewMessage");

const fontSelect =
  document.getElementById("fontSelect");

const exportButton =
  document.getElementById("exportButton");

const xPostButton =
  document.getElementById("xPostButton");

const xSearchButton =
  document.getElementById("xSearchButton");

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

let currentLanguage =
  "ja";

let currentJobLevels =
  {};

let currentImageObjectUrl =
  null;

let imageNaturalWidth =
  0;

let imageNaturalHeight =
  0;


/* ==========================================
   JOB DATA
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


const JOB_GROUPS = [

  [
    "PLD","WAR","DRK","GNB",
    "WHM","SCH","AST","SGE",
    "MNK","DRG","NIN"
  ],

  [
    "SAM","RPR","VPR",
    "BRD","MCH","DNC",
    "BLM","SMN","RDM","PCT","BLU"
  ],

  [
    "CRP","BSM","ARM","GSM",
    "LTW","WVR","ALC","CUL",
    "MIN","BTN","FSH"
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

    fontGothic:
      "ゴシック",

    fontRounded:
      "丸文字",

    fontMincho:
      "明朝",

    fontModern:
      "モダン",

    fontCondensed:
      "コンデンス",

    panelColor:
      "情報パネル色",

    panelOpacity:
      "情報パネル透明度",

    lodestoneUrl:
      "Lodestone キャラクターURL",

    lodestoneButton:
      "LODESTONE DATA GET",

    manualEdit:
      "取得データ / 手動編集",

    characterName:
      "キャラクター名",

    worldDataCenter:
      "World / Data Center",

    messageDescription:
      "キャラクターからのひとこと",

    export:
      "SSを書き出す",

    xPost:
      "Xに投稿する",

    xSearch:
      "みんなの投稿を見る",

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

    disclaimer:
      "本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。ご利用の端末・ブラウザ・通信環境等によっては、本サイトが正常に動作しない場合があります。"

  },


  en: {

    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    heroDescription:
      "Create your own snapshot by combining an FFXIV screenshot with character information, jobs, play styles, answers to five questions, and a personal message.",

    screenshotSelect:
      "Select a screenshot image",

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

    fontGothic:
      "Gothic",

    fontRounded:
      "Rounded",

    fontMincho:
      "Mincho",

    fontModern:
      "Modern",

    fontCondensed:
      "Condensed",

    panelColor:
      "Information panel color",

    panelOpacity:
      "Information panel opacity",

    lodestoneUrl:
      "Lodestone Character URL",

    lodestoneButton:
      "GET LODESTONE DATA",

    manualEdit:
      "Retrieved data / Manual edit",

    characterName:
      "Character Name",

    worldDataCenter:
      "World / Data Center",

    messageDescription:
      "A message from your character",

    export:
      "EXPORT SNAPSHOT",

    xPost:
      "POST TO X",

    xSearch:
      "VIEW COMMUNITY POSTS",

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

    disclaimer:
      "This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site. Users are responsible for the screenshots and information they choose to use or enter. Depending on your device, browser, network, or other environment, some features of this site may not function properly."

  }

};


/* ==========================================
   IMAGE
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


  updateImageGeometry();

}


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


  let width;
  let height;


  if (
    imageRatio >
    containerRatio
  ) {

    height =
      containerHeight;

    width =
      containerHeight *
      imageRatio;

  } else {

    width =
      containerWidth;

    height =
      containerWidth /
      imageRatio;

  }


  snapshotImage.style.width =
    `${width}px`;


  snapshotImage.style.height =
    `${height}px`;


  updateImageTransform();

}


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
   COVER / PANEL
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
    classes[fontSelect.value] ||
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


function formatWorld(value) {

  const match =
    String(value || "").match(
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
   LODESTONE
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


async function fetchLodestone() {

  const url =
    lodestoneUrlInput.value.trim();


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

    console.error(
      "Lodestone error:",
      error
    );


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


function applyLodestoneCharacter(
  data
) {

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


          const jobLevel =
            currentJobLevels[job];


          level.textContent =
            jobLevel !== undefined &&
            jobLevel !== null &&
            jobLevel !== ""
              ? String(jobLevel)
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
   QUESTIONS / MESSAGE
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


function updateMessage() {

  previewMessage.textContent =
    messageInput.value.trim() ||
    "—";


  updateCounter(
    messageInput
  );

}


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


        const text =
          translations[
            currentLanguage
          ][key];


        if (
          text !== undefined
        ) {

          element.textContent =
            text;

        }

      }
    );


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
   X LINKS
========================================== */

function setupXLinks() {

  const postText =
    `${SITE_TITLE}\n\n` +
    `${SITE_URL}\n\n` +
    `#${X_HASHTAG}`;


  const postUrl =
    "https://x.com/intent/post?text=" +
    encodeURIComponent(
      postText
    );


  const searchQuery =
    `#${X_HASHTAG}`;


  const searchUrl =
    "https://x.com/search?q=" +
    encodeURIComponent(
      searchQuery
    ) +
    "&src=typed_query&f=live";


  if (xPostButton) {

    xPostButton.href =
      postUrl;

  }


  if (xSearchButton) {

    xSearchButton.href =
      searchUrl;

  }


  if (heroXSearchButton) {

    heroXSearchButton.href =
      searchUrl;

  }

}


/* ==========================================
   TIMEOUT
========================================== */

function delay(ms) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms
      )
  );

}


function promiseWithTimeout(
  promise,
  timeout
) {

  return Promise.race([

    promise,

    delay(
      timeout
    )

  ]);

}


/* ==========================================
   IMAGE WAIT
========================================== */

function waitForSingleImage(
  image,
  timeout = 3000
) {

  if (
    image.complete
  ) {

    return Promise.resolve();

  }


  return new Promise(
    resolve => {

      let finished =
        false;


      const finish =
        () => {

          if (finished) {
            return;
          }


          finished =
            true;


          clearTimeout(
            timer
          );


          image.removeEventListener(
            "load",
            finish
          );


          image.removeEventListener(
            "error",
            finish
          );


          resolve();

        };


      const timer =
        setTimeout(
          finish,
          timeout
        );


      image.addEventListener(
        "load",
        finish
      );


      image.addEventListener(
        "error",
        finish
      );

    }
  );

}


async function waitForImages(
  root
) {

  const images =
    [...root.querySelectorAll("img")];


  console.log(
    `[Snapshot Export] waiting for ${images.length} images`
  );


  const waits =
    images.map(
      image =>
        waitForSingleImage(
          image,
          3000
        )
    );


  await promiseWithTimeout(
    Promise.all(
      waits
    ),
    5000
  );


  console.log(
    "[Snapshot Export] image wait finished"
  );

}


/* ==========================================
   EXPORT IMAGE
========================================== */

function prepareExportImage(
  clone
) {

  const cloneImage =
    clone.querySelector(
      ".snapshot-image"
    );


  if (
    !cloneImage ||
    !imageNaturalWidth ||
    !imageNaturalHeight
  ) {

    console.log(
      "[Snapshot Export] no screenshot image"
    );

    return;

  }


  const exportSize =
    1080;


  const imageRatio =
    imageNaturalWidth /
    imageNaturalHeight;


  let width;
  let height;


  if (
    imageRatio >= 1
  ) {

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


  cloneImage.style.maxWidth =
    "none";


  cloneImage.style.maxHeight =
    "none";


  console.log(
    "[Snapshot Export] screenshot size:",
    width,
    height
  );

}


/* ==========================================
   EXPORT
========================================== */

async function exportSnapshot() {

  console.log(
    "[Snapshot Export] START"
  );


  if (
    typeof html2canvas !==
    "function"
  ) {

    console.error(
      "[Snapshot Export] html2canvas is not loaded"
    );


    alert(
      translations[
        currentLanguage
      ].exportError
    );


    return;

  }


  if (!snapshot) {

    console.error(
      "[Snapshot Export] #snapshot not found"
    );


    alert(
      translations[
        currentLanguage
      ].exportError
    );


    return;

  }


  exportButton.disabled =
    true;


  let stage =
    null;


  try {

    console.log(
      "[Snapshot Export] waiting for fonts"
    );


    if (
      document.fonts &&
      document.fonts.ready
    ) {

      await promiseWithTimeout(
        document.fonts.ready,
        3000
      );

    }


    console.log(
      "[Snapshot Export] creating export stage"
    );


    stage =
      document.createElement(
        "div"
      );


    stage.style.position =
      "fixed";


    stage.style.left =
      "0";


    stage.style.top =
      "0";


    stage.style.width =
      "1080px";


    stage.style.height =
      "1080px";


    stage.style.opacity =
      "0";


    stage.style.pointerEvents =
      "none";


    stage.style.overflow =
      "hidden";


    stage.style.zIndex =
      "-1";


    const clone =
      snapshot.cloneNode(
        true
      );


    clone.removeAttribute(
      "id"
    );


    clone.style.width =
      "1080px";


    clone.style.height =
      "1080px";


    clone.style.minWidth =
      "1080px";


    clone.style.maxWidth =
      "1080px";


    clone.style.minHeight =
      "1080px";


    clone.style.maxHeight =
      "1080px";


    clone.style.aspectRatio =
      "auto";


    clone.style.margin =
      "0";


    clone.style.position =
      "relative";


    stage.appendChild(
      clone
    );


    document.body.appendChild(
      stage
    );


    console.log(
      "[Snapshot Export] clone attached"
    );


    prepareExportImage(
      clone
    );


    await waitForImages(
      clone
    );


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


    console.log(
      "[Snapshot Export] starting html2canvas"
    );


    const canvas =
      await Promise.race([

        html2canvas(
          clone,
          {

            width:
              1080,

            height:
              1080,

            scale:
              1,

            useCORS:
              true,

            allowTaint:
              false,

            backgroundColor:
              null,

            logging:
              false,

            scrollX:
              0,

            scrollY:
              0,

            windowWidth:
              1080,

            windowHeight:
              1080

          }
        ),


        new Promise(
          (_, reject) => {

            setTimeout(
              () => {

                reject(
                  new Error(
                    "html2canvas timeout"
                  )
                );

              },
              20000
            );

          }
        )

      ]);


    console.log(
      "[Snapshot Export] html2canvas finished"
    );


    if (
      !canvas ||
      !canvas.width ||
      !canvas.height
    ) {

      throw new Error(
        "Canvas creation failed"
      );

    }


    console.log(
      "[Snapshot Export] canvas:",
      canvas.width,
      canvas.height
    );


    const blob =
      await new Promise(
        (resolve, reject) => {

          canvas.toBlob(
            result => {

              if (result) {

                resolve(
                  result
                );

              } else {

                reject(
                  new Error(
                    "PNG Blob creation failed"
                  )
                );

              }

            },

            "image/png"

          );

        }
      );


    console.log(
      "[Snapshot Export] PNG Blob created",
      blob.size
    );


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


    link.style.display =
      "none";


    document.body.appendChild(
      link
    );


    console.log(
      "[Snapshot Export] starting download"
    );


    link.click();


    link.remove();


    setTimeout(
      () => {

        URL.revokeObjectURL(
          objectUrl
        );

      },
      3000
    );


    console.log(
      "[Snapshot Export] COMPLETE"
    );


  } catch (error) {

    console.error(
      "[Snapshot Export] ERROR:",
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
      translations[
        currentLanguage
      ].export;


    console.log(
      "[Snapshot Export] END"
    );

  }

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
  updateImageTransform
);


imageYInput.addEventListener(
  "input",
  updateImageTransform
);


imageScaleInput.addEventListener(
  "input",
  updateImageTransform
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
      () =>
        setCoverColor(
          button
        )
    );

  }
);


textColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () =>
        setTextColor(
          button
        )
    );

  }
);


panelColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () =>
        setPanelColor(
          button
        )
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
        () =>
          setLanguage(
            button.dataset.lang
          )
      );

    }
  );


exportButton.addEventListener(
  "click",
  exportSnapshot
);


window.addEventListener(
  "resize",
  updateImageGeometry
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


  setLanguage(
    "ja"
  );


  setupXLinks();


  if (
    document.fonts &&
    document.fonts.load
  ) {

    document.fonts.load(
      '900 32px "M PLUS Rounded 1c"'
    );

  }


  console.log(
    "[Snapshot Maker] script.js loaded"
  );

}


initialize();