/* ==========================================
CONFIG
========================================== */

const WORKER_URL =
  "https://ffxiv-character-snapshot-maker.cyan-ciel.workers.dev";


/* ==========================================
ELEMENTS
========================================== */

const snapshot =
  document.getElementById("snapshot");

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

const coverBlackButton =
  document.getElementById("coverBlackButton");

const coverWhiteButton =
  document.getElementById("coverWhiteButton");

const coverOpacityInput =
  document.getElementById("coverOpacityInput");

const coverOpacityValue =
  document.getElementById("coverOpacityValue");

const coverFilm =
  document.getElementById("coverFilm");

const textWhiteButton =
  document.getElementById("textWhiteButton");

const textBlackButton =
  document.getElementById("textBlackButton");

const panelBlackButton =
  document.getElementById("panelBlackButton");

const panelWhiteButton =
  document.getElementById("panelWhiteButton");

const panelOpacityInput =
  document.getElementById("panelOpacityInput");

const panelOpacityValue =
  document.getElementById("panelOpacityValue");

const fontSelect =
  document.getElementById("fontSelect");

const characterNameInput =
  document.getElementById("characterNameInput");

const worldInput =
  document.getElementById("worldInput");

const previewCharacterName =
  document.getElementById("previewCharacterName");

const previewWorld =
  document.getElementById("previewWorld");

const lodestoneUrlInput =
  document.getElementById("lodestoneUrlInput");

const lodestoneFetchButton =
  document.getElementById("lodestoneFetchButton");

const lodestoneStatus =
  document.getElementById("lodestoneStatus");

const jobIconList =
  document.getElementById("jobIconList");

const previewPlayStyle =
  document.getElementById("previewPlayStyle");

const playStyleCheckboxes =
  document.querySelectorAll(
    ".play-style-checkbox"
  );

const messageInput =
  document.getElementById("messageInput");

const previewMessage =
  document.getElementById("previewMessage");

const messageCount =
  document.getElementById("messageCount");

const exportButton =
  document.getElementById("exportButton");

const languageJa =
  document.getElementById("languageJa");

const languageEn =
  document.getElementById("languageEn");


const answerInputs = [];

const previewAnswers = [];

const answerCounts = [];


for (
  let i = 1;
  i <= 5;
  i++
) {

  answerInputs.push(
    document.getElementById(
      `answer${i}`
    )
  );

  previewAnswers.push(
    document.getElementById(
      `previewAnswer${i}`
    )
  );

  answerCounts.push(
    document.getElementById(
      `answerCount${i}`
    )
  );

}



/* ==========================================
LANGUAGE
========================================== */

let currentLanguage =
  "ja";


