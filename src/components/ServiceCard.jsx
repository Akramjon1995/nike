

const ServiceCard = ({subtext, imgURL, label}) => {
  return (
    <div className="flex-1 px-10 py-16 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl">
        <div className="flex justify-center items-center h-11 w-11 bg-coral-red rounded-full">
            <img src={imgURL} alt={label} />
        </div>
        <h3 className="mt-5 font-palanquin font-bold leading-normal text-3xl">{label}</h3>
        <p className="mt-3 break-words leading-normal text-lg font-montserrat text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard