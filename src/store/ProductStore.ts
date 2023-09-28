import { create } from 'zustand'
import { StoreProps } from '../types/types';

export const ProductStore = create<StoreProps>((set, get) => ({
  open: false,
  product: {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125.00,
    offer: 50,
    images: [
      '../images/image-product-1.jpg',
      '../images/image-product-2.jpg',
      '../images/image-product-3.jpg',
      '../images/image-product-4.jpg',
    ]
  },
  currentImageIndex: 0,
  quantity: 0,
  cart: [],
  cartArray: [],
  seeCart: false,
  totalPrice: 0,

  buttonsImage: [
    {
      id: 1,
      image: '../images/image-product-1.jpg'
    },
    {
      id: 2,
      image: '../images/image-product-2.jpg'
    },
    {
      id: 3,
      image: '../images/image-product-3.jpg'
    }, {
      id: 4,
      image: '../images/image-product-4.jpg'
    }

  ],
  seeBig: false,


  setSeeBig: (value) => set({ seeBig: value }),
  setOpen: (value: boolean) => set({ open: value }),
  setSeeCart: (value) => set({ seeCart: value }),


  goToPreviousImage: () => {
    const product = get().product
    const currentImage = get().currentImageIndex
    if (currentImage === 0) {
      set({ currentImageIndex: product.images.length - 1 });
    } else {
      set({ currentImageIndex: currentImage - 1 })
    }
  },

  goToNextImage: () => {
    const currentImage = get().currentImageIndex
    const product = get().product
    if (currentImage >= product.images.length - 1) {
      set({ currentImageIndex: 0 });
    } else {
      set({ currentImageIndex: currentImage + 1 })
    }
  },

  subQuantity: () => {
    const quantity = get().quantity
    if (quantity === 0) {
      set({ quantity: 0 })
    } else {
      set({ quantity: quantity - 1 })
    }
  },

  addQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),

  addToCart: (id) => {
    const product = get().product
    const units = get().quantity
    const array = get().cartArray
    
    const existingProduct = array.findIndex((item) => item.id === id)
    
      if (existingProduct !== -1) {
        array[existingProduct].quantity = units
      }
      else {
        const productToCart = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: units,
          image: product.images[0]
        }
        if(productToCart.quantity > 0){
          array.push(productToCart)
        }
       
      }
    

    
    set({ cart: array })

  },

  calculateTotal: () => {
    const cart = get().cart
    const total = cart.map((item) => {
      return item.price * item.quantity
    }).reduce((a, b) => a + b)
    set({ totalPrice: total })
  },

  deleteItem: (id) => {
    const cart = get().cart
    const item = cart.findIndex((item) => item.id === id)
    const newCart = cart.splice(1, item)
    set({ cart: newCart })
    set({ quantity: 0 })

  },

  changeCurrentImageIndex: (position) => {
    set({ currentImageIndex: position })
  }



}))

