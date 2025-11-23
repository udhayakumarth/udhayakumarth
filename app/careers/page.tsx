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
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers - Udhayakumar",
    description: "My Career Journey",
    openGraph: {
        title: "Udhayakumar",
        description: "A calm and curious brain in a loud universe.",
        images: [
            {
                url: "http://localhost:3000/og/whoami.png",
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
                                    <Link href="/careers" className="text-foreground font-medium">Careers</Link>
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
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                    My Careers
                </h2>

                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    Between 2017 and 2019, I worked wherever I could - a milk shop, a tailor shop, fusing T-shirts, helping with a small chocolate ad campaign, ironing clothes. In 2020 and 2021, I spent my days in a telecom call center, and later delivered food to keep things moving.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    My first steps into tech came in 2022 as a software intern, followed by some UI design freelance work. In 2024, I got into Cyber Security Analyst - IAM, and in 2025, I finally stepped into software development.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    It wasn't a straight path, but every job taught me something. Every year, I moved a little closer to where I wanted to be. And I'm still moving.
                </p>

                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-16">
                    Experience
                </h4>

                <Card className="mt-6 bg-transparent border border-border shadow-none">
                    <CardHeader>
                        <CardTitle>Associate Software Engineer - Backend</CardTitle>
                        <p className="text-muted-foreground text-sm mt-2">
                            Tech Mahindra
                        </p>
                        <Separator className="my-4" />
                        <CardDescription>
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>Jan 2025 - Present</div>
                                <Separator orientation="vertical" />
                                <div>11 mos</div>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Developed and maintained synchronous and asynchronous SOAP and REST microservices with multiple downstream integrations using Spring Boot.</li>
                            <li>Build a Java-based Kubernetes client that can generate runtime code coverage for any deployment/namespace across multiple clusters.</li>
                            <li>Built a Java-based workflow runner to orchestrate REST API executions for Automated Testing.</li>
                            <li>Upgraded and migrated existing microservices from Java 11 to Java 21, ensuring performance and security improvements.</li>
                            <li>Managed microservice deployments on Red Hat OpenShift (OCP) with blue-green rollout strategies.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge className="bg-gray-900 text-white">Skills: </Badge>
                            <Badge variant="outline">Java</Badge>
                            <Badge variant="outline">Spring Boot</Badge>
                            <Badge variant="outline">Maven</Badge>
                            <Badge variant="outline">REST APIs</Badge>
                            <Badge variant="outline">WS/SOAP APIs</Badge>
                            <Badge variant="outline">Microservices</Badge>
                            <Badge variant="outline">Software Development</Badge>
                            <Badge variant="outline">Openshift</Badge>
                            <Badge variant="outline">kubernetes</Badge>
                            <Badge variant="outline">Kafka</Badge>
                            <Badge variant="outline">Active MQ</Badge>
                            <Badge variant="outline">LDAP</Badge>
                            <Badge variant="outline">MySQL</Badge>
                            <Badge variant="outline">PostgreSQL</Badge>
                        </div>
                    </CardFooter>
                    <Separator className="my-4" />
                    <CardHeader>
                        <CardTitle>Cyber Security Analyst - IAM</CardTitle>
                        <p className="text-muted-foreground text-sm mt-2">
                            Tech Mahindra
                        </p>
                        <Separator className="my-4" />
                        <CardDescription>
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>Dec 2023 - Jan 2025</div>
                                <Separator orientation="vertical" />
                                <div>1.1 yrs</div>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Managed and configured SiteMinder policies, realms, rules, and responses for secure access control.</li>
                            <li>Handled reverse proxy configurations to secure internal applications via external access points.</li>
                            <li>Maintained single sign-on (SSO) setups and ensured seamless user authentication experiences</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mt-6 bg-transparent border border-border shadow-none">
                    <CardHeader>
                        <CardTitle>Full-stack Developer Intern</CardTitle>
                        <p className="text-muted-foreground text-sm mt-2">
                            Virtusa
                        </p>
                        <Separator className="my-4" />
                        <CardDescription>
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>May 2023 - Aug 2024</div>
                                <Separator orientation="vertical" />
                                <div>3 mos</div>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Developed a Full-stack Application that allows users to track Income, Expenses, Add Budgets, Savings, Goals and Debts.</li>
                            <li>Designed database model and user interface using Figma. Implemented REST API endpoints using Spring Boot and MySQL . Enabled visualization through charts and graphs using Chartjs. </li>
                            <li>Integrated JWT token using Spring Security and established a refresh token strategy, Improved API security. </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge className="bg-gray-900 text-white">Skills: </Badge>
                            <Badge variant="outline">React.js</Badge>
                            <Badge variant="outline">Javascript</Badge>
                            <Badge variant="outline">Java</Badge>
                            <Badge variant="outline">Spring Boot</Badge>
                            <Badge variant="outline">REST APIs</Badge>
                            <Badge variant="outline">Software Development</Badge>
                            <Badge variant="outline">MySQL</Badge>
                        </div>
                    </CardFooter>
                </Card>

                <Card className="mt-6 bg-transparent border border-border shadow-none">
                    <CardHeader>
                        <CardTitle>Software Engineer Intern</CardTitle>
                        <p className="text-muted-foreground text-sm mt-2">
                            ZF Group
                        </p>
                        <Separator className="my-4" />
                        <CardDescription>
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>Aug 2022 - Sep 2022</div>
                                <Separator orientation="vertical" />
                                <div>2 mos</div>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Developed power apps for automating several HR operations eliminating manual work using Microsoft power platform and Sharepoint. </li>
                            <li>Optimized UI and Implemented automated services for approvals, queries and opting services using Power Automate.</li>
                            <li>Created a visualization dashboard for employee performance from an existing SQL database using Power BI.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge className="bg-gray-900 text-white">Skills: </Badge>
                            <Badge variant="outline">Software Development</Badge>
                        </div>
                    </CardFooter>
                </Card>

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

