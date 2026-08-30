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
- スクリーンショット横位置調整
- スクリーンショット縦位置調整
- スクリーンショット拡大
- カバーフィルム
- カバーフィルム濃度
- 文字色変更
- 情報パネル色変更
- 情報パネル透明度変更
- フォント変更
- 日本語 / 英語表示

完成した画像は1080 × 1080pxのPNG画像として書き出します。

---

## Screenshot Adjustment

スクリーンショットは元画像の縦横比を維持した状態で表示します。

画像を正方形へ強制変形する処理は行いません。

### 拡大

100%では、元画像の縦横比を維持したまま、正方形のスナップショット領域を完全に覆う最小サイズで表示します。

拡大率を上げると、100%時のサイズを基準として拡大されます。

### 横位置

- 0% : 左側
- 50% : 中央
- 100% : 右側

画像の横方向にはみ出している部分の範囲内で移動します。

横方向にはみ出しが存在しない場合、横位置を変更しても画像は移動しません。

### 縦位置

- 0% : 上側
- 50% : 中央
- 100% : 下側

画像の縦方向にはみ出している部分の範囲内で移動します。

縦方向にはみ出しが存在しない場合、縦位置を変更しても画像は移動しません。

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

## Job Layout

ジョブアイコンはスナップショット上部の情報パネルに3行で表示します。

戦闘ジョブ、クラフター、ギャザラーを含みます。

各アイコンの下に取得したジョブレベルを表示します。

---

## Questions Layout

質問は以下の配置で表示します。

```text
QUESTIONS

1                    4
2                    5
3

MESSAGE
────────────────────
Free text
```

QUESTIONSとMESSAGEは同じ情報パネル内に配置されます。

回答が長い場合は表示領域に合わせてフォントサイズを自動調整します。

MESSAGEについても表示可能領域を測定し、必要に応じて文字サイズを自動的に縮小します。

---

## Information Panel

キャラクター情報とQUESTIONS / MESSAGEには半透明の情報パネルを使用します。

設定可能項目：

- BLACK
- WHITE
- 透明度

文字色はWHITE / BLACKから選択できます。

---

## Fonts

以下の表示スタイルを選択できます。

- ゴシック
- まる文字
- 明朝
- モダン
- コンデンス

OSにインストールされているシステムフォントを利用します。

---

## Languages

- 日本語
- English

ページ上部のJP / ENボタンから切り替えできます。

---

## Image Export

画像生成には html2canvas を使用しています。

プレビューの正方形レイアウトを維持した状態でキャプチャし、1080 × 1080pxのPNGとして出力します。

書き出し時に縦方向と横方向を別々の倍率で変形する処理は行いません。

html2canvasによる数px程度の丸め誤差が発生した場合のみ、中央の正方形領域を切り出して1080 × 1080pxへ変換します。

これにより、元スクリーンショットの縦横比を維持します。

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
```

---

## Disclaimer

本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。

本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。

また、スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。

This is an unofficial fan-made web tool and is not affiliated with or endorsed by SQUARE ENIX CO., LTD.

The creator assumes no responsibility for any loss or damage arising from the use of this site.

Users are responsible for the screenshots and information they choose to use or enter.

---

## Credits

IDEA BY cyan_stella

EORZEA PROFILE STUDIO

(C) SQUARE ENIX