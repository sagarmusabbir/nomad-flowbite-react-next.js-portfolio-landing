"use client";
import { on } from "events";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import type { FC } from "react";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar className="border-y  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Navbar.Brand href="./" className="justify-self-start">
          <span
            className="
          self-center whitespace-nowrap text-xl font-semibold text-primary-900 dark:text-white"
          >
            NomadGang<span className="font-extralight">.com</span>
            <span className="text-xs font-light">™</span>
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkThemeToggle />
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium text-primary-700 dark:text-white ",
          }}
          className="lg:order-1"
        >
          <Navbar.Link href="#" className="rounded-lg">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
