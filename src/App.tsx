import clsx from 'clsx'
import { FormEvent, useEffect, useState } from 'react'

import InputField from './components/CreationForm'
import Todos from './components/Todos'
import * as Models from './models'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

interface props {}

const App: React.FC<props> = () => {
  const [content, setContent] = useState<string>('')
  const [todos, setTodos] = useState<Array<Models.Todo>>([])
  const [completedTodos, setCompletedTodos] = useState<Array<Models.Todo>>([])

  // function start
  const handleAdd = (e: FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), content, isDone: false }])
    setContent('')
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    let draggedTodo
    const cloneTodos = [...todos]
    const cloneCompletedTodos = [...completedTodos]
    if (source.droppableId === 'Incompleted') {
      draggedTodo = todos[source.index]
      cloneTodos.splice(source.index, 1)
    } else {
      draggedTodo = completedTodos[source.index]
      cloneCompletedTodos.splice(source.index, 1)
    }

    if (destination.droppableId === 'Incompleted') {
      cloneTodos.splice(destination.index, 0, { ...draggedTodo, isDone: false })
    } else {
      cloneCompletedTodos.splice(destination.index, 0, { ...draggedTodo, isDone: true })
    }

    setTodos(cloneTodos)
    setCompletedTodos(cloneCompletedTodos)
  }
  // function end

  // useEffect start
  // useEffect end
  return (
    <>
      <div
        className={clsx(
          'w-screen min-h-screen',
          'py-4 px-16',
          'flex flex-col items-center',
          'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        )}
      >
        <div className={clsx('max-w-screen-md w-full')}>
          <h1 className={clsx('text-2xl text-center')}>Taskify</h1>
          <InputField
            content={content}
            setContent={setContent}
            handleAdd={handleAdd}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <Todos
              todos={todos}
              setTodos={setTodos}
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          </DragDropContext>
        </div>
      </div>
    </>
  )
}

export default App
