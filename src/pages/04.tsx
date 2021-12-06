import type { NextPage } from 'next';
import type { VFC } from 'react';
import { useCallback, useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { getLabels } from '../api/get-labels';
import { getTasks } from '../api/get-tasks';
import type { Task } from '../domain/task';

const TaskItem: VFC<{ task: Task }> = ({ task }) => {
  const { data } = useQuery('labels', getLabels, {
    notifyOnChangeProps: 'tracked',
  });

  const labels = useMemo(
    () => data?.filter(({ id }) => task.labelIds.includes(id)),
    [data, task.labelIds],
  );

  return (
    <li>
      {task.name}
      {labels?.map((label) => (
        <small key={label.id}>{label.name}</small>
      ))}
    </li>
  );
};

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
    queryClient.invalidateQueries('labels');
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
