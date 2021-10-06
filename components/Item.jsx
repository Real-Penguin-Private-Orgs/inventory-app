/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Item({ item }) {


    return (
      <div className="md:flex md:-mx-4">
      <div className="w-full mb-2 md:w-1/2 md:mx-4 border rounded shadow-sm">
          <a lassName="mb-4">
              <img className="rounded" src={item.itemImage} alt="" width={300} height={300} />
          </a>
          <div className="px-4 py-4">
              <div>
                <Link href="/item/[id]" as={`/item/${item.id}`} passHref>
                    <span className="font-semibold leading-tight text-2xl text-gray-800 hover:text-gray-800">
                        {item.name}
                    </span>
                </Link>
              </div>
              <hr className="border-gray-200 my-1 border-bottom-none" style={{borderTopWidth: 0}} />
              <p className="text-gray-900">
                     {item.description}
              </p>
              <div className='flex text-gray-700 text-sm '>
                  <div>Owned by <span className="text-red-400">{item.company_id}</span></div>
              </div>
          </div>
      </div>
    </div>
    )
}