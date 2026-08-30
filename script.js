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


/* LANGUAGE */

const languageJaButton =
  document.getElementById("languageJaButton");

const languageEnButton =
  document.getElementById("languageEnButton");

const languageButtons =
  document.querySelectorAll(
    ".language-button"
  );


/* IMAGE */

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


/* COVER */

const coverFilm =
  document.getElementById("coverFilm");

const coverOpacityInput =
  document.getElementById("coverOpacityInput");

const coverOpacityValue =
  document.getElementById("coverOpacityValue");


/* PANEL */

const panelOpacityInput =
  document.getElementById("panelOpacityInput");

const panelOpacityValue =
  document.getElementById("panelOpacityValue");


/* FONT */

const fontSelect =
  document.getElementById("fontSelect");


/* LODESTONE */

const lodestoneUrlInput =
  document.getElementById("lodestoneUrlInput");

const lodestoneFetchButton =
  document.getElementById("lodestoneFetchButton");

const lodestoneStatus =
  document.getElementById("lodestoneStatus");


/* CHARACTER */

const characterNameInput =
  document.getElementById("characterNameInput");

const worldInput =
  document.getElementById("worldInput");

const previewCharacterName =
  document.getElementById("previewCharacterName");

const previewWorld =
  document.getElementById("previewWorld");


/* PLAY STYLE */

const previewPlayStyle =
  document.getElementById("previewPlayStyle");

const playStyleCheckboxes =
  document.querySelectorAll(
    ".play-style-checkbox"
  );


/* BUTTONS */

const coverButtons =
  document.querySelectorAll(
    "[data-cover]"
  );

const textColorButtons =
  document.querySelectorAll(
    "[data-text-color]"
  );


/* EXPORT */

const exportButton =
  document.getElementById("exportButton");



/* ==========================================
   LANGUAGE
========================================== */

let currentLanguage = "ja";


const translations = {

  ja: {

    heroLine1:
      "あなたの冒険を、",

    heroLine2:
      "一枚のスナップショットに。",

    heroDescription:
      "スクリーンショットにキャラクター情報、ジョブ、プレイスタイル、5つの質問への回答を添えて、あなただけの一枚を作成できます。",

    uploadLabel:
      "スクリーンショット",

    uploadButton:
      "画像を選択",

    imageX:
      "横位置",

    imageY:
      "縦位置",

    zoomLabel:
      "拡大",

    coverColor:
      "カバー色",

    coverOpacity:
      "カバー濃度",

    textColor:
      "文字色",

    fontLabel:
      "フォント",

    fontSans:
      "ゴシック",

    fontRounded:
      "丸ゴシック",

    fontSerif:
      "明朝",

    fontModern:
      "モダン",

    fontCondensed:
      "コンデンス",

    panelOpacity:
      "キャラクターパネル透明度",


    lodestoneUrlLabel:
      "Lodestone キャラクターURL",

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "LodestoneのキャラクターURLを入力して、データを取得します。",

    lodestoneFetching:
      "キャラクターデータを取得しています...",

    lodestoneSuccess:
      "キャラクターデータを取得しました。",

    lodestoneError:
      "キャラクターデータを取得できませんでした。",

    lodestoneEmpty:
      "LodestoneのキャラクターURLを入力してください。",

    lodestoneInvalid:
      "正しいLodestoneキャラクターURLを入力してください。",

    manualEdit:
      "取得データ / 手動編集",

    characterName:
      "キャラクター名",

    lodestoneNote:
      "Lodestoneから取得したキャラクター名・Worldは、取得後も手動で変更できます。ジョブレベルはLodestoneデータを使用します。",


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

    messageLabel:
      "自由メッセージ",

    export:
      "PNG画像を書き出す",


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

    styleMap:
      "地図",

    styleHunt:
      "モブハント",

    styleRoleplay:
      "ロールプレイ",

    styleFriends:
      "フレンド交流",


    aboutText:
      "本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。"

  },


  en: {

    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    heroDescription:
      "Combine a screenshot with character information, jobs, play style and five answers to create your own character snapshot.",

    uploadLabel:
      "Screenshot",

    uploadButton:
      "SELECT IMAGE",

    imageX:
      "Horizontal Position",

    imageY:
      "Vertical Position",

    zoomLabel:
      "Zoom",

    coverColor:
      "Cover Color",

    coverOpacity:
      "Cover Opacity",

    textColor:
      "Text Color",

    fontLabel:
      "Font",

    fontSans:
      "Sans Serif",

    fontRounded:
      "Rounded Gothic",

    fontSerif:
      "Serif",

    fontModern:
      "Modern",

    fontCondensed:
      "Condensed",

    panelOpacity:
      "Character Panel Opacity",


    lodestoneUrlLabel:
      "Lodestone Character URL",

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "Enter a Lodestone character URL to retrieve character data.",

    lodestoneFetching:
      "Retrieving character data...",

    lodestoneSuccess:
      "Character data retrieved.",

    lodestoneError:
      "Failed to retrieve character data.",

    lodestoneEmpty:
      "Please enter a Lodestone character URL.",

    lodestoneInvalid:
      "Please enter a valid Lodestone character URL.",

    manualEdit:
      "Retrieved Data / Manual Edit",

    characterName:
      "Character Name",

    lodestoneNote:
      "Character name and World retrieved from Lodestone can still be edited manually. Job levels use Lodestone data.",


    question1:
      "Describe your character in one phrase.",

    question2:
      "How do you most enjoy spending time in Eorzea?",

    question3:
      "What matters most to you on your adventures?",

    question4:
      "What is your most memorable experience?",

    question5:
      "What goal would you like to achieve next?",

    messageLabel:
      "Free Message",

    export:
      "EXPORT PNG",


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

    styleMap:
      "Treasure Maps",

    styleHunt:
      "Hunts",

    styleRoleplay:
      "Roleplay",

    styleFriends:
      "Friends",


    aboutText:
      "This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site. Users are responsible for the screenshots and information they choose to use or enter."

  }

};



