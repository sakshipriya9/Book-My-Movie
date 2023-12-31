import {AiFillStar} from "react-icons/ai";


type HomeMovieCardProps ={
    movieImage:string
}

function HomeMovieCard({movieImage} : HomeMovieCardProps) {
    return(
        <div className="flex flex-col items-center justify-center h-[450px] w-[265px] lg:h-[416px] w-[222px]">
            <img 
                src={movieImage}
                className="h-{95%}  w-full rounded-tl-lg rounded-tr-lg"
            />

            <div className="bg-black w-full text-white text-left rounded-bl-lg rounded-br-lg py-1">
                <AiFillStar className="inline text-2xl text-red-500 mx-2"  />
                <span>9/10</span> {" "}
                <span>20.2K Votes</span>   
            </div>
        </div>
    )
}

export default HomeMovieCard; 