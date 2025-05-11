import prismadb from "@/lib/prismadb"
import { ProductForm } from "./components/product-form"


const ProductPage = async ({
    params
}: {
    params: { productId: string, storeId: string }
}) => {
  const { productId, storeId } = await params

  let product = await prismadb.product.findUnique({
    where: {
      id: productId
    },
    include: {
      images: true
    }
  })

  let productUpdated: any
  if (product) {
    productUpdated = {...product, price: product?.price.toNumber()}
  } else {
    productUpdated = null
  }
  

  const categories = await prismadb.category.findMany({
    where: {
      storeId
    }
  })
  
  const sizes = await prismadb.size.findMany({
    where: {
      storeId
    }
  })

  const colors = await prismadb.color.findMany({
    where: {
      storeId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={productUpdated} 
        />
      </div>
    </div>
  )
}

export default ProductPage