/* ==========================================
   PLAY STYLE TRANSLATIONS
========================================== */

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

  goldsaucer:{
    ja:"ゴールドソーサー",
    en:"Gold Saucer"
  },

  fishing:{
    ja:"釣り",
    en:"Fishing"
  },

  map:{
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
    en:"Friends"
  }

};



/* ==========================================
   APPLY LANGUAGE
========================================== */

function applyLanguage() {

  document.documentElement.lang =
    currentLanguage;


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;


      const text =
        translations[
          currentLanguage
        ][
          key
        ];


      if (
        typeof text !==
        "undefined"
      ) {

        element.textContent =
          text;

      }

    });


  /* ------------------------------------------
     JP / EN BUTTON STATE
  ------------------------------------------ */

  languageButtons.forEach(
    button => {

      const isActive =
        button.dataset.language ===
        currentLanguage;


      button.classList.toggle(
        "active",
        isActive
      );


      button.setAttribute(
        "aria-pressed",
        isActive
          ? "true"
          : "false"
      );

    }
  );


  updatePlayStyle();

  updateAllCounters();

}



/* ==========================================
   LANGUAGE BUTTON EVENTS
========================================== */

languageJaButton.addEventListener(
  "click",
  () => {

    if (
      currentLanguage === "ja"
    ) {
      return;
    }


    currentLanguage =
      "ja";


    applyLanguage();

  }
);


languageEnButton.addEventListener(
  "click",
  () => {

    if (
      currentLanguage === "en"
    ) {
      return;
    }


    currentLanguage =
      "en";


    applyLanguage();

  }
);



/* ==========================================
   IMAGE UPLOAD
========================================== */

imageUpload.addEventListener(
  "change",
  event => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    const reader =
      new FileReader();


    reader.onload =
      loadEvent => {

        snapshotImage.src =
          loadEvent.target.result;


        snapshotImage.style.display =
          "block";


        photoPlaceholder.style.display =
          "none";

      };


    reader.readAsDataURL(
      file
    );

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

coverButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        coverButtons.forEach(
          item => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        coverFilm.classList.remove(
          "cover-black",
          "cover-white"
        );


        coverFilm.classList.add(
          button.dataset.cover ===
          "white"
            ? "cover-white"
            : "cover-black"
        );

      }
    );

  }
);



function updateCoverOpacity() {

  const value =
    Number(
      coverOpacityInput.value
    );


  coverFilm.style.setProperty(
    "--cover-opacity",
    value / 100
  );


  coverOpacityValue.textContent =
    `${value}%`;

}


coverOpacityInput.addEventListener(
  "input",
  updateCoverOpacity
);



/* ==========================================
   TEXT / PANEL COLOR
========================================== */

textColorButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        textColorButtons.forEach(
          item => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        snapshot.classList.remove(
          "text-white",
          "text-black"
        );


        snapshot.classList.add(
          button.dataset.textColor ===
          "black"
            ? "text-black"
            : "text-white"
        );

      }
    );

  }
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
    "--character-panel-alpha",
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
    "—";


  previewWorld.textContent =
    worldInput.value.trim()
    ||
    "—";

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
   JOB ICON MAP
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
    "SGE"
  ],

  [
    "MNK",
    "DRG",
    "NIN",
    "SAM",
    "RPR",
    "VPR",
    "BRD",
    "MCH",
    "DNC"
  ],

  [
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
    "CUL"
  ],

  [
    "MIN",
    "BTN",
    "FSH"
  ]

];