const translations = {

  ja: {

    heroLine1:
      "あなたの冒険を、",

    heroLine2:
      "一枚のスナップショットに。",

    heroDescription:
      "スクリーンショットにキャラクター情報、ジョブ、プレイスタイル、5つの質問への回答を添えて、あなただけの一枚を作成できます。",

    screenshotLabel:
      "スクリーンショット",

    selectImage:
      "画像を選択",

    horizontalPosition:
      "横位置",

    verticalPosition:
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

    lodestoneUrlLabel:
      "Lodestone キャラクターURL",

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "LodestoneのキャラクターURLを入力して、データを取得します。",

    lodestoneLoading:
      "Lodestoneからデータを取得しています...",

    lodestoneSuccess:
      "キャラクターデータを取得しました。",

    lodestoneError:
      "キャラクターデータを取得できませんでした。",

    manualEdit:
      "取得データ / 手動編集",

    characterName:
      "キャラクター名",

    world:
      "サーバー名",

    characterNote:
      "キャラクター名・サーバー名は取得後も手動で変更できます。ジョブレベルはLodestoneから取得したデータを使用します。",

    playStyle:
      "プレイスタイル",

    questions:
      "5つの質問",

    question1:
      "あなたのキャラクターを一言で表すと？",

    question2:
      "いちばん好きなエオルゼアでの過ごし方は？",

    question3:
      "冒険で大切にしていることは？",

    question4:
      "いちばん思い出深い出来事は？",

    question5:
      "これから叶えたい目標は？",

    styleRelaxed:
      "のんびり",

    styleSS:
      "SS撮影",

    styleStory:
      "ストーリー",

    styleBattle:
      "バトル",

    styleHighend:
      "高難度",

    styleGatherer:
      "ギャザラー",

    styleCrafter:
      "クラフター",

    styleHousing:
      "ハウジング",

    styleGlamour:
      "ミラプリ",

    styleGoldSaucer:
      "ゴールドソーサー",

    styleFishing:
      "釣り",

    styleTreasure:
      "地図",

    styleHunt:
      "モブハント",

    styleRoleplay:
      "ロールプレイ",

    styleFriends:
      "フレンド交流",

    export:
      "PNG画像を書き出す",

    disclaimer:
      "本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。"

  },


  en: {

    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    heroDescription:
      "Create your own FFXIV snapshot with your screenshot, character information, jobs, play style and answers to five questions.",

    screenshotLabel:
      "Screenshot",

    selectImage:
      "SELECT IMAGE",

    horizontalPosition:
      "Horizontal position",

    verticalPosition:
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
      "Info panel color",

    panelOpacity:
      "Info panel opacity",

    lodestoneUrlLabel:
      "Lodestone Character URL",

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "Enter a Lodestone character URL to retrieve character data.",

    lodestoneLoading:
      "Retrieving character data from Lodestone...",

    lodestoneSuccess:
      "Character data retrieved.",

    lodestoneError:
      "Character data could not be retrieved.",

    manualEdit:
      "Retrieved Data / Manual Edit",

    characterName:
      "Character Name",

    world:
      "World / Data Center",

    characterNote:
      "Character name and World can still be edited after retrieval. Job levels are loaded from Lodestone.",

    playStyle:
      "Play Style",

    questions:
      "Five Questions",

    question1:
      "Describe your character in one phrase.",

    question2:
      "What is your favorite way to spend time in Eorzea?",

    question3:
      "What matters most to you on your adventures?",

    question4:
      "What is your most memorable experience?",

    question5:
      "What goal would you like to achieve next?",

    styleRelaxed:
      "Relaxed",

    styleSS:
      "Screenshots",

    styleStory:
      "Story",

    styleBattle:
      "Battle",

    styleHighend:
      "High-end",

    styleGatherer:
      "Gathering",

    styleCrafter:
      "Crafting",

    styleHousing:
      "Housing",

    styleGlamour:
      "Glamour",

    styleGoldSaucer:
      "Gold Saucer",

    styleFishing:
      "Fishing",

    styleTreasure:
      "Treasure Maps",

    styleHunt:
      "Hunts",

    styleRoleplay:
      "Roleplay",

    styleFriends:
      "Social",

    export:
      "EXPORT PNG",

    disclaimer:
      "This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site. Users are responsible for the screenshots and information they choose to use or enter."

  }

};



const playStyleTranslations = {

  relaxed:{
    ja:"のんびり",
    en:"Relaxed"
  },

  ss:{
    ja:"SS撮影",
    en:"Screenshots"
  },

  story:{
    ja:"ストーリー",
    en:"Story"
  },

  battle:{
    ja:"バトル",
    en:"Battle"
  },

  highend:{
    ja:"高難度",
    en:"High-end"
  },

  pvp:{
    ja:"PvP",
    en:"PvP"
  },

  gatherer:{
    ja:"ギャザラー",
    en:"Gathering"
  },

  crafter:{
    ja:"クラフター",
    en:"Crafting"
  },

  housing:{
    ja:"ハウジング",
    en:"Housing"
  },

  glamour:{
    ja:"ミラプリ",
    en:"Glamour"
  },

  goldSaucer:{
    ja:"ゴールドソーサー",
    en:"Gold Saucer"
  },

  fishing:{
    ja:"釣り",
    en:"Fishing"
  },

  treasure:{
    ja:"地図",
    en:"Treasure Maps"
  },

  hunt:{
    ja:"モブハント",
    en:"Hunts"
  },

  roleplay:{
    ja:"ロールプレイ",
    en:"Roleplay"
  },

  friends:{
    ja:"フレンド交流",
    en:"Social"
  }

};



function setLanguage(language) {

  currentLanguage =
    language;


  document.documentElement.lang =
    language;


  languageJa.classList.toggle(
    "active",
    language === "ja"
  );


  languageEn.classList.toggle(
    "active",
    language === "en"
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
          translations[language][key]
        ) {

          element.textContent =
            translations[language][key];

        }

      }
    );


  updatePlayStyle();

}


languageJa.addEventListener(
  "click",
  () => setLanguage("ja")
);


