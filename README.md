# FFXIV CHARACTER SNAPSHOT MAKER

FFXIVのキャラクター情報とスクリーンショットを組み合わせて、
1080 × 1080px のキャラクタースナップショット画像を作成するWebツールです。

EORZEA PROFILE STUDIO シリーズの第3弾です。

---

## EORZEA PROFILE STUDIO

### 01
FFXIV CHARACTER PROFILE CARD

https://cyanstella.github.io/FFXIV-profilecard/

### 02
FFXIV CHARACTER PORTRAIT MAKER

https://eorzea-profile-studio.pages.dev/

### 03
FFXIV CHARACTER SNAPSHOT MAKER

https://cyanstella.github.io/FFXIV-character-snapshot-maker/

### EORZEA PROFILE STUDIO

https://cyanstella.github.io/EORZEA_PROFILE_STUDIO/

---

# Features

## Screenshot

スクリーンショット画像を読み込み、
正方形のスナップショットとして使用できます。

以下の調整に対応しています。

- 横位置
- 縦位置
- 拡大率
- カバーフィルム色
- カバーフィルム濃度
- 文字色
- 情報パネル色
- 情報パネル透明度
- フォント

---

# Fonts

以下のフォントスタイルを選択できます。

- ゴシック
- 丸文字
- 明朝
- モダン
- コンデンス

丸文字には Google Fonts の

M PLUS Rounded 1c

を使用しています。

端末にインストールされているフォントに依存せず、
Windows / macOS / iPhone / iPad などでも
丸みのある日本語フォントを表示できるようにしています。

---

# Lodestone

LodestoneのキャラクターページURLを入力すると、
Cloudflare Workerを経由してキャラクター情報を取得します。

取得対象：

- Character Name
- World / Data Center
- Job Level

キャラクター名とWorld / Data Centerは
取得後に手動編集できます。

---

# Jobs

対応ジョブ：

## Tank

- Paladin
- Warrior
- Dark Knight
- Gunbreaker

## Healer

- White Mage
- Scholar
- Astrologian
- Sage

## Melee DPS

- Monk
- Dragoon
- Ninja
- Samurai
- Reaper
- Viper

## Physical Ranged DPS

- Bard
- Machinist
- Dancer

## Magical Ranged DPS

- Black Mage
- Summoner
- Red Mage
- Pictomancer
- Blue Mage

## Crafter

- Carpenter
- Blacksmith
- Armorer
- Goldsmith
- Leatherworker
- Weaver
- Alchemist
- Culinarian

## Gatherer

- Miner
- Botanist
- Fisher

ジョブアイコンは

assets/jobs/

に配置します。

---

# Play Style

複数選択可能です。

- のんびり
- SS撮影
- ストーリー
- バトル
- 高難度
- PvP
- ギャザラー
- クラフター
- ハウジング
- ミラプリ
- ゴールドソーサー
- 釣り
- 地図
- モブハント
- ロールプレイ
- フレンド交流

---

# Questions

5つの質問への回答を入力できます。

1. あなたのキャラクターを一言で表すと？
2. いちばん好きなエオルゼアでの過ごし方は？
3. 冒険で大切にしていることは？
4. いちばん思い出深い出来事は？
5. これから叶えたい目標は？

各回答：

最大80文字

---

# Message

キャラクターからのひとことを入力できます。

最大160文字。

QUESTIONSとMESSAGEは、
出力画像内では同じ情報パネルに表示されます。

---

# Language

日本語 / English の切り替えに対応しています。

切り替え対象：

- HERO
- Screenshot controls
- Character controls
- Play Style
- Questions
- Message
- X buttons
- Disclaimer
- Lodestone status

---

# X / Twitter

使用するハッシュタグ：

#FFXIVCHARACTERSNAPSHOTMAKER

サイト上部と画像書き出し欄の両方に

「みんなの投稿を見る」

ボタンを設置しています。

作成前に他のユーザーの投稿を参考にしたり、
作成後に他のスナップショットを見ることができます。

---

## Xに投稿する

「Xに投稿する」ボタンでは、
X Web Intentを利用します。

自動入力：

- FFXIV CHARACTER SNAPSHOT MAKER
- サイトURL
- #FFXIVCHARACTERSNAPSHOTMAKER

画像ファイル自体はブラウザから自動添付されないため、
書き出したPNGを利用者がX側で添付します。

---

# Export

html2canvas を使用して

1080 × 1080px

のPNG画像を書き出します。

元スクリーンショットの縦横比を維持し、
正方形を覆うように配置します。

プレビューで設定した

- 横位置
- 縦位置
- 拡大率
- カバー
- 情報パネル
- 文字色
- フォント

を出力画像にも反映します。

---

# Layout

PC：

- 左側：設定
- 右側：PREVIEW
- PREVIEWはスクロール時に追従

PREVIEW見出しとスナップショット本体は
同じラッパー内に配置し、
左端を一致させています。

スマートフォン：

1. SCREENSHOT
2. PREVIEW
3. CHARACTER
4. PLAY STYLE
5. QUESTIONS
6. MESSAGE

の順に縦並びになります。

---

# Design

EORZEA PROFILE STUDIOシリーズ共通デザインとして、
HERO上部にオレンジ色のアクセントタブを配置しています。

HEROはCreatorエリアとは独立した左基準のレイアウトとし、
シリーズ内の他サイトとの視覚的な統一を図っています。

---

# Files

```text
FFXIV-character-snapshot-maker/
│
├─ index.html
├─ style.css
├─ script.js
├─ README.md
│
└─ assets/
   ├─ images/
   │
   └─ jobs/
      ├─ Paladin.png
      ├─ Warrior.png
      ├─ DarkKnight.png
      ├─ Gunbreaker.png
      └─ ...