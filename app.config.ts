export default defineAppConfig({
  ui: {
    primary: 'merah',
    gray: 'slate',
    container: {
      base: 'mx-auto',
      padding: 'px-4 sm:px-16 lg:px-16',
      constrained: 'max-w-7xl',
    },
    card: {
      base: 'overflow-hidden',
      background: 'bg-white dark:bg-gray-900',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-lg',
      shadow: 'shadow',
      body: {
        base: '',
        background: '',
        padding: 'p-3  sm:p-4',
      },
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-5 sm:px-6',
      },
      footer: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:px-6',
      },
    },

    tabs: {
      wrapper: 'relative space-y-2',
      container: 'relative w-full',
      base: 'focus:outline-none',
      list: {
        base: 'relative ',
        background: 'bg-gray-100 dark:bg-gray-900',
        rounded: 'rounded-md',
        shadow: 'md',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-merah dark:bg-merah',
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-500 dark:text-gray-400',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
        },
      },
    },

  },
})
