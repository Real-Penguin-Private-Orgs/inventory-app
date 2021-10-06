import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const item = await prisma.item.findUnique({
        where: {
            id: req.query.id
        },
        select: {
            company: true,
            id: true,
            name: true,
            quantity: true,
            itemImage: true,
            description: true
         }
    })
    res.json(item)
}
  