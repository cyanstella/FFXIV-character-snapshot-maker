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


const languageJa =
  document.getElementById(
    "languageJa"
  );

const languageEn =
  document.getElementById(
    "languageEn"
  );


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


const fontSelect =
  document.getElementById(
    "fontSelect"
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


const jobIconArea =
  document.getElementById(
    "jobIconArea"
  );


const playStyleCheckboxes =
  document.querySelectorAll(
    "[data-style]"
  );

const previewPlayStyle =
  document.getElementById(
    "previewPlayStyle"
  );


const questionInputs =
  document.getElementById(
    "questionInputs"
  );


const messageInput =
  document.getElementById(
    "messageInput"
  );

const messageCount =
  document.getElementById(
    "messageCount"
  );

const previewMessage =
  document.getElementById(
    "previewMessage"
  );


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


const exportButton =
  document.getElementById(
    "exportButton"
  );


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

    screenshot:
      "スクリーンショット",

    selectImage:
      "画像を選択",

    horizontalPosition:
      "横位置",

    verticalPosition:
      "縦位置",

    zoom:
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

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "LodestoneのキャラクターURLを入力して、データを取得します。",

    manualEdit:
      "取得データ / 手動編集",

    characterName:
      "キャラクター名",

    world:
      "World / Data Center",

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

    message:
      "ひとこと",

    export:
      "PNG画像を書き出す",

    styleRelax:
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

    styleGold:
      "ゴールドソーサー",

    styleFishing:
      "釣り",

    styleMap:
      "地図",

    styleHunt:
      "モブハント",

    styleRP:
      "ロールプレイ",

    styleFriends:
      "フレンド交流",

    disclaimer:
      "本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。",

    none:
      "未選択",

    lodestoneLoading:
      "Lodestoneからデータを取得しています…",

    lodestoneSuccess:
      "キャラクターデータを取得しました。",

    lodestoneError:
      "キャラクターデータを取得できませんでした。"

  },


  en: {

    heroLine1:
      "Your adventure,",

    heroLine2:
      "captured in a single snapshot.",

    heroDescription:
      "Create a unique snapshot with your screenshot, character information, jobs, play style and answers to five questions.",

    screenshot:
      "Screenshot",

    selectImage:
      "SELECT IMAGE",

    horizontalPosition:
      "Horizontal position",

    verticalPosition:
      "Vertical position",

    zoom:
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
      "Information panel color",

    panelOpacity:
      "Information panel opacity",

    lodestoneUrl:
      "Lodestone Character URL",

    lodestoneFetch:
      "LODESTONE DATA GET",

    lodestoneReady:
      "Enter a Lodestone character URL to retrieve character data.",

    manualEdit:
      "Retrieved Data / Manual Edit",

    characterName:
      "Character Name",

    world:
      "World / Data Center",

    question1:
      "Describe your character in one phrase.",

    question2:
      "What is your favorite way to spend time in Eorzea?",

    question3:
      "What matters most to you on your adventures?",

    question4:
      "What is your most memorable experience?",

    question5:
      "What would you like to achieve next?",

    message:
      "Message",

    export:
      "EXPORT PNG",

    styleRelax:
      "Relax",

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

    styleGold:
      "Gold Saucer",

    styleFishing:
      "Fishing",

    styleMap:
      "Treasure Maps",

    styleHunt:
      "Hunts",

    styleRP:
      "Roleplay",

    styleFriends:
      "Social",

    disclaimer:
      "This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site. Users are responsible for the screenshots and information they choose to use or enter.",

    none:
      "None",

    lodestoneLoading:
      "Retrieving character data from Lodestone…",

    lodestoneSuccess:
      "Character data retrieved successfully.",

    lodestoneError:
      "Character data could not be retrieved."

  }

};


/* ==========================================
QUESTIONS
========================================== */

const QUESTION_KEYS = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5"
];


