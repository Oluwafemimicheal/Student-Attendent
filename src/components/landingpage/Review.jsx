
const Review = () => {
  return (
    <div className="py-20">
      <div className="w-230 mx-auto space-y-10">
        <div className="text-center">
          <small className="text-blue-800 text-lg">Better team and time management start with</small>
          <h2 className="text-4xl font-semibold text-white">Tangible time tracking data for <br /> more profitable decisions</h2>
        </div>

        <div className="flex justify-between items-start gap-5">
          <div className="w-140 h-100 bg-white rounded-2xl">

          </div>


          <div className="bg-gray-200 rounded-2xl w-full p-5 h-100">
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Master time management</h3>
              <p className="text-md text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi animi magni doloremque velit a repellat delectus, laboriosam molestiae vero esse,</p>

              <button className="mt-6 bg-blue-800 text-white p-2 px-5 font-semibold rounded-full cursor-pointer hover:opacity-90">Get Started</button>
            </div>

            <ul className="mt-5">
              <li>
                {/* <div><FaTime /></div> */}
                <div>
                  <h3>Real-time productive</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, doloremque</p>
                </div>
              </li>
              <li></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
