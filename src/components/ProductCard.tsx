import { ProductStore } from "../store/ProductStore"
import { buttonImage } from "../types/types"
import CartAddButton from "./Buttons/CartAddButton"
import CarruselBig from "./CarruselBig"
import Counter from "./Counter"


export default function ProductCard() {
  const { product, goToNextImage, goToPreviousImage, currentImageIndex, buttonsImage, changeCurrentImageIndex, seeBig,setSeeBig  } = ProductStore()

  return (
    <>
      <div className={`lg:flex lg:justify-center lg:items-center h-[91.9%] ${seeBig && ' lg:bg-black lg:opacity-25'}`}>
        <div className="relative lg:static md:w-1/2">
          <div className="overflow-hidden w-full h-64 lg:h-auto lg:w-[60%] lg:mx-auto lg:rounded-xl">
            <img
              onClick={() => setSeeBig(true)}
              src={product.images[currentImageIndex]} alt="product image"
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110 lg:rounded-xl"
            />

          </div>
          <div className="hidden lg:block w-full lg:h-1/2 pt-6">
            <div className="w-[60%] mx-auto flex justify-between">
              {buttonsImage.map((button:buttonImage, index:number) => (
                <button onClick={() => changeCurrentImageIndex(index)} className={`w-16  ${currentImageIndex === index ? 'opacity-50 border-2 rounded-lg border-[#FF7D1B]' : ''}`} key={button.id}>
                  <img className="rounded-lg" src={button.image} alt="image product" />
                </button>
              ))}
            </div>

          </div>
          {/* botones de flechas */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={goToPreviousImage}
              className="px-2 py-1 text-white rounded-l-md lg:hidden"
            >
              <img src="/public/images/icon-previous.svg" alt="" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={goToNextImage}
              className="px-2 py-1text-white rounded-r-md lg:hidden"
            >
              <img src="/public/images/icon-next.svg" alt="" />
            </button>
          </div>
          {/* botones de flechas */}
        </div>
        <div className=" p-4 lg:w-1/2 lg:self-start lg:mt-20">
          <div className="p-5 flex flex-col justify-between">
            <h2 className="text-[#FF7D1B] font-bold">SNEAKER COMPANY</h2>
            <h3 className="text-3xl font-bold my-2">{product.name}</h3>
            <p>{product.description}</p>
            <div className="flex flex-row justify-between items-end mt-2 lg:w-1/2 lg:flex-col lg:items-start">
              <div className="flex items-end gap-2 ">
                <p className="text-3xl font-bold">${product.price}</p>
                <p className="text-[#FF7D1B] font-bold">{product.offer}%</p>
              </div>
              <p className="text-gray-300 line-through">$250.00</p>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:gap-4 lg:w-3/4 lg:justify-start">
            <Counter />
            <CartAddButton />
          </div>

        </div>
       
      </div>
       {seeBig && (
        <CarruselBig />
      )}
      </>
  

  )
}