const previewAnswers = [

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


function createQuestionInputs() {

  questionInputs.innerHTML =
    "";


  QUESTION_KEYS.forEach(
    (
      key,
      index
    ) => {

      const block =
        document.createElement(
          "div"
        );

      block.className =
        "question-input-block";


      const label =
        document.createElement(
          "div"
        );

      label.className =
        "question-input-label";

      label.textContent =
        `${index + 1}. ${translations[currentLanguage][key]}`;


      const textarea =
        document.createElement(
          "textarea"
        );

      textarea.rows =
        3;

      textarea.maxLength =
        80;

      textarea.dataset.questionIndex =
        index;


      const count =
        document.createElement(
          "div"
        );

      count.className =
        "character-count";

      count.textContent =
        "0 / 80";


      textarea.addEventListener(
        "input",
        () => {

          previewAnswers[
            index
          ].textContent =
            textarea.value.trim()
            ||
            "—";


          count.textContent =
            `${textarea.value.length} / 80`;

        }
      );


      block.append(
        label,
        textarea,
        count
      );


      questionInputs.appendChild(
        block
      );

    }
  );

}


/* ==========================================
LANGUAGE UPDATE
========================================== */

function updateLanguage() {

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
          ][key]
        ) {

          element.textContent =
            translations[
              currentLanguage
            ][key];

        }

      }
    );


  languageJa.classList.toggle(
    "active",
    currentLanguage === "ja"
  );

  languageEn.classList.toggle(
    "active",
    currentLanguage === "en"
  );


  createQuestionInputs();

  updatePlayStyle();

}


/* ==========================================
IMAGE
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
      () => {

        snapshotImage.src =
          reader.result;

        photoPlaceholder.style.display =
          "none";

      };


    reader.readAsDataURL(
      file
    );

  }
);


/*
  横位置

  50 = 中央
  0  = 左へ
  100 = 右へ

  object-positionではなく
  translateを使うことで
  拡大時にも確実に動かす。
*/

function updateImageX() {

  const value =
    Number(
      imageXInput.value
    );


  const offset =
    (value - 50) * 0.6;


  snapshotImage.style.setProperty(
    "--image-offset-x",
    `${offset}%`
  );


  imageXValue.textContent =
    `${value}%`;

}


function updateImageY() {

  const value =
    Number(
      imageYInput.value
    );


  const offset =
    (value - 50) * 0.6;


  snapshotImage.style.setProperty(
    "--image-offset-y",
    `${offset}%`
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


document
  .querySelectorAll(
    "[data-cover]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-cover]"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );


          button.classList.add(
            "active"
          );


          const color =
            button.dataset.cover;


          snapshot.style.setProperty(
            "--cover-rgb",
            color === "white"
              ? "255,255,255"
              : "0,0,0"
          );

        }
      );

    }
  );


/* ==========================================
TEXT COLOR
========================================== */

document
  .querySelectorAll(
    "[data-text-color]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-text-color]"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
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
PANEL
========================================== */

document
  .querySelectorAll(
    "[data-panel-color]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-panel-color]"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );


          button.classList.add(
            "active"
          );


          snapshot.style.setProperty(
            "--panel-rgb",
            button.dataset.panelColor ===
              "white"
              ? "255,255,255"
              : "0,0,0"
          );

        }
      );

    }
  );


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
FONT
========================================== */

