import {PrismaClient} from '@prisma/client'
import * as yup from 'yup'
const prisma = new PrismaClient()

const schema = yup.object().shape({
    name: yup.string().required().trim(),
    description: yup.string().required().trim(),
    image: yup.string().url().trim().required(),
    company: yup.string().required().trim(),
    quantity: yup.number()
})

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const { name, description, image, quantity, company } = req.body;
    if(!name || !description || !image) {
        return schema.validate({
            name,
            description,
            image,
            company,
            quantity
        }).catch((err) => {
            res.status(204).json(err)
        })
    }

    const newItem = await prisma.item.create({
        data: {
            name: name,
            itemImage: image,
            description: description,
            quantity: quantity,
            company: {
                connect: {
                    id: company
                }
            }
        }
    })
    
    res.json(newItem)
}
  