languageEn.addEventListener(
  "click",
  () => setLanguage("en")
);



/* ==========================================
SCREENSHOT
========================================== */

let currentImageUrl =
  null;


imageUpload.addEventListener(
  "change",
  event => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    if (currentImageUrl) {

      URL.revokeObjectURL(
        currentImageUrl
      );

    }


    currentImageUrl =
      URL.createObjectURL(
        file
      );


    snapshotImage.onload =
      () => {

        photoPlaceholder.style.display =
          "none";

      };


    snapshotImage.src =
      currentImageUrl;

  }
);



/* ==========================================
IMAGE POSITION
========================================== */

function updateImageX() {

  const value =
    Number(
      imageXInput.value
    );


  snapshotImage.style.setProperty(
    "--image-x",
    `${value}%`
  );


  imageXValue.textContent =
    `${value}%`;

}


function updateImageY() {

  const value =
    Number(
      imageYInput.value
    );


  snapshotImage.style.setProperty(
    "--image-y",
    `${value}%`
  );


  imageYValue.textContent =
    `${value}%`;

}


function updateImageScale() {

  const value =
    Number(
      imageScaleInput.value
    );


  snapshotImage.style.setProperty(
    "--image-scale",
    value / 100
  );


  imageScaleValue.textContent =
    `${value}%`;

}


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



/* ==========================================
COVER
========================================== */

let coverColor =
  "black";


function updateCover() {

  const opacity =
    Number(
      coverOpacityInput.value
    )
    / 100;


  const rgb =
    coverColor === "black"
      ? "0,0,0"
      : "255,255,255";


  coverFilm.style.background =
    `rgba(${rgb},${opacity})`;


  coverOpacityValue.textContent =
    `${coverOpacityInput.value}%`;

}


coverBlackButton.addEventListener(
  "click",
  () => {

    coverColor =
      "black";


    coverBlackButton.classList.add(
      "active"
    );


    coverWhiteButton.classList.remove(
      "active"
    );


    updateCover();

  }
);


coverWhiteButton.addEventListener(
  "click",
  () => {

    coverColor =
      "white";


    coverWhiteButton.classList.add(
      "active"
    );


    coverBlackButton.classList.remove(
      "active"
    );


    updateCover();

  }
);


coverOpacityInput.addEventListener(
  "input",
  updateCover
);



/* ==========================================
TEXT COLOR
========================================== */

function setTextColor(color) {

  snapshot.classList.remove(
    "text-white",
    "text-black"
  );


  snapshot.classList.add(
    `text-${color}`
  );


  textWhiteButton.classList.toggle(
    "active",
    color === "white"
  );


  textBlackButton.classList.toggle(
    "active",
    color === "black"
  );

}


textWhiteButton.addEventListener(
  "click",
  () => setTextColor("white")
);


textBlackButton.addEventListener(
  "click",
  () => setTextColor("black")
);



/* ==========================================
PANEL COLOR
========================================== */

function setPanelColor(color) {

  const rgb =
    color === "black"
      ? "0,0,0"
      : "244,241,233";


  snapshot.style.setProperty(
    "--character-panel-rgb",
    rgb
  );


  snapshot.style.setProperty(
    "--info-panel-rgb",
    rgb
  );


  panelBlackButton.classList.toggle(
    "active",
    color === "black"
  );


  panelWhiteButton.classList.toggle(
    "active",
    color === "white"
  );

}


panelBlackButton.addEventListener(
  "click",
  () => setPanelColor("black")
);


panelWhiteButton.addEventListener(
  "click",
  () => setPanelColor("white")
);



/* ==========================================
PANEL OPACITY
========================================== */

function updatePanelOpacity() {

  const value =
    Number(
      panelOpacityInput.value
    );


  snapshot.style.setProperty(
    "--info-panel-alpha",
    value / 100
  );


  panelOpacityValue.textContent =
    `${value}%`;

}


panelOpacityInput.addEventListener(
  "input",
  updatePanelOpacity
);



/* ==========================================
FONT
========================================== */

fontSelect.addEventListener(
  "change",
  () => {

    snapshot.classList.remove(
      "font-sans",
      "font-rounded",
      "font-serif",
      "font-modern",
      "font-condensed"
    );


    snapshot.classList.add(
      `font-${fontSelect.value}`
    );

  }
);



/* ==========================================
CHARACTER
========================================== */

