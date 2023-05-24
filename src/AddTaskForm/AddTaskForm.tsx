import React from 'react';

interface IAddTaskFormProps extends React.PropsWithChildren {
  value: string;
  onChangeText: React.ChangeEventHandler<HTMLInputElement>;
  onAddTodo: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IAddTaskFormProps> = props => {
  return (
    <div className="container">
       <div className="form-block">
         <div>
           <form>
             <input type="text" className="text-field" onChange={props.onChangeText} value={props.value} placeholder="Add new todo"/>
           </form>
         </div>
         <div>
           <button type="submit" onClick={props.onAddTodo}  className="add-button">Add</button>
         </div>
       </div>
    </div>
  );
};

export default AddTaskForm;