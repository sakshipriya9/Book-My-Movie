import HomeCarousel from "../components/HomeCarousel";
import HomeMovieCard from "../components/HomeMovieCard";
import Navbar from "../components/Navbar";
import MoviePoster from "../Assets/m1.jpg"

function Home (){
    return(
        <>
        <Navbar />
        <HomeCarousel />

        <div className="mt-8 flex justify-center items-center gap-10">
            <HomeMovieCard movieImage={MoviePoster} />
            <HomeMovieCard movieImage={MoviePoster} />
            <HomeMovieCard movieImage={MoviePoster} />
            <HomeMovieCard movieImage={MoviePoster} />

        </div>
        Home
        </>
    )

}

export default Home;