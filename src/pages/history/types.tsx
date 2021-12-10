type TaskProps = {
  data: {
    prev: {
      title: string;
      description: string;
      id: number;
      status: "todo";
    };
    next: {
      title: string;
      description: string;
      id: number;
      status: "todo";
    };
  };
};
export type { TaskProps };