/* ==========================================
   EMPTY JOB DATA
========================================== */

function createEmptyJobs() {

  const jobs =
    {};


  Object
    .keys(JOB_ICON_MAP)
    .forEach(
      job => {

        jobs[job] =
          "—";

      }
    );


  return jobs;

}



/* ==========================================
   RENDER JOBS
========================================== */

function renderJobs(
  jobs = {}
) {

  const container =
    document.getElementById(
      "jobPreview"
    );


  container.innerHTML =
    "";


  JOB_GROUPS.forEach(
    (
      group,
      groupIndex
    ) => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "job-icon-row";


      if (
        groupIndex === 1
      ) {

        row.classList.add(
          "job-row-dps-1"
        );

      }


      group.forEach(
        abbreviation => {

          const item =
            document.createElement(
              "div"
            );


          item.className =
            "job-icon-item";


          if (
            abbreviation ===
            "DNC"
          ) {

            item.classList.add(
              "job-dnc"
            );

          }


          const img =
            document.createElement(
              "img"
            );


          img.src =
            `assets/jobs/${JOB_ICON_MAP[abbreviation]}`;


          img.alt =
            abbreviation;


          img.loading =
            "eager";


          const levelElement =
            document.createElement(
              "div"
            );


          levelElement.className =
            "job-level";


          const level =
            jobs[
              abbreviation
            ];


          levelElement.textContent =
            level !== undefined
            &&
            level !== null
              ? level
              : "—";


          item.appendChild(
            img
          );


          item.appendChild(
            levelElement
          );


          row.appendChild(
            item
          );

        }
      );


      container.appendChild(
        row
      );

    }
  );

}



/* ==========================================
   APPLY LODESTONE DATA
========================================== */

function applyLodestoneCharacter(
  data
) {

  if (data.name) {

    characterNameInput.value =
      data.name;

  }


  if (data.world) {

    /*
      Lodestone:
      Mandragora [Meteor]

      Preview:
      Mandragora / Meteor
    */

    const world =
      data.world
        .replace(
          /\s*\[([^\]]+)\]\s*/,
          " / $1"
        )
        .trim();


    worldInput.value =
      world;

  }


  if (data.jobs) {

    renderJobs(
      data.jobs
    );

  }


  updateCharacter();

}



/* ==========================================
   LODESTONE STATUS
========================================== */

function setLodestoneStatus(
  type,
  text
) {

  lodestoneStatus
    .classList
    .remove(
      "success",
      "error"
    );


  if (
    type === "success"
  ) {

    lodestoneStatus
      .classList
      .add(
        "success"
      );

  }


  if (
    type === "error"
  ) {

    lodestoneStatus
      .classList
      .add(
        "error"
      );

  }


  lodestoneStatus.textContent =
    text;

}



/* ==========================================
   VALIDATE LODESTONE URL
========================================== */

function isValidLodestoneUrl(
  value
) {

  try {

    const url =
      new URL(
        value
      );


    const allowedHosts = [

      "jp.finalfantasyxiv.com",

      "na.finalfantasyxiv.com",

      "eu.finalfantasyxiv.com",

      "fr.finalfantasyxiv.com",

      "de.finalfantasyxiv.com"

    ];


    return (
      allowedHosts.includes(
        url.hostname
      )
      &&
      /^\/lodestone\/character\/\d+\/?$/.test(
        url.pathname
      )
    );

  }

  catch {

    return false;

  }

}



/* ==========================================
   REAL LODESTONE FETCH
========================================== */

