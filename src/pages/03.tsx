import type { NextPage } from 'next';
import type { VFC } from 'react';
import { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { getTasks } from '../api/get-tasks';
import type { Task } from '../domain/task';

const TaskItem: VFC<{ task: Task }> = ({ task }) => <li>{task.name}</li>;

const TaskList: VFC = () => {
  const { data: tasks } = useQuery('tasks', getTasks, {
    notifyOnChangeProps: 'tracked',
  });

  return (
    <ul>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

const ReloadButton: VFC = () => {
  const queryClient = useQueryClient();

  const handleClick = useCallback(() => {
    queryClient.invalidateQueries('tasks');
  }, [queryClient]);

  return (
    <button type="button" onClick={handleClick}>
      Reload
    </button>
  );
};

const Page: NextPage = () => (
  <>
    <TaskList />
    <ReloadButton />
  </>
);

export default Page;
