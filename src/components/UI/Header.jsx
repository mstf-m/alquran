"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Input, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { SvgSearch } from "../Svgs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["HOME", "QURAN", "BLOG", "ABOUT US", "Log Out"];

  return (
    <header>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="mx-auto container bg-transparent text-white"
        isBlurred={false}
        maxWidth="full"
        position="static"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="gap-5">
          <NextImage
            width={45}
            height={45}
            priority
            alt="Main Logo"
            src="/mainLogo.png"
          />
          <p className="font-bold">ALQURAN</p>
        </NavbarBrand>

        <NavbarContent
          className="hidden sm:flex gap-0 bg-yellowGradient"
          justify="center"
        >
          <NavbarItem>
            <Button
              as={Link}
              className="text-white rounded-2xl"
              color="primary"
              href="#"
              variant="flat"
            >
              HOME
            </Button>
          </NavbarItem>
          <NavbarItem isActive>
            <Button
              as={Link}
              className="text-white"
              color=""
              href="/quran"
              variant="flat"
            >
              QURAN
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-white"
              color=""
              href="#"
              variant="flat"
            >
              BLOG
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-white"
              color=""
              href="#"
              variant="flat"
            >
              ABOUT US
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full",
            }}
            placeholder="   Search"
            size="sm"
            startContent=""
            // label={<div className="bg-blue-primary p-2 rounded-full"><SvgSearch /></div>}
            type="search"
          />
          <Image src="/Wetalk-logo.png" alt="" />
        </NavbarContent>

        <NavbarMenu className="bg-black/60 backdrop-blur-lg">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "success"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
