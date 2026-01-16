import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full mt-16 py-10 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex justify-center gap-6 mb-4 text-sm text-muted-foreground">
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
  );
}
