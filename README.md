# FFXIV CHARACTER SNAPSHOT MAKER

**EORZEA PROFILE STUDIO - Web Tool Series 03**

FFXIVのスクリーンショットに、キャラクター情報・ジョブ情報・プレイスタイル・質問への回答などを組み合わせて、正方形のキャラクタースナップショット画像を作成するWebツールです。

---

## EORZEA PROFILE STUDIO

EORZEA PROFILE STUDIO は、FINAL FANTASY XIV のキャラクターを表現するための非公式Webツールシリーズです。

### 01
FFXIV CHARACTER PROFILE CARD

### 02
FFXIV CHARACTER PORTRAIT MAKER

### 03
FFXIV CHARACTER SNAPSHOT MAKER

---

## FFXIV CHARACTER SNAPSHOT MAKER

スクリーンショットをアップロードし、以下の情報を組み合わせて1枚の画像として書き出すことができます。

- キャラクター名
- World / Data Center
- ジョブ・レベル
- プレイスタイル
- 5つの質問への回答
- MESSAGE
- スクリーンショット位置調整
- スクリーンショット拡大
- カバーフィルム
- 文字色変更
- 情報パネル色変更
- 情報パネル透明度変更
- フォント変更
- 日本語 / 英語表示

完成した画像は1080 × 1080pxのPNG画像として書き出します。

---

## Lodestone Data

LodestoneのキャラクターページURLを入力することで、キャラクター情報を取得できます。

取得対象：

- キャラクター名
- World
- Data Center
- ジョブレベル

取得したキャラクター名・World情報は手動で編集することもできます。

LodestoneへのアクセスにはCloudflare Workerを中継として使用しています。

---

## File Structure

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