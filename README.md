# FFXIV CHARACTER SNAPSHOT MAKER

FFXIV CHARACTER SNAPSHOT MAKER は、
FINAL FANTASY XIV のスクリーンショットに
キャラクター情報、ジョブ、プレイスタイル、
5つの質問への回答、メッセージを組み合わせて、
正方形のプロフィールスナップショットを作成するWebツールです。

EORZEA PROFILE STUDIO シリーズの第3弾として制作しています。


## EORZEA PROFILE STUDIO

01. FFXIV CHARACTER PROFILE CARD
02. FFXIV CHARACTER PORTRAIT MAKER
03. FFXIV CHARACTER SNAPSHOT MAKER


## Features

- スクリーンショット画像の読み込み
- スクリーンショットの横位置調整
- スクリーンショットの縦位置調整
- スクリーンショットの拡大
- カバーフィルム色変更
- カバーフィルム濃度変更
- 文字色変更
- フォント変更
- 情報パネル色変更
- 情報パネル透明度変更
- Lodestoneキャラクターデータ取得
- キャラクター名表示
- World / Data Center表示
- ジョブアイコン表示
- ジョブレベル表示
- プレイスタイル複数選択
- 5つの質問
- フリーメッセージ
- 日本語 / 英語切り替え
- 1080 × 1080 PNG画像書き出し
- PC / スマートフォン対応


## Lodestone Data

Cloudflare Workerを経由して
Lodestoneのキャラクターページから以下を取得します。

- Character Name
- World / Data Center
- Job Levels

取得後もキャラクター名とWorld / Data Centerは
手動で編集できます。


## Output

出力画像サイズ:

1080 × 1080 px

形式:

PNG


## Files

```text
FFXIV-character-snapshot-maker/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ assets/
   └─ jobs/