type statProps = {
  number: string;
  stat: string;
  rowStart: number;
  colStart: number;
}

const Stats: React.FC<statProps> = ({number, stat, rowStart, colStart}) => {
  return (
    <div className="h-screen w-screen">
      <div className="p-parent w-screen h-screen grid grid-cols-12 grid-rows-5 ">
        <div 
          style={{
            gridColumnStart: colStart,
            gridRowStart: rowStart,
            gridColumnEnd: `span 3`,
            gridRowEnd: 'span 1',
          }}
          className={`card-design-translucent flex flex-col items-center justify-center p-8 rounded-3xl w-full h-full `}
        >
          <p className="font-header4-bold leading-none">{number}</p>
          <p className="font-header6 leading-none">{stat}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

