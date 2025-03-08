export const bearCubsLeaderboard = [
  {
    category: "LLM baselines",
    model: "GPT zero-shot",
    accuracy: {
      all: "2.7%",
      text_only: "5.4%",
      multimodal: "0.0%",
    },
    answer_label: {
      correct: "3",
      wrong: "53",
      uncertain: "55",
      none: "0",
    },
    average_time: {
      correct: "---",
      wrong: "---",
      uncertain: "---",
    },
  },
  {
    category: "LLM baselines",
    model: "DeepSeek zero-shot",
    accuracy: {
      all: "8.1%",
      text_only: "10.7%",
      multimodal: "5.5%",
    },
    answer_label: {
      correct: "9",
      wrong: "82",
      uncertain: "19",
      none: "1",
    },
    average_time: {
      correct: "---",
      wrong: "---",
      uncertain: "---",
    },
  },
  {
    category: "LLM baselines",
    model: "GPT + Google Search",
    accuracy: {
      all: "0.0%",
      text_only: "0.0%",
      multimodal: "0.0%",
    },
    answer_label: {
      correct: "0",
      wrong: "4",
      uncertain: "0",
      none: "107",
    },
    average_time: {
      correct: "---",
      wrong: "---",
      uncertain: "---",
    },
  },
  {
    category: "LLM baselines",
    model: "DeepSeek + Google Search",
    accuracy: {
      all: "1.8%",
      text_only: "3.6%",
      multimodal: "0.0%",
    },
    answer_label: {
      correct: "2",
      wrong: "16",
      uncertain: "0",
      none: "93",
    },
    average_time: {
      correct: "---",
      wrong: "---",
      uncertain: "---",
    },
  },
  {
    category: "Non-CU agents",
    model: "Grok 3",
    accuracy: {
      all: "11.7%",
      text_only: "21.4%",
      multimodal: "1.8%",
    },
    answer_label: {
      correct: "13",
      wrong: "98",
      uncertain: "0",
      none: "0",
    },
    average_time: {
      correct: "1:09",
      wrong: "1:25",
      uncertain: "---",
    },
  },
  {
    category: "Non-CU agents",
    model: "Deep Research",
    accuracy: {
      all: "35.1%",
      text_only: "60.7%",
      multimodal: "9.1%",
    },
    answer_label: {
      correct: "39",
      wrong: "71",
      uncertain: "1",
      none: "0",
    },
    average_time: {
      correct: "4:39",
      wrong: "8:56",
      uncertain: "3:58",
    },
  },
  {
    category: "CU agents",
    model: "Proxy",
    accuracy: {
      all: "12.6%",
      text_only: "16.1%",
      multimodal: "9.1%",
    },
    answer_label: {
      correct: "14",
      wrong: "45",
      uncertain: "31",
      none: "21",
    },
    average_time: {
      correct: "1:52",
      wrong: "2:40",
      uncertain: "5:26",
    },
  },
  {
    category: "CU agents",
    model: "Computer Use",
    accuracy: {
      all: "14.4%",
      text_only: "19.6%",
      multimodal: "9.1%",
    },
    answer_label: {
      correct: "16",
      wrong: "24",
      uncertain: "71",
      none: "0",
    },
    average_time: {
      correct: "2:24",
      wrong: "2:45",
      uncertain: "3:33",
    },
  },
  {
    category: "CU agents",
    model: "Operator",
    accuracy: {
      all: "25.2%",
      text_only: "37.5%",
      multimodal: "12.7%",
    },
    answer_label: {
      correct: "28",
      wrong: "40",
      uncertain: "13",
      none: "30",
    },
    average_time: {
      correct: "2:58",
      wrong: "3:57",
      uncertain: "8:33",
    },
  },
  {
    category: "Human",
    model: "Human",
    accuracy: {
      all: "84.7%",
      text_only: "83.6%",
      multimodal: "85.7%",
    },
    answer_label: {
      correct: "94",
      wrong: "14",
      uncertain: "---",
      none: "3",
    },
    average_time: {
      correct: "4:24",
      wrong: "5:44",
      uncertain: "---",
    },
  },
];
