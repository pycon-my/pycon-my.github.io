import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pyconmy/',
    logo: '/assets/linkedin.png',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pyconmy',
    logo: '/assets/instagram.png',
  },
  {
    name: 'X (formerly Twitter)',
    href: 'https://twitter.com/pyconmy',
    logo: '/assets/x.png',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/PyConMYofficial',
    logo: '/assets/facebook.png',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-land px-6 md:px-10 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">

          <div className="md:col-span-1">
            <h3 className="text-3xl md:text-4xl font-instrument-serif text-green mb-6 leading-tight">
              This annual event is<br />
              proudly organised by
            </h3>
            <p className="text-lg font-space-grotesk text-body">
              PyCon MY PLT (LLP0006642-LGN)
            </p>
          </div>

          <div className="md:col-span-1 mt-16 md:mt-20">
            <div className="space-y-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-space-grotesk text-body hover:text-text-focused hover:italic"
                >
                  <Image
                    src={social.logo}
                    alt={`${social.name} logo`}
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 mt-16 md:mt-20 md:ml-[-4rem]">
            <div className="space-y-1">
              <Link href="/about" className="block text-lg font-space-grotesk text-body hover:text-text-focused hover:italic">
                About Us
              </Link>
              <Link href="/pdpa" className="block text-lg font-space-grotesk text-body hover:text-text-focused hover:italic">
                PDPA
              </Link>
              <Link href="/coc" className="block text-lg font-space-grotesk text-body hover:text-text-focused hover:italic">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-1 order-1 md:order-1 place-content-center h-full">
            <p className="text-lg font-space-grotesk text-body text-center md:text-left">
              © 2025 PyCon MY PLT
            </p>
          </div>

          <div className="md:col-span-1 order-2 md:order-2 flex justify-center">
            <div className="relative w-32 h-24 md:w-40 md:h-30">
              <Image
                src="/assets/monkey.png"
                alt="PyCon mascot illustration"
                fill
                style={{
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
