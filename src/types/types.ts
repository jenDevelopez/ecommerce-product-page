export interface StoreProps {
  open:boolean
  product: Product
  currentImageIndex:number
  cart: ProductCart[]
  cartArray: ProductCart[]
  seeCart:boolean
  quantity: number
  totalPrice:number
  buttonsImage:buttonImage[]
  seeBig:boolean


  setSeeBig:(value:boolean) => void
  setOpen: (value:boolean) => void
  setSeeCart: (value:boolean) => void


  goToPreviousImage: () => void
  goToNextImage: () => void

  addQuantity: () => void 
  subQuantity: () => void 



  addToCart:() => void
  calculateTotal: () => void
  deleteItem:(name:string) => void
  changeCurrentImageIndex: (position:number) => void
}


export interface Product {
  name:string
  description:string
  price: number
  offer:number
  images: string[]
}

export interface ProductCart {
  name:string
  price:number
  quantity:number
  image:string
}


export interface buttonImage {
  id:number,
  image:string
}
