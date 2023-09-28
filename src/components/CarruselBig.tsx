import { ProductStore } from "../assets/store/ProductStore"

function CarruselBig() {
  const { product, goToNextImage, goToPreviousImage, currentImageIndex, buttonsImage, changeCurrentImageIndex } = ProductStore()
  return (

    <div className="h-screen flex justify-center items-center fixed top-0 left-36">
      <div className="relative w-2/4 h-">
        <div className="overflow-hidden w-full h-auto">
          <img
            src={product.images[currentImageIndex]} alt="product image"
            className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110 lg:rounded-xl"
          />

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
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={goToPreviousImage}
          className="px-2 py-1 text-black bg-white rounded-full rounded-l-md lg:hidden"
        >
          <img src="/public/images/icon-previous.svg" alt="" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={goToNextImage}
          className="px-2 py-1 text-black rounded-full bg-white lg:hidden"
        >
          <img src="/public/images/icon-next.svg" alt="" />
        </button>
      </div>


    </div>

  )
}

export default CarruselBig