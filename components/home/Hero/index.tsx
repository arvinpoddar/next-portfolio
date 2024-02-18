import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="section hero-section mt-12">
      <div className="left">
        <div className="pre-header">Hi, my name is</div>
        <div className="main-header">Arvin Poddar.</div>
        <div className="post-header">
          <div>I build solutions for the web.</div>
          <div>
            Software engineer @{" "}
            <Link
              className="text-pink-500 hover:underline"
              href="https://www.makeswift.com/"
            >
              Makeswift
            </Link>{" "}
            ⚡️
          </div>
          <div>Georgia Tech Computer Science '22 (BS) & '23 (MS) 🐝</div>
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
          width={500}
          height={500}
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
