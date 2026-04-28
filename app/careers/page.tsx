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
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa6";

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Careers - Udhayakumar",
    description: "My Career Journey",
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
            <Navbar currentPage="careers" />


            <div className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                    Careers
                </h2>

                <p className="leading-7 [&:not(:first-child)]:mt-3 mb-8">
                    Java Backend Engineer with 2.5 years of experience designing and deploying production-grade microservices at Tech Mahindra. Proven in building scalable REST/SOAP APIs with Spring Boot, orchestrating Kubernetes deployments on Red Hat OpenShift, and leading the migration of 100+ services to Java 21. Passionate about clean architecture, automation, and building systems that scale.
                </p>

                <div className="flex gap-5 text-xl mt-10">

                    <div className="flex gap-3">

                        <Link
                            href="https://www.linkedin.com/in/udhayakumarth"
                            target="_blank"
                            className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted transition"
                        >
                            <FaLinkedin className="text-lg text-blue-600" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>

                        <Link
                            href="https://github.com/udhayakumarth"
                            target="_blank"
                            className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted transition"
                        >
                            <FaGithub className="text-lg" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>

                    </div>

                </div>

                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
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
                                <div>Dec 2023 - Present</div>
                                <Separator orientation="vertical" />
                                <div>2.5 yrs</div>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Engineered synchronous and asynchronous SOAP/REST microservices using Spring Boot, integrating with multiple downstream systems to ensure reliable service communication.</li>
                            <li>Built a Java-based Kubernetes client to generate run-time code coverage reports across deployments, namespaces, and multiple clusters, improving real-time testing by tracking coverage.</li>
                            <li>Designed and built a Java-based Workflow Runner to orchestrate automated REST API test executions, streamlining the end-to-end testing pipeline.</li>
                            <li>Led the migration of 100+ microservices from Java 11 to Java 21, improving runtime performance and ensuring security compliance.</li>
                            <li>Managed and automated microservice deployments on Red Hat OpenShift (OCP) using blue-green rollout strategies, minimizing downtime and deployment risk.</li>
                            <li>Monitored microservice health and performance using Dynatrace and Kibana, building custom dashboards to track latency, error rates, and service dependencies in real time.</li>
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
                            <li>Designed and developed a full-stack personal finance tracker with a React frontend, Spring Boot REST APIs, and MySQL — implementing JWT-based authentication with refresh token rotation for secure session management. </li>
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
                            <li>Automated HR operations using Power Apps, Power Automate, and SharePoint for approvals, queries, and service requests — and built a Power BI dashboard on an existing SQL database to provide stakeholders with real-time visibility into key business metrics.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge className="bg-gray-900 text-white">Skills: </Badge>
                            <Badge variant="outline">Software Development</Badge>
                        </div>
                    </CardFooter>
                </Card>

                <p className="leading-7 [&:not(:first-child)]:mt-10">
                    Between 2017 and 2019, I worked wherever I could - a milk shop, a tailor shop, fusing T-shirts, helping with a small chocolate ad campaign, ironing clothes. In 2020 and 2021, I spent my days in a telecom call center, and later delivered food to keep things moving.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    My first steps into tech came in 2022 as a software intern, followed by some UI design freelance work. In 2023, I got into full-time Software Development.
                </p>

            </div>


            <Footer />
        </div>
    );
}

