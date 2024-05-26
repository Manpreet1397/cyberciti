
export default function DisplayCard(props) {
    return (
        <div className="bg-bg-[#05080c] hover:bg-neutral-700 bg-opacity-75 backdrop-filter backdrop-blur-md text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-4 ">
            <div className="h-full w-full object-cover">
                <img src={props.image} alt="image" className="w-full rounded-xl" />
            </div>
            <div className="flex flex-col justify-center gap-4 ">
                <p className="text-lg font-bold text-center text-[#7defe0]">{props.title}</p>
                <p className="text-base font-light text-white text-center">{props.details}</p>
            </div>
        </div>
    )
}