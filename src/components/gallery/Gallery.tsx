import Carousel from "@/components/carousel";
import CarouselComponent from "@/components/carousel";

const DATA = [{ image: "https://picsum.photos/seed/random101/500/500" },
    { image: "https://picsum.photos/seed/random102/1200/500" },
    { image: "https://picsum.photos/seed/random103/500/500" }]

const Gallery = () => {
    return (
        <div className="font-bold text-3xl pt-12 py-9 w-screen  bg-[#cccccc] px-4 xl:px-96 lg:px-16 pb-9">
        <div>Nasze dokonania</div>
        <div className=" py-9  flex flex-col text-center justify-center items-center" id="galeria">
           <CarouselComponent/>
        </div>
        </div>
    );
}

export default Gallery
