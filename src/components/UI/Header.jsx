import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button, Input, Link } from "@nextui-org/react";
import NextImage from "next/image";

export default function Header() {
  return (
    <Navbar
      className="mx-auto container bg-transparent text-white"
      isBlurred={false}
      maxWidth="full"
      position="static"
    >
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
            href="#"
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
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent=""
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}
