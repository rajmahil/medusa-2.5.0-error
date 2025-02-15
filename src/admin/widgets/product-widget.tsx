import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Button, Container } from "@medusajs/ui"
import { useMutation } from "@tanstack/react-query"

import { DetailWidgetProps, HttpTypes } from "@medusajs/framework/types"
import { sdk } from "../lib/config"

const ProductWidget = ({ 
  data: productData,
}: DetailWidgetProps<HttpTypes.AdminProduct>) => {
  const { mutateAsync } = useMutation({
    mutationFn: (payload: HttpTypes.AdminUpdateProduct) => 
      sdk.admin.product.update(productData.id, payload),
    onSuccess: () => alert("updated product"),
  })

  const handleUpdate = () => {
    mutateAsync({
      title: "New Product Title",
    })
  }
  
  return (
    <Container className="divide-y p-0">
      <Button onClick={handleUpdate}>Update Title</Button>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.before",
})

export default ProductWidget