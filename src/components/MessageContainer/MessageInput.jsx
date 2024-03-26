import {BsSend} from 'react-icons/bs'
const MessageInput = () => {
  return (
    <form className='px-4 my-3 flex gap-2 justify-between items-center'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray text-gray-800 focus:outline-gray-500' placeholder='Type a message' />
        <button type="submit" className='flex items-center h-full'>
            <BsSend className='h-5 w-5'/>
        </button>
    </form>
  )
}

export default MessageInput