function updateCharacter() {

  previewCharacterName.textContent =
    characterNameInput.value.trim()
    ||
    "HIKARINO SENSHI";


  previewWorld.textContent =
    worldInput.value.trim()
    ||
    "Ramuh / Meteor";

}


characterNameInput.addEventListener(
  "input",
  updateCharacter
);


worldInput.addEventListener(
  "input",
  updateCharacter
);



/* ==========================================
JOB ICONS
========================================== */

const JOB_ICON_MAP = {

  PLD:"Paladin.png",
  WAR:"Warrior.png",
  DRK:"DarkKnight.png",
  GNB:"Gunbreaker.png",

  WHM:"WhiteMage.png",
  SCH:"Scholar.png",
  AST:"Astrologian.png",
  SGE:"Sage.png",

  MNK:"Monk.png",
  DRG:"Dragoon.png",
  NIN:"Ninja.png",
  SAM:"Samurai.png",
  RPR:"Reaper.png",
  VPR:"Viper.png",

  BRD:"Bard.png",
  MCH:"Machinist.png",
  DNC:"Dancer.png",

  BLM:"BlackMage.png",
  SMN:"Summoner.png",
  RDM:"RedMage.png",
  PCT:"Pictomancer.png",
  BLU:"BlueMage.png",

  CRP:"Carpenter.png",
  BSM:"Blacksmith.png",
  ARM:"Armorer.png",
  GSM:"Goldsmith.png",
  LTW:"Leatherworker.png",
  WVR:"Weaver.png",
  ALC:"Alchemist.png",
  CUL:"Culinarian.png",

  MIN:"Miner.png",
  BTN:"Botanist.png",
  FSH:"Fisher.png"

};



/*
  32ジョブを3行に配置
*/

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


let currentJobs =
  {};


function renderJobs(
  jobs = currentJobs
) {

  currentJobs =
    jobs || {};


  jobIconList.innerHTML =
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
        abbreviation => {

          const item =
            document.createElement(
              "div"
            );


          item.className =
            "job-item";


          if (
            abbreviation === "DNC"
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
            `assets/jobs/${JOB_ICON_MAP[abbreviation]}`;


          image.alt =
            abbreviation;


          const level =
            document.createElement(
              "div"
            );


          level.className =
            "job-level";


          level.textContent =
            jobs[abbreviation]
            ??
            "—";


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


      jobIconList.appendChild(
        row
      );

    }
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


  if (
    type === "success" ||
    type === "error"
  ) {

    lodestoneStatus.classList.add(
      type
    );

  }


  lodestoneStatus.textContent =
    text;

}



function formatWorld(world) {

  if (!world) {
    return "";
  }


  /*
    Mandragora [Meteor]
    ↓
    Mandragora / Meteor
  */

  return world.replace(
    /\s*\[([^\]]+)\]\s*$/,
    " / $1"
  );

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


  if (data.jobs) {

    renderJobs(
      data.jobs
    );

  }


  updateCharacter();

}



lodestoneFetchButton.addEventListener(
  "click",
  async () => {

    const url =
      lodestoneUrlInput.value.trim();


    if (!url) {

      setLodestoneStatus(
        "error",
        currentLanguage === "ja"
          ? "LodestoneのキャラクターURLを入力してください。"
          : "Enter a Lodestone character URL."
      );

      return;

    }


    lodestoneFetchButton.disabled =
      true;


    setLodestoneStatus(
      "",
      translations[currentLanguage]
        .lodestoneLoading
    );


    try {

      const response =
        await fetch(
          WORKER_URL +
          "/?url=" +
          encodeURIComponent(
            url
          )
        );


      if (!response.ok) {

        throw new Error(
          `Worker HTTP ${response.status}`
        );

      }


      const data =
        await response.json();


      if (!data.success) {

        throw new Error(
          data.error
          ||
          "Lodestone fetch failed"
        );

      }


      applyLodestoneCharacter(
        data
      );


      setLodestoneStatus(
        "success",
        translations[currentLanguage]
          .lodestoneSuccess
      );

    }

    catch (error) {

      console.error(
        error
      );


      setLodestoneStatus(
        "error",
        translations[currentLanguage]
          .lodestoneError
      );

    }

    finally {

      lodestoneFetchButton.disabled =
        false;

    }

  }
);



/* ==========================================
PLAY STYLE
========================================== */

