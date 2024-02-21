import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cn from "clsx";

export function Hero() {
  return (
    <div className="section hero-section mt-12">
      <div className="left">
        <p className="pre-header">Hi, my name is</p>
        <p
          className={cn(
            "main-header transition-colors ease-in-out duration-1000",
            "bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          )}
        >
          Arvin Poddar.
        </p>
        <div className="post-header">
          <p>I build solutions for the web.</p>
          <p>
            <span className="inline-block">Software engineer @&nbsp;</span>
            <span className="inline-block">
              <Link
                className="text-pink-500 hover:underline"
                href="https://www.makeswift.com/"
                target="_blank"
              >
                Makeswift
              </Link>{" "}
              <span className="hover:animate-pulse">⚡️</span>
            </span>
          </p>
          <p>
            <span className="inline-block">
              <Link
                className="text-amber-400 hover:underline"
                href="https://gatech.edu/"
                target="_blank"
              >
                Georgia Tech
              </Link>{" "}
              Comp Sci
            </span>{" "}
            <span className="inline-block">'22 (BS) & '23 (MS) 🐝</span>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-3 hero-buttons">
          <Link href="/#works">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
              Work
            </Button>
          </Link>

          <Link href="/resume">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
              Résumé
            </Button>
          </Link>

          <Link href="/#contact">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
              <Send size={18} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="right">
        <Image
          src="/hero/hero-graphic-desktop.png"
          width={700}
          height={700}
          alt=""
          className="floating desktop-graphic"
        />
        <Image
          src="/hero/hero-graphic-mobile.png"
          width={500}
          height={500}
          alt=""
          className="floating mobile-graphic"
        />
      </div>
    </div>
  );
}
