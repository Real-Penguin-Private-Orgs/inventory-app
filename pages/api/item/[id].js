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
        }
    })
    res.json(item)
}
  