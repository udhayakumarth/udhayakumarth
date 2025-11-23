import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Udhayakumar",
    description: "My Social Contacts",
    openGraph: {
        title: "Udhayakumar",
        description: "A calm and curious brain in a loud universe.",
        images: [
            {
                url: "https://udhayakumarth.com/og/whoami.png",
                width: 1200,
                height: 630,
            },
        ],
    }
};

export default function Careers() {
    return (
        <div className="px-2 py-2">
            <div>
                <div className="mx-auto max-w-6xl px-2 py-4">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-wrap justify-end w-full">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/blogs">Blogs</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/apps">Apps</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/careers">Careers</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/contact" className="text-foreground font-medium">Contact</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="border-b border-white/10 mt-2 mb-2" />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                    Contact
                </h2>

                <div className="text-lg font-semibold">
                    Reach me at <a href="mailto:dev.udhayakumar@gmail.com" className="text-muted-foreground hover:text-foreground transition">
                        dev.udhayakumar@gmail.com
                    </a>
                </div>

            </div>

            <footer className="w-full mt-16 py-10 border-t">
                <div className=" mx-auto max-w-6xl px-4 py-8 flex justify-center gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="space-y-1">
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <a href="/" className="hover:text-foreground transition">
                                Home
                            </a>
                            <Separator orientation="vertical" />
                            <a href="/blogs" className="hover:text-foreground transition">
                                Blogs
                            </a>
                            <Separator orientation="vertical" />
                            <a href="/apps" className="hover:text-foreground transition">
                                Apps
                            </a>
                            <Separator orientation="vertical" />
                            <a href="/careers" className="hover:text-foreground transition">
                                Careers
                            </a>
                            <Separator orientation="vertical" />
                            <a href="/contact" className="hover:text-foreground transition">
                                Contact
                            </a>
                        </div>
                    </div>

                </div>

                <div className="justify-center flex h-5 items-center space-x-4 text-sm mt-8">
                    <div className="text-center text-xs text-muted-foreground">udhayakumarth.com</div>
                    <Separator orientation="vertical" />
                    <div className="text-center text-xs text-muted-foreground">No Rights Reserved.</div>
                </div>

            </footer>
        </div>
    );
}

