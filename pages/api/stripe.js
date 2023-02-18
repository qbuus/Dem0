import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["PL"],
        },
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1MM8tIIbdqqlvfJjBjtBpOX9" }],
        shipping_options: [{ shipping_rate: "shr_1MM8tXIbdqqlvfJjXqIBaLN3" }],
        line_items: req.body.map((item) => {
          const img = item.images[0].asset._ref;
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [img],
              },
              unit_amount: (item.price * 100).toFixed(0),
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

// const img = item.images[0];
// // const img = item.images[0].asset._ref;
// // const newImage = img
// //   .replace(
// //     "image-",
// //     "https://cdn.sanity.io/images/vfxfwnaw/production/"
// //   )
// //   .replace("-webp", ".webp");
