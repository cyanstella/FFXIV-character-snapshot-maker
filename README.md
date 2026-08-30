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
- 情報パネルの白 / 黒切り替え
- 情報パネル透明度調整
- フォント切り替え
- 丸文字フォント
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


## スクリーンショット調整

画像はカード全面に表示されます。

拡大率を上げることで、横位置・縦位置スライダーを使用して画像の表示位置を調整できます。

### 横位置

- 0% : 左側
- 50% : 中央
- 100% : 右側

### 縦位置

- 0% : 上側
- 50% : 中央
- 100% : 下側


## 文字設定

以下のフォントを選択できます。

- ゴシック
- 丸文字
- 明朝
- モダン
- コンデンス

丸文字には Google Fonts の M PLUS Rounded 1c を使用しています。


## 色設定

### カバーフィルム

- BLACK
- WHITE

### 文字色

- WHITE
- BLACK

### 情報パネル色

- BLACK
- WHITE

文字色と情報パネル色は独立して変更できます。


## スナップショット構成

生成される画像は1080 × 1080 pxの正方形です。

上部：

- キャラクター名
- World / Data Center
- ジョブ
- プレイスタイル

中央：

- キャラクタースクリーンショット

下部：

- QUESTIONS
- 5つの質問と回答
- MESSAGE


## QUESTIONS レイアウト

質問は2カラムで配置します。

### 左側

1. あなたのキャラクターを一言で表すと？
2. いちばん好きなエオルゼアでの過ごし方は？
3. 冒険で大切にしていることは？

### 右側

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
- Google Fonts


## バックエンド

Lodestoneデータ取得用の中継としてCloudflare Workerを使用しています。

構成：

```text
Browser / GitHub Pages
        ↓
Cloudflare Worker
        ↓
FINAL FANTASY XIV Lodestone
```


## PNG画像出力

プレビューと生成画像の見た目を一致させるため、画面上に表示されているスナップショットそのものをhtml2canvasでキャプチャします。

画面上のプレビューサイズに応じてスケールを計算し、最終的に1080 × 1080 pxのPNG画像として出力します。

書き出し専用の別レイアウトは生成せず、

**プレビュー = 完成画像**

となることを基本仕様としています。


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
```


## 対応言語

- 日本語
- English


## 制作者

IDEA BY cyan_stella


## Disclaimer

本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。

本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。

また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。


## Copyright

(C) SQUARE ENIX