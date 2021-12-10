export const calcStatus = (title) => {
  const findIndex = statuses.findIndex((el) => el?.title === title);
  if (findIndex === -1) return [];

  return statuses[findIndex]?.siblings;
};
const statuses = [
  {
    title: "todo",
    siblings: [{ id: 1, title: "in progress" }],
  },
  {
    title: "in progress",
    siblings: [
      { id: 2, title: "blocked" },
      { id: 3, title: "In Qa" },
    ],
  },
  {
    title: "blocked",
    siblings: [{ id: 4, title: "todo" }],
  },
  {
    title: "In Qa",
    siblings: [
      { id: 5, title: "todo" },
      { id: 6, title: "done" },
    ],
  },
  {
    title: "done",
    siblings: [{ id: 7, title: "deployed" }],
  },
  {
    title: "deployed",
    siblings: [],
  },
];
