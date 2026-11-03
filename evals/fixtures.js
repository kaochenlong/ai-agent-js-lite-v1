import { z } from "zod";
import { defineTool } from "../utils/func-tool.js";

function fixtureTool({ name, description, parameters, result }) {
  return defineTool({
    name,
    description,
    parameters,
    fn: async () => result,
  });
}

export const evalToolset = {
  currentTime: fixtureTool({
    name: "get_current_time",
    description: "取得現在的台灣時間",
    parameters: z.object({}),
    result: "2026/8/3 下午 2:00:00",
  }),
  weather: fixtureTool({
    name: "get_weather",
    description: "取得指定城市的即時天氣資訊",
    parameters: z.object({ city: z.string() }),
    result: {
      city: "Taipei",
      temperature: 30,
      humidity: 70,
      description: "晴",
    },
  }),
  youbike: fixtureTool({
    name: "get_nearby_youbike",
    description: "取得指定座標附近的 YouBike 站點",
    parameters: z.object({
      lat: z.number(),
      lon: z.number(),
      radius: z.number().default(500),
      available_amount: z.number().default(0),
      limit: z.number().default(3),
    }),
    result: [
      {
        name: "捷運臺北車站(M2出口)",
        available_rent: 7,
        distance: 210,
      },
    ],
  }),
};