function updatePlayStyle() {

  previewPlayStyle.innerHTML =
    "";


  const selected =
    [
      ...playStyleCheckboxes
    ]
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
      currentLanguage === "ja"
        ? "未選択"
        : "None";


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
        playStyleTranslations[key]
          [currentLanguage];


      previewPlayStyle.appendChild(
        tag
      );

    }
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



/* ==========================================
QUESTION AUTO FIT
========================================== */

function fitAnswerText(
  element
) {

  /*
    CSSの基準サイズへ戻す
  */

  element.style.fontSize =
    "";


  const snapshotWidth =
    snapshot.clientWidth;


  if (!snapshotWidth) {
    return;
  }


  /*
    1cqw相当
  */

  const unit =
    snapshotWidth / 100;


  let size =
    1.3 * unit;


  const minimum =
    .78 * unit;


  element.style.fontSize =
    `${size}px`;


  /*
    回答要素そのものの高さが
    大きくなりすぎないよう縮小
  */

  const maxHeight =
    3.2 * unit;


  while (
    element.scrollHeight >
      maxHeight
    &&
    size >
      minimum
  ) {

    size -=
      .05 * unit;


    element.style.fontSize =
      `${size}px`;

  }

}



/* ==========================================
QUESTIONS
========================================== */

answerInputs.forEach(
  (
    input,
    index
  ) => {

    input.addEventListener(
      "input",
      () => {

        const text =
          input.value;


        previewAnswers[index]
          .textContent =
            text.trim()
            ||
            "—";


        answerCounts[index]
          .textContent =
            `${text.length} / 80`;


        requestAnimationFrame(
          () => {

            fitAnswerText(
              previewAnswers[index]
            );

          }
        );

      }
    );

  }
);



/* ==========================================
MESSAGE AUTO FIT
========================================== */

function fitMessageText() {

  previewMessage.style.fontSize =
    "";


  const container =
    document.querySelector(
      ".bottom-message-area"
    );


  if (!container) {
    return;
  }


  const snapshotWidth =
    snapshot.clientWidth;


  if (!snapshotWidth) {
    return;
  }


  const unit =
    snapshotWidth / 100;


  let size =
    1.35 * unit;


  const minimum =
    .72 * unit;


  previewMessage.style.fontSize =
    `${size}px`;


  /*
    MESSAGEラベルと罫線を除いた
    実際の使用可能領域を測る
  */

  const label =
    container.querySelector(
      ".message-label"
    );


  const rule =
    container.querySelector(
      ".message-rule"
    );


  const containerHeight =
    container.clientHeight;


  const labelHeight =
    label
      ? label.offsetHeight
      : 0;


  const ruleHeight =
    rule
      ? (
          rule.offsetHeight +
          parseFloat(
            getComputedStyle(rule)
              .marginTop
          ) +
          parseFloat(
            getComputedStyle(rule)
              .marginBottom
          )
        )
      : 0;


  const availableHeight =
    Math.max(
      0,
      containerHeight -
      labelHeight -
      ruleHeight
    );


  while (
    previewMessage.scrollHeight >
      availableHeight
    &&
    size >
      minimum
  ) {

    size -=
      .05 * unit;


    previewMessage.style.fontSize =
      `${size}px`;

  }

}



/* ==========================================
MESSAGE
========================================== */

function updateMessage() {

  const text =
    messageInput.value;


  previewMessage.textContent =
    text.trim()
    ||
    "—";


  messageCount.textContent =
    `${text.length} / 160`;


  requestAnimationFrame(
    fitMessageText
  );

}


messageInput.addEventListener(
  "input",
  updateMessage
);



/* ==========================================
WAIT IMAGES
========================================== */

async function waitForSnapshotImages(
  root = snapshot
) {

  const images =
    [
      ...root.querySelectorAll(
        "img"
      )
    ];


  await Promise.all(
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

            const finish =
              () => resolve();


            image.addEventListener(
              "load",
              finish,
              {
                once:true
              }
            );


            image.addEventListener(
              "error",
              finish,
              {
                once:true
              }
            );

          }
        );

      }
    )
  );

}



/* ==========================================
EXPORT
========================================== */

