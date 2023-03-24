import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {BiMenuAltRight} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Modal({navElements}) {
  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "SHOP    ", path: "/solutions" },
    { name: "LOOKBOOK", path: "/blog" },
    { name: "FEATURES",path: "/contact" },
    { name: "PAGE",path: "/contact" },
    { name: "BLOG",path: "/contact" },
  ];
    const activeClassName = ` items-center gap-2 text-green-500 text-[#007749] font-bold`;
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden text-xs">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
         <BiMenuAltRight className='text-xl'/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white text-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col p-1  py-4 px-4 gap-y-5">
              {navbarItems.map((info, index) => (
                 <Menu.Item key={index}>
                <NavLink
                  to={info.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? activeClassName : "text-sm"
                  }
                >
                  {info.name}
                </NavLink>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}