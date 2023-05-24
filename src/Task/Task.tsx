import React from 'react';

interface ITaskProps extends React.PropsWithChildren {
text: string;
id? : string;
onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<ITaskProps> = props => {
  return (
    <div className="container">
      <div className="to-do-lists-block">
        <div className="to-do-list">{props.text}{props.id}</div>
        <div>
          <button type="button" onClick={props.onDeleteTask} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;