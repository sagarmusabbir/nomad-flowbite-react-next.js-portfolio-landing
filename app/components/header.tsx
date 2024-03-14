"use client";
import { on } from "events";
import { Breadcrumb, Button, DarkThemeToggle, Navbar } from "flowbite-react";
import type { FC } from "react";

import { HiHome } from "react-icons/hi";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar className="border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {/* Logo */}
        <Navbar.Brand
          href="./"
          className="border border-neon-slatedarker dark:border-neon-slatelightmd  text-transparent bg-clip-text bg-gradient-to-r to-neon-slatedark900 dark:to-neon-slatelight from-neon-slatedarkest  dark:from-neon-slatelightmd  font-semibold  text-md leading-tight tracking-normal pl-0.5"
        >
          NOMAD
          <mark className="text-neon-slatelight dark:text-neon-slatedarkest bg-gradient-to-r to-neon-slatedarker dark:to-neon-slatelight from-neon-slatedark  dark:from-neon-slatelightmd   font-medium  text-md ">
            GANG
          </mark>
        </Navbar.Brand>

        <div className="flex items-center gap-3 lg:order-2 md:order-2 ">
          <DarkThemeToggle />
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8  md:flex-row md:space-x-4 md:items-center  lg:text-base lg:font-medium text-primary-700 dark:text-white ",
          }}
          className="lg:order-1 md:order-1 "
        >
          <Navbar.Link href="/" className="md:hover:text-primary-800">
            Home
          </Navbar.Link>
          <Navbar.Link
            href="https://github.com/sagarmusabbir"
            className="md:hover:text-primary-800 flex items-center gap-1"
            target="_blank"
          >
            Github
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </Navbar.Link>
          <Navbar.Link
            href="https://github.com/sagarmusabbir/FlowbiteReact-NextJs-Boilerplate"
            className="md:hover:text-primary-800"
          >
            Features
          </Navbar.Link>
          <Navbar.Link
            href="https://blog.musabbirsagar.com/"
            className="md:hover:text-primary-800  flex items-center gap-1"
            target="_blank"
          >
            Blog
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </Navbar.Link>

          <Navbar.Link
            href="https://www.upwork.com/workwith/smamusabbirs"
            target="_blank"
            className="md:hover:text-primary-800 flex items-center gap-1"
          >
            Hire
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </Navbar.Link>
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="border-y border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}></Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite-React NextJs Starter</Breadcrumb.Item>
        </Breadcrumb>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
