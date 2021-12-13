import { motion } from 'framer-motion'

const Sorting = ({ sortBy, toggleSortBy }) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 25,
  }

  return (
    <div className='mx-auto w-max'>
      <div className='flex items-center text-sm'>
        <span className='mr-3'>Oldest first</span>
        <div className={`${sortBy ? 'bg-gray-400' : 'bg-brand justify-end'} 
            flex justify-start cursor-pointer w-11 h-6 rounded-sm relative items-center px-1
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark`}
          data-ison={sortBy}
          onClick={toggleSortBy}>
          <motion.div className='w-4 h-4 bg-white rounded-sm' layout transition={spring} />
        </div>
        <span className='ml-3'>Newest first</span>
      </div>
    </div>
  )
}

export default Sorting
