# AI Agent 實作工作坊 lite-v1（JavaScript 版）

by eddie@5xcampus.com

這是 AI Agent 課程的精簡版，沒有 RAG。全程使用 Node.js 22、OpenAI Node SDK v7
的 Responses API、`@openai/agents` 與 MCP，模型全程使用 `gpt-6-luna`，
從 `3.1-agents-sdk` 開始把 reasoning effort 設成 `low`。

## 章節進度（分支）

| 分支 | 主題 |
|------|------|
| `0.1-hello-world` | 起步與 Node.js 22 |
| `1.1-setup-env` | dotenv 環境變數 |
| `1.2-openai-api` | 第一次 Responses API 呼叫 |
| `1.3-openai-api-loop` | 對話迴圈 |
| `1.4-openai-api-with-memory` | lowdb 對話記憶 |
| `2.1-tool-calling-1` | Responses function tool 概念 |
| `2.2-tool-calling-2` | 真實 OpenWeather tool |
| `2.3-tool-calling-3` | 多 tool 與有上限的多輪 loop |
| `2.4-tool-calling-youbike` | YouBike API + Haversine |
| `2.5-tool-calling-current-time` | Zod schema 與執行期驗證 |
| `3.1-agents-sdk` | Agents SDK、handoff 與跨輪狀態 |
| `3.2-mcp-server` | MCP server |
| `4.1-agents-md` | 把班導師的規矩搬到 AGENTS.md |

## 開發環境

GitHub Codespaces 會依 `.devcontainer/devcontainer.json` 建立 Node.js 22
環境。也可以在本機使用 Node.js 22+。

```bash
npm install
cp .env.example .env
npm start
```

## 外部服務

- `OPENAI_API_KEY`：1.2 起需要。
- `OPENWEATHER_API_KEY`：2.2 的天氣工具需要。

金鑰只放在 `.env` 或 Codespaces secrets，不要提交到 Git。
