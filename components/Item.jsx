/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Item({ item }) {


    return (
      <div className="md:flex md:-mx-4">
      <div className="w-full mb-2 md:w-1/2 md:mx-4 border rounded shadow-sm">
          <a lassName="mb-4">
              <Link href="/item/[id]" as={`/item/${item.id}`} passHref>
                        <img className="rounded cursor-pointer" src={item.itemImage} alt={`item-${item.id}-img`} width={300} height={300} />
              </Link>
          </a>
          <div className="px-4 py-4">
              <div>
                <Link href="/item/[id]" as={`/item/${item.id}`} passHref>
                    <span className="font-semibold leading-tight text-2xl text-gray-800 hover:text-gray-800 cursor-pointer">
                        {item.name}
                    </span>
                </Link>
              </div>
              <hr className="border-gray-200 my-1 border-bottom-none" style={{borderTopWidth: 0}} />
              <p className="text-gray-900">
                     {item.description}
              </p>
              <div className='flex text-gray-700 text-sm '>
                  <div>
                     <span className="mr-1"> Owned by</span>
                      <Link href="/company/[id]" as={`/company/${item.company.id}`} passHref>
                        <span className="text-red-400 cursor-pointer flex-row">
                            {item.company.name}
                        </span>
                    </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
    )
}