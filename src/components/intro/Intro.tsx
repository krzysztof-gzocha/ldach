import Card from "@/components/card";
import {INTRO_TEXT} from "@/texts/intro.text";

const Intro = () => {
    return (
            <div className="h-full pt-12 bg-[#E6E6E6] px-4 xl:px-96 lg:px-16" id="o-nas">
                <div className="font-bold text-3xl lg:text-3xl sm:text-xl py-3">{INTRO_TEXT.title}</div>
                <div className="text-xl  rounded-[70px] pt-6 ">
                    {INTRO_TEXT.text}
                </div>
                <div className="font-bold text-3xl pt-4 pb-9" >Dlaczego warto nam zaufać?</div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-2  mb-9">
                    <Card title="Doświadczenie i Profesjonalizm" description="Nasza firma dekarska może pochwalić się lata doświadczenia oraz zespolem wykwalifikowanych specjalistów, którzy są gotowi sprostać nawet najbardziej wymagającym wyzwaniom"/>
                    <Card title="Jakość Usług" description="Stawiamy na najwyższą jakość wykonania prac dekarskich. Korzystamy z materiałów renomowanych producentów, aby zapewnić długotrwałą ochronę Twojego dachu"/>
                    <Card title="Indywidualne podejście" description="Rozumiemy, że każdy dach jest inny i wymaga indywidualnego podejścia. Nasze usługi są dopasowane do Twoich potrzeb, zapewniając kompleksową opiekę nad Twoim dachem"/>
                </div>
            </div>
    )
}

export default Intro
