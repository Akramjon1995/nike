import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="star" />
            <p className='leading-normal font-montserrat text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='text-2xl font-semibold font-palanquin leading-normal mt-2'>{name}</h3>
        <p className='mt-2 text-2xl font-montserrat font-semibold leading-normal text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductCard