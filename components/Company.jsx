/* eslint-disable @next/next/no-img-element */
import style from '../styles/components/Company.module.css'
import Link from 'next/link'
import Router from 'next/router'
import Button from './Button'

export default function Company({ company }) {
  return (
    <div className={style.company_card}> 
        <img 
            src={company.logo_url}  
            alt={`${company.name}-img`}
            className={style.company_card_image}
        />
        <div className={style.company_card_text_content}>
                    <div className={style.company_card_text_title}>{company.name}</div>
                    <p className={style.company_card_text_desc}>
                            {company.description}
                    </p>
        </div>
        <div className={style.company_card_btn_content}>
              <Link href="/company/[id]" as={`/company/${company.id}`}  passHref>
                    <Button onClick={() => Router.push('/p/[id]', `/p/${post.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Visit {company.name}
                      </Button>
              </Link>
        </div>
    </div>
  )
}