lodestoneFetchButton.addEventListener(
  "click",
  async () => {

    const url =
      lodestoneUrlInput
        .value
        .trim();


    if (!url) {

      setLodestoneStatus(
        "error",
        translations[
          currentLanguage
        ].lodestoneEmpty
      );

      return;

    }


    if (
      !isValidLodestoneUrl(
        url
      )
    ) {

      setLodestoneStatus(
        "error",
        translations[
          currentLanguage
        ].lodestoneInvalid
      );

      return;

    }


    lodestoneFetchButton.disabled =
      true;


    setLodestoneStatus(
      "",
      translations[
        currentLanguage
      ].lodestoneFetching
    );


    try {

      const response =
        await fetch(
          WORKER_URL
          +
          "/?url="
          +
          encodeURIComponent(
            url
          ),
          {
            method:"GET",
            cache:"no-store"
          }
        );


      if (
        !response.ok
      ) {

        throw new Error(
          `Worker HTTP ${response.status}`
        );

      }


      const data =
        await response.json();


      if (
        !data.success
      ) {

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
        translations[
          currentLanguage
        ].lodestoneSuccess
      );

    }

    catch (error) {

      console.error(
        "Lodestone fetch error:",
        error
      );


      setLodestoneStatus(
        "error",
        translations[
          currentLanguage
        ].lodestoneError
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
        playStyleTranslations[
          key
        ][
          currentLanguage
        ];


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
   QUESTIONS
========================================== */

const questionData = [

  {
    input:
      document.getElementById(
        "answer1"
      ),

    preview:
      document.getElementById(
        "previewAnswer1"
      ),

    counter:
      document.getElementById(
        "answer1Count"
      ),

    max:80
  },


  {
    input:
      document.getElementById(
        "answer2"
      ),

    preview:
      document.getElementById(
        "previewAnswer2"
      ),

    counter:
      document.getElementById(
        "answer2Count"
      ),

    max:80
  },


  {
    input:
      document.getElementById(
        "answer3"
      ),

    preview:
      document.getElementById(
        "previewAnswer3"
      ),

    counter:
      document.getElementById(
        "answer3Count"
      ),

    max:80
  },


  {
    input:
      document.getElementById(
        "answer4"
      ),

    preview:
      document.getElementById(
        "previewAnswer4"
      ),

    counter:
      document.getElementById(
        "answer4Count"
      ),

    max:80
  },


  {
    input:
      document.getElementById(
        "answer5"
      ),

    preview:
      document.getElementById(
        "previewAnswer5"
      ),

    counter:
      document.getElementById(
        "answer5Count"
      ),

    max:80
  }

];



function counterText(
  length,
  max
) {

  if (
    currentLanguage === "ja"
  ) {

    return (
      `${length} / ${max}文字`
    );

  }


  return (
    `${length} / ${max}`
  );

}



questionData.forEach(
  item => {

    item.input.addEventListener(
      "input",
      () => {

        item.preview.textContent =
          item.input
            .value
            .trim()
          ||
          "—";


        item.counter.textContent =
          counterText(
            item.input.value.length,
            item.max
          );

      }
    );

  }
);



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

const messageCount =
  document.getElementById(
    "messageCount"
  );


messageInput.addEventListener(
  "input",
  () => {

    previewMessage.textContent =
      messageInput
        .value
        .trim()
      ||
      "—";


    messageCount.textContent =
      counterText(
        messageInput.value.length,
        160
      );

  }
);



function updateAllCounters() {

  questionData.forEach(
    item => {

      item.counter.textContent =
        counterText(
          item.input.value.length,
          item.max
        );

    }
  );


  messageCount.textContent =
    counterText(
      messageInput.value.length,
      160
    );

}



/* ==========================================
   EXPORT
   1080 × 1080
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


  let exportStage =
    null;


  try {

    if (
      document.fonts &&
      document.fonts.ready
    ) {

      await document.fonts.ready;

    }


    exportStage =
      document.createElement(
        "div"
      );


    exportStage.style.position =
      "fixed";

    exportStage.style.left =
      "-20000px";

    exportStage.style.top =
      "0";

    exportStage.style.width =
      "1080px";

    exportStage.style.height =
      "1080px";

    exportStage.style.pointerEvents =
      "none";


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

    clone.style.maxWidth =
      "none";

    clone.style.margin =
      "0";

    clone.style.aspectRatio =
      "auto";


    exportStage.appendChild(
      clone
    );


    document.body.appendChild(
      exportStage
    );


    const images =
      [
        ...clone.querySelectorAll(
          "img"
        )
      ];


    await Promise.all(

      images.map(
        img => {

          if (
            img.complete
          ) {

            return Promise.resolve();

          }


          return new Promise(
            resolve => {

              img.onload =
                resolve;

              img.onerror =
                resolve;

            }
          );

        }
      )

    );


    const canvas =
      await html2canvas(
        clone,
        {
          backgroundColor:null,

          scale:1,

          width:1080,

          height:1080,

          useCORS:true,

          allowTaint:false,

          logging:false
        }
      );


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


    const url =
      URL.createObjectURL(
        blob
      );


    const link =
      document.createElement(
        "a"
      );


    link.href =
      url;


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
          url
        );

      },
      1000
    );

  }

  catch (error) {

    console.error(
      error
    );


    alert(
      currentLanguage === "ja"
        ? "画像の書き出しに失敗しました。"
        : "Failed to export the image."
    );

  }

  finally {

    if (
      exportStage
    ) {

      exportStage.remove();

    }


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
   INITIALIZE
========================================== */

function initialize() {

  updateImageX();

  updateImageY();

  updateImageScale();

  updateCoverOpacity();

  updatePanelOpacity();

  updateCharacter();


  /*
    Lodestone取得前も
    全ジョブの配置を表示
  */

  renderJobs(
    createEmptyJobs()
  );


  updatePlayStyle();

  updateAllCounters();

  applyLanguage();

}


initialize();