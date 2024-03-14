type statProps = {
  number: string;
  stat: string;
  rowStart: string;
  colStart: string;
}

const Stats: React.FC<statProps> = ({number, stat, rowStart, colStart}) => {
  return (
    // <div className="h-screen w-screen flex justify-end">

    //   <div className="pr-parent w-[39.5vw] h-screen py-parent grid grid-rows-3 gap-[0.5rem]">
    //     <div className={`row-start-[${parseInt(stack)}] flex flex-col items-center justify-center p-16  rounded-3xl w-full h-full`}>
    //       <p className="font-header3-bold">{number}</p>
    //       <p className="font-header6">{stat}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-screen flex justify-end">

      <div className="p-parent w-screen h-screen grid grid-cols-10 grid-rows-4 ">
        <div className={`row-start-[${parseInt(rowStart)}] col-start-[${parseInt(colStart)}] col-span-2 row-span-1 card-design-translucent flex flex-col items-center justify-center p-8 rounded-3xl w-full h-full `}>
          <p className="font-header4-bold leading-none">{number}</p>
          <p className="font-header6 leading-none">{stat}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