function updateFont() {

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


/* ==========================================
CHARACTER
========================================== */

function updateCharacter() {

  previewCharacterName.textContent =
    characterNameInput.value.trim()
    ||
    "CHARACTER NAME";


  previewWorld.textContent =
    worldInput.value.trim()
    ||
    "World / Data Center";

}


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
  31ジョブを3行に配置。

  1行目:
  Tank + Healer + Meleeの一部

  2行目:
  DPS残り + Crafterの一部

  3行目:
  Crafter残り + Gatherer
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


let currentJobs = {};


function renderJobs(
  jobs = currentJobs
) {

  currentJobs =
    jobs || {};


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
        abbreviation => {

          const item =
            document.createElement(
              "div"
            );

          item.className =
            "job-item";


          if (
            abbreviation ===
            "DNC"
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


          const jobLevel =
            currentJobs[
              abbreviation
            ];


          level.textContent =
            Number.isInteger(
              jobLevel
            )
              ? jobLevel
              : "—";


          item.append(
            image,
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

const playStyleTranslations = {

  relax:{
    ja:"のんびり",
    en:"Relax"
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

  gold:{
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

  rp:{
    ja:"ロールプレイ",
    en:"Roleplay"
  },

  friends:{
    ja:"フレンド交流",
    en:"Social"
  }

};


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
        ][
          currentLanguage
        ];


      previewPlayStyle.appendChild(
        tag
      );

    }
  );

}


/* ==========================================
MESSAGE
========================================== */

function updateMessage() {

  const value =
    messageInput.value;


  previewMessage.textContent =
    value.trim()
    ||
    "—";


  messageCount.textContent =
    value.length;

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


function applyLodestoneCharacter(
  data
) {

  if (
    data.name
  ) {

    characterNameInput.value =
      data.name;

  }


  if (
    data.world
  ) {

    /*
      Lodestone:
      Mandragora [Meteor]

      表示:
      Mandragora / Meteor
    */

    worldInput.value =
      data.world
        .replace(
          /\s*\[([^\]]+)\]\s*$/,
          " / $1"
        );

  }


  currentJobs =
    data.jobs || {};


  updateCharacter();

  renderJobs(
    currentJobs
  );

}


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
        encodeURIComponent(
          url
        )
      );


    const data =
      await response.json();


    if (
      !response.ok
      ||
      !data.success
    ) {

      throw new Error(
        data.error
        ||
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

  }

  catch (
    error
  ) {

    console.error(
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


/* ==========================================
WAIT IMAGES
========================================== */

async function waitForImages(
  root
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
          image.complete
          &&
          image.naturalWidth > 0
        ) {

          return Promise.resolve();

        }


        return new Promise(
          resolve => {

            image.addEventListener(
              "load",
              resolve,
              {
                once:true
              }
            );


            image.addEventListener(
              "error",
              resolve,
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

重要:
プレビューをtransformで拡大縮小しない。

1080pxのクローンを作り、
そのまま1080x1080でhtml2canvasへ渡す。

これにより、
プレビューと書き出しの縦横比を一致させる。
========================================== */

async function exportSnapshot() {

  exportButton.disabled =
    true;


  const originalText =
    exportButton.textContent;


  exportButton.textContent =
    "...";


  let stage =
    null;


  try {

    stage =
      document.createElement(
        "div"
      );


    stage.className =
      "export-stage";


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


    /*
      CSS container query unit(cqw)が
      1080pxを基準に計算される。
    */

    clone.style.width =
      "1080px";

    clone.style.height =
      "1080px";

    clone.style.aspectRatio =
      "auto";


    await waitForImages(
      clone
    );


    /*
      Font描画待ち
    */

    if (
      document.fonts &&
      document.fonts.ready
    ) {

      await document.fonts.ready;

    }


    /*
      レイアウト確定を待つ
    */

    await new Promise(
      resolve =>
        requestAnimationFrame(
          () =>
            requestAnimationFrame(
              resolve
            )
        )
    );


    const canvas =
      await html2canvas(
        clone,
        {

          width:1080,
          height:1080,

          scale:1,

          useCORS:true,

          allowTaint:false,

          backgroundColor:null,

          logging:false,

          scrollX:0,
          scrollY:0,

          windowWidth:1080,
          windowHeight:1080

        }
      );


    const blob =
      await new Promise(
        resolve =>
          canvas.toBlob(
            resolve,
            "image/png"
          )
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
      "ffxiv-character-snapshot.png";


    document.body.appendChild(
      link
    );


    link.click();

    link.remove();


    URL.revokeObjectURL(
      objectUrl
    );

  }

  catch (
    error
  ) {

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
      stage
    ) {

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

languageJa.addEventListener(
  "click",
  () => {

    currentLanguage =
      "ja";

    updateLanguage();

  }
);


languageEn.addEventListener(
  "click",
  () => {

    currentLanguage =
      "en";

    updateLanguage();

  }
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


playStyleCheckboxes.forEach(
  checkbox => {

    checkbox.addEventListener(
      "change",
      updatePlayStyle
    );

  }
);


messageInput.addEventListener(
  "input",
  updateMessage
);


lodestoneFetchButton.addEventListener(
  "click",
  fetchLodestone
);


exportButton.addEventListener(
  "click",
  exportSnapshot
);


/* ==========================================
INITIALIZE
========================================== */

updateImageX();

updateImageY();

updateImageScale();

updateCoverOpacity();

updatePanelOpacity();

updateFont();

updateCharacter();

renderJobs({});

updatePlayStyle();

updateMessage();

createQuestionInputs();