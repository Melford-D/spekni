import React, { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  MenuIcon,
  PlayIcon,
  XIcon,
  TerminalIcon,
  HeartIcon,
  BriefcaseIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Menubar from "../Menubar";
import { useTheme } from "next-themes";

const explore = [
  {
    name: "Developers",
    description: "See trusted developers endorsed on Spekni",
    href: "/explore",
    icon: TerminalIcon,
  },
  {
    name: "Recruiters",
    description: "See a list of vetted recruiters currently hiring",
    href: "/recruiters",
    icon: BriefcaseIcon,
  },
  {
    name: "About Us",
    description: "Want to know more about Spekni? Read more here",
    href: "/about",
    icon: HeartIcon,
  },
];
const callsToAction = [
  { name: "How it works", href: "https://youtube.com", icon: PlayIcon },
];
const resources = [
  {
    name: "API",
    href: "/developer",
  },
  {
    name: "License",
    href: "https://github.com/Evavic44/spekni/blob/main/LICENSE",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // console.log("Session: ", session);

  return (
    <div>
      <Popover className="test relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex items-center  lg:flex-1">
              <Image src={Logo} alt="Logo" width={30} height={30} />
              <Link href="/">
                <a className="font-bold text-xl ml-1">Spekni</a>
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex md:justify-end space-x-10"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "" : "",
                        "group rounded-md inline-flex items-center text-base"
                      )}
                    >
                      <span>Explore</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "" : "",
                          "ml-2 h-5 w-5 group-hover:"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-100 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg overflow-hidden">
                          <div className="dropdown rounded-b-none relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                            {explore.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-5 w-5 mt-2 highlight"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <h3 className="text-base font-medium">
                                    {item.name}
                                  </h3>
                                  <p className="mt-1 text-sm ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 dropdownButton space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root w-full">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-5 w-5 highlight"
                                    aria-hidden="true"
                                  />

                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link href="/about" className="text-base font-medium">
                About
              </Link>
              <Link
                href="https://github.com/Evavic44/spekni"
                className="text-base font-medium  "
              >
                Docs
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <Link href="/Sign Up">
                <a className="whitespace-nowrap text-base">Sign Up</a>
              </Link> */}
              {status === "loading" ? (
                <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                  <span className="loader loaderLight"></span>
                </a>
              ) : null}
              {status === "authenticated" ? (
                <Link href={`/profile?useremail=${session.user.email}`}>
                  <img
                    src={`${session.user.image}`}
                    width={35}
                    height={35}
                    className="cursor-pointer rounded-full bg-secondary"
                    title="visit your profile"
                    alt={`${session.user.name}`}
                  />
                  {/* <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                    Profile
                  </a> */}
                </Link>
              ) : null}
              {status === "unauthenticated" ? (
                <Link href="/login">
                  <a className="btn btn-primary ml-6 inline-flex items-center justify-center">
                    Login
                  </a>
                </Link>
              ) : null}
              <Menubar authenticated={status === "authenticated"} />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="highlight-bg rounded-lg shadow-lg">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <Image
                      className="cursor-pointer"
                      src={Logo}
                      alt="Logo"
                      width="30px"
                      height="30px"
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="p-2 inline-flex items-center justify-center">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {explore.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <item.icon
                          className="flex-shrink-0 h-5 w-5 highlight"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base  ">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/explore">
                    <a className="text-base font-medium  hover:text-zinc-700">
                      Explore
                    </a>
                  </Link>

                  <a
                    href="https://github.com/Evavic44/spekni"
                    className="text-base font-medium  hover:text-zinc-700"
                  >
                    Documentation
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium  hover:text-zinc-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <Link href="/login">
                    <a className="btn btn-dark w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base btn text-center">
                      Get Started
                    </a>
                  </Link>
                  {/* <p className="mt-6 text-center text-sm">
                    Existing User?{" "}
                    <Link href="/explore">
                      <a className="highlight text-sm">Endorse a dev</a>
                    </Link>
                  </p> */}
                  <div className="mt-6 flex items-center justify-between">
                    <Menu>
                      <Menu.Item>
                        <button onClick={changeTheme} className="text-sm">
                          {theme === "light" ? (
                            <MoonIcon className="h-6 w-6" />
                          ) : (
                            <SunIcon className="h-6 w-6" />
                          )}
                        </button>
                      </Menu.Item>
                    </Menu>

                    <a
                      className="mr-5"
                      href="https://github.com/evavic44/spekni"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 23"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="GitHub Icon"
                        className="fillIcon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C5.37 0 0 5.27642 0 11.7909C0 17.0083 3.435 21.4152 8.205 22.9775C8.805 23.0806 9.03 22.7269 9.03 22.4174C9.03 22.1374 9.015 21.2088 9.015 20.2214C6 20.7667 5.22 19.4992 4.98 18.8359C4.845 18.4969 4.26 17.4505 3.75 17.1705C3.33 16.9494 2.73 16.4041 3.735 16.3893C4.68 16.3746 5.355 17.2442 5.58 17.5979C6.66 19.3813 8.385 18.8801 9.075 18.5706C9.18 17.8042 9.495 17.2884 9.84 16.9936C7.17 16.6988 4.38 15.6819 4.38 11.1719C4.38 9.8896 4.845 8.82842 5.61 8.00306C5.49 7.70829 5.07 6.49972 5.73 4.87848C5.73 4.87848 6.735 4.56897 9.03 6.08704C9.99 5.82175 11.01 5.6891 12.03 5.6891C13.05 5.6891 14.07 5.82175 15.03 6.08704C17.325 4.55423 18.33 4.87848 18.33 4.87848C18.99 6.49972 18.57 7.70829 18.45 8.00306C19.215 8.82842 19.68 9.87486 19.68 11.1719C19.68 15.6966 16.875 16.6988 14.205 16.9936C14.64 17.3621 15.015 18.0695 15.015 19.1749C15.015 20.7519 15 22.0195 15 22.4174C15 22.7269 15.225 23.0954 15.825 22.9775C18.2072 22.1872 20.2772 20.6829 21.7437 18.6761C23.2101 16.6694 23.9993 14.2613 24 11.7909C24 5.27642 18.63 0 12 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