async function exportSnapshot() {

  if (
    typeof html2canvas ===
    "undefined"
  ) {

    alert(
      currentLanguage === "ja"
        ? "画像生成ライブラリを読み込めませんでした。"
        : "The image export library could not be loaded."
    );

    return;

  }


  exportButton.disabled =
    true;


  const originalText =
    exportButton.textContent;


  exportButton.textContent =
    currentLanguage === "ja"
      ? "書き出し中..."
      : "EXPORTING...";


  try {

    if (
      document.fonts &&
      document.fonts.ready
    ) {

      await document.fonts.ready;

    }


    await waitForSnapshotImages();


    /*
      長文フィットを確定
    */

    previewAnswers.forEach(
      fitAnswerText
    );


    fitMessageText();


    await new Promise(
      resolve =>
        requestAnimationFrame(
          () =>
            requestAnimationFrame(
              resolve
            )
        )
    );


    const rect =
      snapshot.getBoundingClientRect();


    /*
      snapshotは1:1固定。

      ここではwidthを基準に
      1080pxへ拡大する。

      width/heightをhtml2canvasへ
      強制指定しないことで
      プレビューの縦横比を維持。
    */

    const previewSize =
      rect.width;


    if (
      !previewSize ||
      previewSize <= 0
    ) {

      throw new Error(
        "Snapshot size is invalid."
      );

    }


    const exportScale =
      1080 / previewSize;


    const capturedCanvas =
      await html2canvas(
        snapshot,
        {

          backgroundColor:null,

          scale:exportScale,

          useCORS:true,

          allowTaint:false,

          logging:false,

          scrollX:
            -window.scrollX,

          scrollY:
            -window.scrollY

        }
      );


    /*
      数px程度の誤差が発生した場合も
      縦横比を潰さず正方形へ。
    */

    let finalCanvas;


    if (
      capturedCanvas.width === 1080 &&
      capturedCanvas.height === 1080
    ) {

      finalCanvas =
        capturedCanvas;

    }

    else {

      finalCanvas =
        document.createElement(
          "canvas"
        );


      finalCanvas.width =
        1080;


      finalCanvas.height =
        1080;


      const context =
        finalCanvas.getContext(
          "2d"
        );


      const sourceSize =
        Math.min(
          capturedCanvas.width,
          capturedCanvas.height
        );


      const sourceX =
        (
          capturedCanvas.width -
          sourceSize
        )
        / 2;


      const sourceY =
        (
          capturedCanvas.height -
          sourceSize
        )
        / 2;


      context.drawImage(

        capturedCanvas,

        sourceX,
        sourceY,

        sourceSize,
        sourceSize,

        0,
        0,

        1080,
        1080

      );

    }


    const blob =
      await new Promise(
        resolve => {

          finalCanvas.toBlob(
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
      "FFXIV-character-snapshot.png";


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

  }

  catch (error) {

    console.error(
      "Snapshot export error:",
      error
    );


    alert(
      currentLanguage === "ja"
        ? "画像の書き出しに失敗しました。"
        : "Failed to export the image."
    );

  }

  finally {

    exportButton.disabled =
      false;


    exportButton.textContent =
      originalText;

  }

}


exportButton.addEventListener(
  "click",
  exportSnapshot
);



/* ==========================================
RESIZE
========================================== */

let resizeTimer;


window.addEventListener(
  "resize",
  () => {

    clearTimeout(
      resizeTimer
    );


    resizeTimer =
      setTimeout(
        () => {

          previewAnswers.forEach(
            fitAnswerText
          );


          fitMessageText();

        },
        100
      );

  }
);



/* ==========================================
INITIAL JOB DATA
========================================== */

const dummyJobs = {

  PLD:90,
  WAR:100,
  DRK:100,
  GNB:100,

  WHM:100,
  SCH:100,
  AST:100,
  SGE:100,

  MNK:100,
  DRG:100,
  NIN:100,
  SAM:100,
  RPR:100,
  VPR:100,

  BRD:100,
  MCH:100,
  DNC:100,

  BLM:100,
  SMN:100,
  RDM:100,
  PCT:100,
  BLU:80,

  CRP:100,
  BSM:100,
  ARM:100,
  GSM:100,
  LTW:100,
  WVR:100,
  ALC:100,
  CUL:100,

  MIN:100,
  BTN:100,
  FSH:100

};



/* ==========================================
INITIALIZE
========================================== */

function initialize() {

  updateImageX();

  updateImageY();

  updateImageScale();

  updateCover();

  updatePanelOpacity();

  updateCharacter();

  renderJobs(
    dummyJobs
  );

  updatePlayStyle();

  updateMessage();

  setLanguage(
    "ja"
  );

}


initialize();