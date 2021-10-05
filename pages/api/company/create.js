import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import * as yup from 'yup'

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    let { name, logo, description, url, email } = req.body;
    const newCompany = await prisma.company.create({
        data: {
            description: description,
            email: email,
            name: name,
            website_url: url,
            logo_url: logo
        }
    })
    res.json(newCompany)
}
  