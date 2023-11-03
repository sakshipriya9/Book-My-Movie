import IccBannerImage from '../Assets/p1.jpeg'
import HomeCarousel from "../components/HomeCarousel";
import HomeMovieCard from "../components/HomeMovieCard";
import Navbar from "../components/Navbar";
import MoviePoster from "../Assets/m1.jpg"
import HomeBanner from "../components/HomeBanner";
import HomeFooter from '../components/HomeFooter';

function Home() {
    return (
        <>
            <Navbar />
            <HomeCarousel />
            <div className="min-h-[96rem] w-[80vw] mx-auto flex flex-col">
            <HomeBanner image={IccBannerImage} />
            <div className='text-2xl font-semibold text-black mt-4'>
                Recommended Movies
            </div>
                <div className="mt-8 flex justify-center items-center gap-10">
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />

                </div>
                <HomeBanner image={IccBannerImage} />
                <HomeFooter />
            </div>
        </>
    )

}

export default Home;