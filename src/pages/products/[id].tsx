import { useRouter } from "next/router";

const ProductShowPage = () => {
  const router = useRouter()

  return (
    <div>Product page {router.query.id} </div>
  )
}

export default ProductShowPage;
