// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    req.query?.id
      ? res.json(await Product.findOne({ _id: req.query.id }))
      : res.status(200).json(await Product.find());
  }

  if (method === "POST") {
    const { title, description, price, images } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
      images,
    });
    res.status(201).json(productDoc);
  }
  if (method === "PUT") {
    const { title, description, price, images, _id } = req.body;
    await Product.updateOne({ _id }, { title, description, price, images });
    res.json(true);
  }
  if (method === "DELETE") {
    req.query?.id
      ? res.json(await Product.deleteOne({ _id: req.query.id }))
      : res.json(true);
  }
}
