import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import * as yup from 'yup'

const schema = yup.object().shape({
    description: yup.string().required().trim(),
    email: yup.string().trim().email().notRequired(),
    name: yup.string().trim().required(),
    url: yup.string().url().trim().notRequired(),
    logo: yup.string().url().trim().required()
})

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    let { name, logo, description, url, email } = req.body;

    if(!name || !logo || !description) {
        return schema.validate({
            name,
            email,
            logo,
            url,
            description
        }).catch((err) => {
            res.json(err)
        })
    }

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
  