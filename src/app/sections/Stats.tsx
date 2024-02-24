
const Stats = () => {
  return (
    <div className="flex gap-12 w-full flex-row justify-around px-parent">
      <div className="flex flex-col items-center justify-center p-16 border-1 border-white bg-white bg-opacity-20 shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl border border-white border-opacity-20 w-[30%]">
        <p className="font-header3-bold">15</p>
        <p className="font-header6">hackathons</p>
      </div>
      <div className="flex flex-col items-center justify-center p-16 border-1 border-white bg-white bg-opacity-20 shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl border border-white border-opacity-20 w-[30%]">
        <p className="font-header3-bold">15</p>
        <p className="font-header6">skills</p>
      </div>
      <div className="flex flex-col items-center justify-center p-16 border-1 border-white bg-white bg-opacity-20 shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl border border-white border-opacity-20 w-[30%]">
        <p className="font-header3-bold">18</p>
        <p className="font-header6">projects</p>
      </div>
    </div>
  )
}

export default Stats