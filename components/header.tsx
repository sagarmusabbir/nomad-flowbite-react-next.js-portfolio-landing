"use client";
import { on } from "events";
import { Breadcrumb, Button, DarkThemeToggle, Navbar } from "flowbite-react";
import type { FC } from "react";

import { HiHome } from "react-icons/hi";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar className="border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Navbar.Brand href="./" className="justify-self-start">
          <span
            className="
          self-center whitespace-nowrap text-xl font-semibold text-primary-900 dark:text-white font-bebas"
          >
            NomadGang<span className="font-extralight">.com</span>
            <span className="text-xs font-light">™</span>
          </span>
        </Navbar.Brand>

        <div className="flex items-center gap-3 lg:order-2 md:order-2 ">
          <DarkThemeToggle />
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 md:mt-0 md:flex-row md:space-x-4 lg:text-base lg:font-medium text-primary-700 dark:text-white ",
          }}
          className="lg:order-1 md:order-1 "
        >
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Company
          </Navbar.Link>
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Marketplace
          </Navbar.Link>
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Features
          </Navbar.Link>
          <Navbar.Link href="#" className="md:hover:text-primary-800">
            Team
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
