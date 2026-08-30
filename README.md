# FFXIV CHARACTER SNAPSHOT MAKER

FFXIVのスクリーンショットに、
キャラクター情報・ジョブ・プレイスタイル・質問・メッセージを組み合わせて、
正方形のキャラクタースナップショットを作成するWebツールです。

EORZEA PROFILE STUDIO 第3弾。

---

## URL

https://cyanstella.github.io/FFXIV-character-snapshot-maker/

---

## EORZEA PROFILE STUDIO

https://cyanstella.github.io/EORZEA_PROFILE_STUDIO/

---

## FEATURES

- Screenshot upload
- Horizontal image position
- Vertical image position
- Zoom
- Cover color
- Cover opacity
- Text color
- Information panel color
- Information panel opacity
- Font selection
- Lodestone character data
- Job levels
- Play Style
- Five Questions
- Message
- Japanese / English
- 1080 × 1080 PNG export
- X sharing
- X hashtag search

---

## FONT

丸文字には

M PLUS Rounded 1c

を使用。

Google Fontsから読み込むため、
端末にフォントがインストールされていなくても表示できます。

---

## X HASHTAG

#FFXIVCHARACTERSNAPSHOTMAKER

---

## X POST

「Xに投稿する」ボタンから以下を自動入力します。

- FFXIV CHARACTER SNAPSHOT MAKER
- サイトURL
- #FFXIVCHARACTERSNAPSHOTMAKER

画像は書き出したPNGをユーザーがX側で添付します。

---

## COMMUNITY POSTS

サイト上部と書き出しエリアの両方に

「みんなの投稿を見る」

ボタンを配置。

#FFXIVCHARACTERSNAPSHOTMAKER

の最新検索結果を開きます。

---

## LAYOUT

PCでは

- 左：設定
- 右：PREVIEW

の2カラム構成。

HERO、Creator、ABOUTは同一の

1400px max-width

コンテナを使用します。

そのため、HEROのオレンジタブ・タイトル・説明文と、
Creatorエリアの左基準が統一されます。

---

## PREVIEW

PREVIEW見出し、
Snapshot本体、
Exportエリアは

.preview-frame

内にまとめています。

これによりPREVIEW見出しと画像本体の左端を一致させています。

---

## EXPORT

html2canvasを使用し、

1080 × 1080px

PNGとして書き出します。

---

## FILE STRUCTURE

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
   └─ jobs/