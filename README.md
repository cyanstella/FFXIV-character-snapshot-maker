# FFXIV CHARACTER SNAPSHOT MAKER

**FFXIV CHARACTER SNAPSHOT MAKER** は、  
FINAL FANTASY XIV のスクリーンショットにキャラクター情報を重ねて、  
1080 × 1080 px の正方形スナップショット画像を作成するWebツールです。

EORZEA PROFILE STUDIO シリーズの第3弾として制作しています。


## EORZEA PROFILE STUDIO

FFXIV向けのプロフィール・キャラクター画像作成ツールをまとめたWebツールシリーズです。

### 01
FFXIV CHARACTER PROFILE CARD

### 02
FFXIV CHARACTER PORTRAIT MAKER

### 03
FFXIV CHARACTER SNAPSHOT MAKER


## 主な機能

- FFXIVスクリーンショットの読み込み
- スクリーンショットの横位置調整
- スクリーンショットの縦位置調整
- スクリーンショットの拡大
- 白 / 黒のカバーフィルム
- カバーフィルム濃度調整
- 白 / 黒の文字色切り替え
- フォント切り替え
- 情報パネル透明度調整
- LodestoneキャラクターURLからの情報取得
- キャラクター名取得
- World / Data Center取得
- ジョブレベル取得
- ジョブアイコン表示
- プレイスタイル複数選択
- 5つの質問への回答
- 自由メッセージ
- 日本語 / 英語表示切り替え
- 1080 × 1080 px PNG画像出力


## スナップショット構成

生成される画像は1080 × 1080 pxの正方形です。

上部に、

- キャラクター名
- World / Data Center
- ジョブ
- プレイスタイル

を表示します。

中央部分はスクリーンショットを大きく見せるためのスペースとして使用します。

下部には、

- QUESTIONS
- 5つの質問と回答
- MESSAGE

を表示します。


## QUESTIONS レイアウト

質問は2カラムで配置します。

左側：

1. あなたのキャラクターを一言で表すと？
2. いちばん好きなエオルゼアでの過ごし方は？
3. 冒険で大切にしていることは？

右側：

4. いちばん思い出深い出来事は？
5. これから叶えたい目標は？


## JOB レイアウト

ジョブアイコンは3行構成で表示します。

### 1行目

PLD / WAR / DRK / GNB / WHM / SCH / AST / SGE / MNK / DRG / NIN

### 2行目

SAM / RPR / VPR / BRD / MCH / DNC / BLM / SMN / RDM / PCT / BLU

### 3行目

CRP / BSM / ARM / GSM / LTW / WVR / ALC / CUL / MIN / BTN / FSH


## Lodestone連携

LodestoneのキャラクターページURLを入力すると、Cloudflare Workerを経由してキャラクターデータを取得します。

取得対象：

- キャラクター名
- World
- Data Center
- ジョブレベル

取得後もキャラクター名とWorld / Data Centerは手動で編集できます。


## フロントエンド

使用技術：

- HTML
- CSS
- JavaScript
- html2canvas


## バックエンド

Lodestoneデータ取得用の中継としてCloudflare Workerを使用しています。

構成：

Browser / GitHub Pages  
↓  
Cloudflare Worker  
↓  
FINAL FANTASY XIV Lodestone


## ファイル構成

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
      ├─ WhiteMage.png
      ├─ Scholar.png
      ├─ Astrologian.png
      ├─ Sage.png
      ├─ Monk.png
      ├─ Dragoon.png
      ├─ Ninja.png
      ├─ Samurai.png
      ├─ Reaper.png
      ├─ Viper.png
      ├─ Bard.png
      ├─ Machinist.png
      ├─ Dancer.png
      ├─ BlackMage.png
      ├─ Summoner.png
      ├─ RedMage.png
      ├─ Pictomancer.png
      ├─ BlueMage.png
      ├─ Carpenter.png
      ├─ Blacksmith.png
      ├─ Armorer.png
      ├─ Goldsmith.png
      ├─ Leatherworker.png
      ├─ Weaver.png
      ├─ Alchemist.png
      ├─ Culinarian.png
      ├─ Miner.png
      ├─ Botanist.png
      └─ Fisher.png