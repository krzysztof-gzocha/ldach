import {SERVICE_TEXT} from "@/texts/service.text";

const Service = () => {
    return  <div className="pt-12 bg-[#F5F5F5] px-4 xl:px-96 lg:px-16 pb-9" id={"nasze-uslugi"}>
        <div className="font-bold text-3xl pt-12 pb-9" >{SERVICE_TEXT.title}</div>
            <div className=" pt-3 bg-[#031533] h-[600px] md:h-[500px] lg:h-[500px] text-white rounded-[70px] flex flex-col lg:flex-row md:flex-row gap-6 px-9">
            <div className="flex w-full flex-col lg:flex-col md:flex-col justify-center gap-3">
                <div className="text-2xl font-bold">Konserwacja</div>
                <div> Czy to drobna naprawa czy kompleksowa konserwacja, jesteśmy gotowi podjąć się każdego zadania, aby Twój dach był w idealnym stanie</div>
            </div>
                <div className="flex w-full flex-col justify-center gap-3">
                    <div className="text-2xl font-bold">Montaż i Remonty</div>
                    <div>Potrzebujesz nowego dachu lub remontu istniejącego? Nie ma problemu! Nasz zespół zajmie się wszystkim, abyś mógł cieszyć się spokojem i bezpieczeństwem</div>
                </div>
                <div className="flex w-full flex-col justify-center gap-3">
                    <div className="text-2xl font-bold">Inspekcje i Doradztwo</div>
                    <div>Nie jesteś pewien stanu swojego dachu? Skontaktuj się z nami, a nasi eksperci przeprowadzą kompleksową inspekcję i udzielą fachowej porady</div>
                </div>
            </div>
    </div>
}

export default Service
