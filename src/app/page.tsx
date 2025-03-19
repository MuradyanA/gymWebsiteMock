
import ArrowToTopRightIcon from "./icons/ArrowToTopRightIcon";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import TrainingInfoEntity from "./TrainingInfoEntity";
import Link from "next/link";
import NavigationButton from "./navigationButton";
import { righteous } from "./fonts";



export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[10%]">
        <div className={`${righteous.className} text-white`}>
          <p className="text-3xl sm:text-8xl text-center tracking-widest">WORK WITH</p>
          <p className="text-3xl sm:text-8xl text-center tracking-widest">PROFESSIONALS</p>
        </div>
        <div className="w-[80%] text-sm sm:w-[25%] sm:text-lg sm:h-auto text-center font-thin opacity-65">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quasi, quaerat eum ipsam molestiae
            earum et
          </p>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={""}
            className={`${righteous.className} bg-[#d9fa58] text-sm tracking-wide rounded-full font-bold px-7 py-2 text-black shadow-[0_0_20px_#d9fa58] cursor-pointer`}
            
          >
            START NOW
          </Link>
          <NavigationButton text="LEARN MORE" />
        </div>
        <div className="flex m-10 gap-3">
          <button className="cursor-pointer border 1px border-white rounded-full p-1 hover:bg-white hover:text-black duration-300">
            <ChevronLeftIcon />
          </button>
          <button className="cursor-pointer border 1px border-white rounded-full p-1 hover:bg-white hover:text-black duration-300">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="mt-10 w-full">
        <div
          className={`h-10 sm:h-full text-center bg-[#d9fa58] overflow-hidden p-1 ${righteous.className} `}
          
        >
          <span className="text-black font-bold text-3xl text-center tracking-wide">
            CONVINIENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING PROGRAM WITH BEST PROFESSIONAL APPROACH
          </span>
        </div>
        <div className="bg-black flex justify-center">
          <div className="flex flex-col items-center w-fit">
            <div className="justify-start items-start w-full">
              <p
                className={`text-start sm:text-6xl text-2xl tracking-widest ${righteous.className} mt-10 sm:ml-13 w-full`}
                
              >
                WHY CHOOSE US
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <div className="hidden sm:flex justify-center items-center">
                <button className="cursor-pointer h-fit border 1px rounded-full p-1 hover:bg-white hover:text-black duration-300">
                  <ChevronLeftIcon />
                </button>
              </div>

              <TrainingInfoEntity
                imgPath="/dumbbell.png"
                header="MUSCLES BUILDING"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <TrainingInfoEntity
                imgPath="/expander.jpg"
                header="MUSCLES BUILDING"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <TrainingInfoEntity
                imgPath="/bottle.png"
                header="MUSCLES BUILDING"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />

              <div className="hidden sm:flex justify-center items-center">
                <button className="cursor-pointer h-fit border 1px rounded-full p-1 hover:bg-white hover:text-black duration-300">
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
            <div className="hidden sm:flex justify-center mt-4 gap-3">
              <div className="bg-white w-1 h-1 rounded-full"></div>
              <div className="bg-gray-500 w-1 h-1 rounded-full"></div>
              <div className="bg-gray-500 w-1 h-1 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-black overflow-hidden">
          <div className="flex flex-col items-center w-full h-auto my-17 sm:ml-3">
            <div className="relative w-[300px] h-[100px] sm:w-[600px] sm:h-[120px] sm:mr-80">
              <p
                className={`${righteous.className} text-lg sm:text-6xl absolute bottom-0 left-0 mb-4 text-left w-full`}
                
              >
                ABOUT OUR GYM
              </p>
            </div>
            <div className="relative bg-[url('/guyWithBarbell.png')] rounded-lg bg-cover bg-center bg- sm:w-[900px] sm:h-[600px] overflow-hidden w-[300px] h-[300px]">
              <button
                className={`${righteous.className} bg-[#d9fa58] absolute bottom-4 left-4 p-2 text-lg tracking-wide rounded-md font-bold px-10 py-2 text-black cursor-pointer`}
                
              >
                10 YEARS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
