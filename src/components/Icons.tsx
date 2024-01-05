interface props {
  className?: string
}

const Icons = {
  IconCancel(props: props) {
    return (
      <svg
        viewBox='0 0 470 1000'
        fill='currentColor'
        height='1em'
        width='1em'
        {...props}
      >
        <path d='M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156' />
      </svg>
    )
  },
  IconTick(props: props) {
    return (
      <svg
        fill='none'
        viewBox='0 0 15 15'
        height='1em'
        width='1em'
        {...props}
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M14.707 3L5.5 12.207.293 7 1 6.293l4.5 4.5 8.5-8.5.707.707z'
          clipRule='evenodd'
        />
      </svg>
    )
  },

  IconDelete(props: props) {
    return (
      <svg
        viewBox='0 0 1024 1024'
        fill='currentColor'
        height='1em'
        width='1em'
        {...props}
      >
        <path d='M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z' />
      </svg>
    )
  },

  IconEdit(props: props) {
    return (
      <svg
        viewBox='0 0 1024 1024'
        fill='currentColor'
        height='1em'
        width='1em'
        {...props}
      >
        <path d='M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z' />
      </svg>
    )
  },
  IconPlus(props: props) {
    return (
      <svg
        viewBox='0 0 1024 1024'
        fill='currentColor'
        height='1em'
        width='1em'
        {...props}
      >
        <defs>
          <style />
        </defs>
        <path d='M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' />
        <path d='M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' />
      </svg>
    )
  },
}

export default Icons
