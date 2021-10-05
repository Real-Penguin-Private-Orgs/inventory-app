import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
   const items = await prisma.item.findMany()
   res.status(200).json(items)
}