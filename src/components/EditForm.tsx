import clsx from 'clsx'
import Icons from './Icons'
import { Dispatch, FormEvent, SetStateAction, useRef } from 'react'

interface props {
  content: string
  setContent: Dispatch<SetStateAction<string>>
  handleEdit: (e: FormEvent) => void
}

const EditForm: React.FC<props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <form
        className={clsx('relative', 'w-full')}
        onSubmit={(e) => {
          props.handleEdit(e)
          inputRef.current?.blur()
        }}
      >
        <input
          className={clsx('w-full p-1 rounded-sm', 'focus:outline-none')}
          placeholder='Click to type new task...'
          onChange={(e) => props.setContent(e.target.value)}
          value={props.content}
          ref={inputRef}
        />
        <button
          className={clsx(
            'absolute right-0',
            'h-full px-2 rounded-sm',
            'bg-blue-500 hover:text-white'
          )}
          type='submit'
        >
          <Icons.IconEdit className={clsx('text-2xl')} />
        </button>
      </form>
    </>
  )
}

export default EditForm
