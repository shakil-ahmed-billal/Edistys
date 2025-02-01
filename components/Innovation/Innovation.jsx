import futureData from "@/utils/future"

const Innovation = () => {
    return (
        <div className='mt-64'>
            <div className="flex flex-col items-center max-w-[1200px] mx-auto text-center">
                <p className='text-lightBlue font-bold'>OUR PHILOSOPHY</p>
                <p className='text-6xl font-semibold py-5'>Human-centred innovation</p>
                <img src={"/innovation.avif"} className="w-full mb-10" alt="" />
                <div className="grid grid-cols-3 gap-10">
                    {futureData?.map(data => <div key={data?.id} className="bg-[#f8fcff] rounded-3xl p-10 text-start">
                        <img src={data.icons} alt="" />
                        <p className="my-4 text-2xl font-bold">{data.name}</p>
                        <p>{data.description}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Innovation