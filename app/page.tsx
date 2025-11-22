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


export default function Home() {
  return (
    <div className="px-2 py-2">
      <div>
        <div className="mx-auto max-w-6xl px-2 py-4">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap justify-end w-full">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-foreground font-medium">Home</Link>
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
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="border-b border-white/10 mt-2 mb-2" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-balance mb-8">
          A calm and curious brain in a loud universe.
        </h1>
        <p className="text-lg font-semibold">Udhayakuamar</p>
        <p className="text-muted-foreground text-sm mb-8">Software Engineer</p>
        <div className="border-b border-white/10 mt-2 mb-8" />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-12">
          I'm someone who thinks deeply and questions everything. I like understanding how things work — whether it's tech, history, politics, or society. I focus on the long term, work steadily, and stay curious. I'm not driven by hype; I'm driven by learning, progress, and the confidence that I can build my own path.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          My Journey
        </h3>

        <span className="bg-yellow-300 px-1 text-black font-semibold text-lg">I wasn't a bright student in school.</span>

        <p className="leading-7 [&:not(:first-child)]:mt-3">
          For most of my early years, I didn't know what I wanted from life. I just followed others — my brother, my friends, even film heroes. My parents weren't highly educated.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">
          When I think of my childhood, I mostly remember simple things: playing cricket, roaming around on my cycle, spending hours on GTA and Euro Truck, watching Sun Music, and being scared of exams. We lived in a comfortable 2BHK house my mom had managed to secure for us.
        </p>

        <span className="bg-yellow-300 px-1 text-black font-semibold text-lg">After I turned 12, life changed.</span>

        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Things became harder, and all the comfort I knew slowly faded away. I was confused and unsure about everything, but my family somehow kept us going. We didn't rise, but we didn't fall apart either.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-3 mb-6">
          When it came to choosing a path, I picked computer science in both 12th and college — not because I had a clear dream, but because I didn't know what else to choose. I couldn't build interest in the education and the exams.
        </p>

        <span className="bg-yellow-300 px-1 text-black font-semibold text-lg">Then COVID happened.</span>

        <p className="leading-7 [&:not(:first-child)]:mt-3">
          I was 19. For the first time, I felt a strong push to do better. I wasn't good at anything, but I had the motivation to improve. Looking back, I think that's when my real life started. Until then, I hadn't done anything meaningful for myself.
        </p>

        
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          <span className="bg-gray-900 px-1 text-white font-semibold">Good movies, books, and computers</span> helped me rebuild who I'm now. I've grown a lot since then, but there is still a long way to go. I don't know exactly where my future will lead, but I know one thing for sure — every year from now will be better than the last.
        </p>

      </div>

      <footer className="w-full mt-16 py-10 border-t">
      <div className="flex justify-center gap-6 mb-4 text-sm text-muted-foreground">
        <a href="/blogs" className="hover:text-foreground transition">
          Blogs
        </a>
        <a href="/apps" className="hover:text-foreground transition">
          Apps
        </a>
        <a href="/careers" className="hover:text-foreground transition">
          Careers
        </a>
        <a href="/contact" className="hover:text-foreground transition">
          Contact
        </a>
      </div>

      

      <p className="text-center text-xs text-muted-foreground">
        udhayakumarth.com | No Rights Reserved.
      </p>
    </footer>
    </div>
  );
}

