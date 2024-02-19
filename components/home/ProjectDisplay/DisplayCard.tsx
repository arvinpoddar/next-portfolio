import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import Image from "next/image";
import cn from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  site?: string;
  poster: string | StaticImport;
};

export function DisplayCard({
  children,
  title,
  description,
  site,
  poster,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group transition-transform duration-200 translate-y-[5px]">
          <Image
            className="rounded-t-lg aspect-[12/7] object-cover object-top border border-b-0 border-neutral-700"
            src={poster}
            width={600}
            height={400}
            alt=""
            priority
          />
          <div
            className={cn(
              "nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden rounded-b-lg border border-gray-200",
              "nx-text-current nx-no-underline dark:nx-shadow-none",
              "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100",
              "active:nx-shadow-sm active:nx-shadow-gray-200",
              "nx-transition-all nx-duration-200 hover:nx-border-gray-300",
              "nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 group-hover:nx-shadow-lg dark:group-hover:nx-border-neutral-500 dark:group-hover:nx-bg-neutral-700"
            )}
          >
            <div className="nx-font-semibold nx-text-gray-700 hover:nx-text-gray-900 dark:nx-text-gray-300 dark:hover:nx-text-gray-100 p-4">
              <span className="flex items-center gap-2 text-2xl">
                {title}
                <span className="nx-transition-transform nx-duration-200 group-hover:nx-translate-x-[2px]">
                  →
                </span>
              </span>
              <p className="text-left font-medium">{description}</p>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border border-neutral-700 min-w-[700px] min-[0px]:max-md:min-w-[calc(90%-30px)] rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <p className="text-2xl text-left">{title}</p>
            {site && (
              <Link href={site} target="_blank" rel="noreferrer noopener">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
                  Visit Site
                </Button>
              </Link>
            )}
          </DialogTitle>
        </DialogHeader>
        <hr className="border-t border-neutral-700" />
        <div className="w-full max-h-[50vh] overflow-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
