"use client"
import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="text-white bg-[#101E38]" id="contact">
      <div className="container max-w-[95%] py-12 md:py-16">
        <div
          id="contact"
          className="scroll-mt-[12vh] flex flex-col gap-10 md:grid md:grid-cols-[1.4fr_1fr] md:items-start"
        >
          <div className="rounded-3xl bg-white/95 p-6 text-slate-900 md:p-10">
            <div className="text-center space-y-2">
              <h2 className="font-Paytone text-3xl md:text-4xl">Want to get in touch?</h2>
              <p className="font-Paytone text-3xl md:text-4xl">Drop me a line</p>
            </div>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold">
                  <span>Email Address</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold">
                <span>Message</span>
                <textarea
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-10 py-3 text-base font-semibold text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition hover:bg-slate-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="font-Paytone text-xl">Contact</h3>
            <div className="font-Inconsolata mt-6 space-y-6">
              <div className="space-y-3">
                <h4 className="uppercase text-gray-4"> / REACH ME </h4>
                <Link href={"mailto:bello4aus@outlook.com"} className="ml-4 block">
                  bello4aus@outlook.com
                </Link>
              </div>
              <div className="space-y-3">
                <h4 className="uppercase text-gray-4"> / CHECK me out </h4>
                <div className="grid ml-4 gap-2">
                  <Link href={"https://linkedin.com/in/tbello7"}>LINKEDIN</Link>
                  <Link href={"https://linkedin.com/in/tbello7"}>MY RESUME</Link>
                  <Link href={"https://x.com/__tbello"}>X (TWITTER)</Link>
                  <Link href={"https://github.com/t-bello7"}>GITHUB</Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
