import test from "node:test";
import assert from "node:assert/strict";
import {
  buildLearningPlan,
  searchCourses,
} from "../tools/courses.js";

test("依目標搜尋內部系統與 MCP 課程", () => {
  const results = searchCourses({
    query: "我想做查公司內部系統的 MCP 助理",
    limit: 3,
  });

  assert.equal(results[0].id, "mcp-integration");
  assert.ok(results[0].score > 0);
});

test("只用目錄裡存在的 course id 建立四週計畫", () => {
  const plan = buildLearningPlan({
    background: "會一點 JavaScript",
    goal: "完成內部系統助理",
    weeklyHours: 6,
    weeks: 4,
    courseIds: [
      "openai-api-foundations",
      "ai-agent-workshop",
      "mcp-integration",
    ],
  });

  assert.equal(plan.totalHours, 24);
  assert.equal(plan.schedule.length, 4);
  assert.ok(plan.schedule.every((week) => week.hours === 6));
});

test("拒絕不存在的課程 id", () => {
  const result = buildLearningPlan({
    background: "初學者",
    goal: "學 AI",
    weeklyHours: 4,
    weeks: 2,
    courseIds: ["imaginary-course"],
  });

  assert.match(result.error, /imaginary-course/);
});
