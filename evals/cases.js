export const evalCases = [
  {
    id: "weather-tool",
    input: "請問台北現在天氣如何？",
    expected: {
      tool: "get_weather",
      language: "zh",
    },
  },
  {
    id: "python-handoff",
    input: "Python 的 list 跟 tuple 差在哪裡？",
    expected: {
      handoff: "Python 老師",
      language: "zh",
    },
  },
  {
    id: "vue-handoff",
    input: "Vue component props 要怎麼設計比較好？",
    expected: {
      handoff: "Vue 老師",
      language: "zh",
    },
  },
];
