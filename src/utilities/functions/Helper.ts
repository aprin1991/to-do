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
      { id: 1, title: "blocked" },
      { id: 1, title: "inQa" },
    ],
  },
  {
    title: "blocked",
    siblings: [{ id: 1, title: "todo" }],
  },
  {
    title: "inQa",
    siblings: [
      { id: 1, title: "todo" },
      { id: 1, title: "done" },
    ],
  },
  {
    title: "done",
    siblings: [{ id: 1, title: "deployed" }],
  },
  {
    title: "deployed",
    siblings: [{ id: 1, title: "finished" }],
  },
];
