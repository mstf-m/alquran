import "./globals.css";
import { Providers } from "@/providers/providers";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import FullpageProvider from "@/providers/fullpage-provider";

export const metadata = {
  title: "ALQURAN",
  description:
    "Explore the profound wisdom of the Quran on our website. Dive into detailed interpretations, accurate translations, and insightful articles. Discover the beauty of the Quran’s famous verses and their relevance in today’s world. Join us in our journey of faith and understanding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <FullpageProvider>
          <Navbar
            className="mx-auto container bg-transparent text-white"
            isBlurred={false}
            maxWidth="full"
            position="static"
          >
            <NavbarBrand className="gap-5">
              <Image
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

          {children}

          <footer className="w-full bg-neutral-color-800">
            <div className="flex justify-center items-center shadow-[0_0_10px_0_rgba(88,88,88,0.25)] rounded-3xl -translate-y-12 py-6 mx-16 bg-white">
              <Image
                width={84}
                height={84}
                priority
                alt="Main Logo"
                src="/mainLogo.png"
              />
              <p className="max-w-xl ml-8">
                О alquran.ru Коран 
                <br /> 
                 главный источник ислама для всех мусульман.
                Эта священная книга разъясняет основы исламского вероучения, как
                то:
              </p>
              <span className="mx-28">Copyright © 2025 AlQuran</span>
              <Image
                width={42}
                height={42}
                priority
                alt=""
                src="/logo.png"
              />
            </div>
          </footer>
          </FullpageProvider>
        </Providers>
      </body>
    </html>
  );
}
