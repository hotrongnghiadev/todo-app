import clsx from 'clsx'
import * as Models from '../models'
import Todo from './Todo'
import { Droppable } from 'react-beautiful-dnd'
import { Dispatch, SetStateAction } from 'react'

interface props {
  todos: Array<Models.Todo>
  setTodos: Dispatch<SetStateAction<Array<Models.Todo>>>
  completedTodos: Array<Models.Todo>
  setCompletedTodos: Dispatch<SetStateAction<Array<Models.Todo>>>
}

const Todos: React.FC<props> = (props) => {
  return (
    <>
      <div className={clsx('container', 'flex gap-4', 'mt-4')}>
        <Droppable droppableId='Incompleted'>
          {(provided, snapshot) => {
            return (
              <div
                className={clsx(
                  'incompleted-todos',
                  'flex flex-col gap-4 self-start',
                  'w-1/2 p-4 rounded-md',
                  'bg-[rgb(50,195,205)]'
                )}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3 className={clsx('text-center text-xl text-white')}>Incompleted</h3>
                {props.todos.map((todo, index) => (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    index={index}
                    setTodos={props.setTodos}
                    setCompletedTodos={props.setCompletedTodos}
                  />
                ))}
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
        <Droppable droppableId='Completed'>
          {(provided, snapshot) => (
            <div
              className={clsx(
                'completed-todos',
                'flex flex-col gap-4 self-start',
                'w-1/2 p-4 rounded-md',
                'bg-[rgb(235,103,80)]'
              )}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className={clsx('text-center text-xl text-white')}>Completed</h3>
              {props.completedTodos.map((todo, index) => (
                <Todo
                  todo={todo}
                  key={todo.id}
                  index={index}
                  setTodos={props.setTodos}
                  setCompletedTodos={props.setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  )
}

export default Todos
