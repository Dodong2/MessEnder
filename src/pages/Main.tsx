import Navbar from "../components/Navbar"
import { IoIosSend } from "react-icons/io";
const Main: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col h-screen">
      <div className="p-4 mt-20 gap-1 flex-grow">
        {/* Receiver's message */}
        <div className="flex justify-start">
          <div className="bg-gray-800 p-4 rounded-md shadow-md text-amber-200">
            <p className="text-base">
              This is the receiver's message.
            </p>
          </div>
        </div><br/>

        {/* Sender's reply */}
        <div className="flex justify-end">
          <div className="bg-blue-500 p-4 rounded-md shadow-md text-white">
            <p className="text-base">
              This is the sender's reply.
            </p>
          </div>
        </div>
      </div>

      {/* Input and send button */}
      <div className="p-4 bg-gray-700">
        <div className="flex gap-2">
          <textarea
            rows={1}
            placeholder="Enter text"
            className="flex-grow max-w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
