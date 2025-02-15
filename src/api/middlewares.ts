import { defineMiddlewares, MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework";

  
  export default defineMiddlewares({
    routes: [
   
      {
        matcher: "/admin/order-edits/:id",
        method: "DELETE",
        middlewares: [
          (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
            console.log("DELETE Received a request! ");
  
            // next();
            // res.redirect(
            //   307,
            //   `/admin/order-edits/delete/order_01JKY6K1D1TKGQAVPR09Y5Q7S5`,
            // );
          },
        ],
      },

    ],
  });
  