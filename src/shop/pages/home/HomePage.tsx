import CustomPagination from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
    <CustomJumbotron title="Todos los productos" subTitle="" />

    <ProductsGrid products={[]} />

    <CustomPagination totalPages={10} />
    </>
  )
}
