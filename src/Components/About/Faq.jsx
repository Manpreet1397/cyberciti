import FaqDropdown from "./FaqDropdown";

export default function Faq() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col lg:flex-row justify-center gap-10 py-40 px-12 md:px-32 text-center md:text-left border-y-2 border-neutral-900">

            <div className=" w-full lg:w-1/2 flex flex-col gap-6">
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div>
    <h1 className="text-5xl font-bold ">
    FREQUENTLY ASKED QUESTION
    </h1>
</div>
                    <div>
                        <p>You have Questions. I have answers.</p>
                        <p>WEprovide variety of services to our customers. For any query do conatact us we are happily reaady to help you</p>
                    </div>
                </div>

            </div>

            <div className=" w-full lg:w-1/2">
                <FaqDropdown />
            </div>
        </div>
    )
}