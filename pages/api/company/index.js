import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
            logo_url: true,
            website_url: true,
            email: true,
            description: true,
            products: {
                 select: {
                     id: true,
                     name: true,
                     description: true,
                     itemImage:  true
                 }
            }
        }
    })
    res.status(200).json(companies)
}
  