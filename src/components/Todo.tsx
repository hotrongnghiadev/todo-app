import clsx from 'clsx'
import * as Models from '../models'
import { Draggable } from 'react-beautiful-dnd'
import Icons from './Icons'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import EditForm from './EditForm'

interface props {
  todo: Models.Todo
  index: number
  setTodos: Dispatch<SetStateAction<Array<Models.Todo>>>
  setCompletedTodos: Dispatch<SetStateAction<Array<Models.Todo>>>
}

const Todo: React.FC<props> = (props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editContent, setEditContent] = useState<string>(props.todo.content)
  // function start
  const handleEdit = (e: FormEvent) => {
    e.preventDefault()
    props.setTodos((prev) =>
      prev.map((el) => (el.id === props.todo.id ? { ...el, content: editContent } : el))
    )
    setEdit(!edit)
  }

  const handleDelete = () => {
    props.setTodos((prev) => {
      return prev.filter((el) => el.id !== props.todo.id)
    })
  }

  const handleDone = () => {
    if (!props.todo.isDone) {
      props.setTodos((prev) => prev.filter((el) => el.id !== props.todo.id))
      props.setCompletedTodos((prev) => [...prev, { ...props.todo, isDone: !props.todo.isDone }])
    } else {
      props.setCompletedTodos((prev) => prev.filter((el) => el.id !== props.todo.id))
      props.setTodos((prev) => [...prev, { ...props.todo, isDone: !props.todo.isDone }])
    }
  }
  // function end

  return (
    <>
      <Draggable
        draggableId={props.todo.id.toString()}
        index={props.index}
      >
        {(provided, snapshot) => (
          <>
            <div
              className={clsx(
                'p-4 rounded-sm shadow-lg',
                'bg-todo',
                'hover:-translate-y-1',
                'transition-transform'
              )}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              {edit ? (
                <EditForm
                  content={editContent}
                  setContent={setEditContent}
                  handleEdit={handleEdit}
                />
              ) : (
                <p className={clsx({ 'line-through': props.todo.isDone })}>{props.todo.content}</p>
              )}

              <div className={clsx('flex gap-4 justify-end', { invisible: edit })}>
                <button
                  className={clsx({ hidden: props.todo.isDone })}
                  onClick={() => setEdit(!edit)}
                >
                  <Icons.IconEdit className={clsx('text-xl', 'hover:text-white')} />
                </button>
                <button
                  className={clsx({ hidden: props.todo.isDone })}
                  onClick={() => handleDelete()}
                >
                  <Icons.IconDelete className={clsx('text-xl', 'hover:text-white')} />
                </button>
                <button onClick={() => handleDone()}>
                  {props.todo.isDone ? (
                    <Icons.IconCancel className={clsx('text-xl', 'hover:text-white')} />
                  ) : (
                    <Icons.IconTick className={clsx('text-xl', 'hover:text-white')} />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </Draggable>
    </>
  )
}

export default Todo
