import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BackgroundBeams } from "@/components/ui/background-beams";
import DotPattern from "@/components/ui/dot-pattern-1";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import PyconLogo from "@/public/pycon.svg";
import FooterLink from "@/components/footer-link";

export default function Home() {

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundBeams />
      <div className="flex-grow flex justify-center items-center">
        <div className="mx-auto max-w-7xl px-6 xl:px-0">
          <div className="relative flex flex-col items-center border border-red-500">
            <DotPattern width={5} height={5} />

            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white" />

            <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] p-6 md:p-10 xl:py-16">
              <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <h1 className="font-thin">&quot;Get ready this</h1>
                  <p className="font-semibold">November</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">for</p>
                  <Image className="h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24 mx-1 md:mx-2" src={PyconLogo} alt={''} />
                  <h1 className="font-semibold text-red-500">PyCon MY 2025</h1>
                  <h1 className="font-thin -ml-2">.</h1>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">It&apos;s going to be</p>
                  <h1 className="font-semibold">lit</h1>
                  <p className="font-thin">and</p>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <h1 className="font-semibold">wow!</h1>
                  <h1 className="font-thin -ml-2">&quot;</h1>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className="group inline-block rounded-full border border-black/5 bg-green-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                >
                  <a href="https://forms.gle/KyLbYkuEYRzLBKio9" target="_blank" rel="noopener noreferrer" aria-label="Volunteer with us">
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>✨ Volunteer with us!</span>
                      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                  </a>
                </div>
                <div
                  className="group inline-block rounded-full border border-black/5 bg-red-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                >
                  <a href="/pycon24" aria-label="PyCon MY 2024 Performance">
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>PyCon MY 2024 Performance</span>
                      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                  </a>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-lg text-gray-700">
                <span>Follow us at</span>
                <a href="https://www.facebook.com/PyConMYofficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                </a>
                <a href="https://x.com/pyconmy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/pyconmy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLink />
    </div>
  );
}