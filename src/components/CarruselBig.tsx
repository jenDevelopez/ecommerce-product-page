import { ProductStore } from "../store/ProductStore"
function CarruselBig() {
  const { product, goToNextImage, goToPreviousImage, currentImageIndex,setSeeBig } = ProductStore()
  return (

    <div className="hidden lg:h-screen lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-[17%]">
      <div className="relative w-[60%] h-">
        <div className="overflow-hidden w-full h-auto">
          <img 
            src={product.images[currentImageIndex]} alt="product image"
            className="w-full lg:rounded-xl"
          />

        </div>
        <div className="absolute top-1/2 left-[-4%] transform -translate-y-1/2">
          <button
            onClick={goToPreviousImage}
            className=" w-10 h-10 text-black bg-white rounded-full grid place-items-center "
          >
            <img className="mr-1 hover:text-[#FF7D1B]" src="/public/images/icon-previous.svg" alt="" />
          </button>
        </div>
        <div className="absolute top-1/2 right-[-4%] transform -translate-y-1/2">
          <button
            onClick={goToNextImage}
            className="hidden lg:w-10 lg:h-10 lg:rounded-full lg:bg-white lg:grid lg:place-items-center lg:cursor-pointer"
          >
            <img className="lg:ml-1 hover:bg-[hover:text-[#FF7D1B]" src="/public/images/icon-next.svg" alt="" />
          </button>
        </div>
        <div className="absolute top-[-5%] right-[-1%] transform -translate-y-1/2">
          <button
            onClick={() => setSeeBig(false)}
            className="lg:w-10 lg:h-10 lg:rounded-full text-[#FF7D1B] lg:grid lg:place-items-center lg:cursor-pointer "
          >
            <img  src="/public/images/icon-close.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarruselBig