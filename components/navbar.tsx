import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  currentPage?: string;
}

export function Navbar({ currentPage }: NavbarProps) {
  const isActive = (page: string) => currentPage === page ? "text-foreground font-medium" : "";

  return (
    <div>
      <div className="mx-auto max-w-6xl px-2 py-4">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap justify-end w-full">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={isActive("home")}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blogs" className={isActive("blogs")}>
                  Blogs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/apps" className={isActive("apps")}>
                  Apps
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className={isActive("careers")}>
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={isActive("contact")}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="border-b border-white/10 mt-2 mb-2" />
    </div>
  );
}
