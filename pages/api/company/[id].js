import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
   switch(req.method) {
       case 'GET':
                getOne(req.query.id, res)
            break
        case 'DELETE':
                deleteOne(req.query.id, res)
            break
   }
}


async function getOne(companyID, res, products) {
    const company = await prisma.company.findUnique({
        where: {
            id: companyID
        },
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
    res.json(company)
}

async function deleteOne(companyID, res) {
    const company = await prisma.company.delete({
        where: {
            id: companyID
        }
    })
    res.json(company)
}