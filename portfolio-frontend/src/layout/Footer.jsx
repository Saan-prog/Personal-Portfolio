import {Github} from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub"},
    { icon: Linkedin, href: "#", label: "LinkedIn"},
    { icon: Twitter, href: "#", label: "Twitter"},
];

const footerLinks = [
    { href: "#about", label:"About"},
    { href: "#projects", label:"Projects"},
    { href: "#experience", label:"Experience"},
    { href: "#testimonials", label:"Testimonials"},
    { href: "#contact", label:"Contact"},
];

const footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='py-12 border-t border-border'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                    {/* Logo & Copyright */}
                    <div className='text-center md:text-left'>
                        <a href="#" className='text-xl font-bold tracking-tight'>PM
                            <span className="text-primary">.</span>
                        </a>
                        <p className='text-sm text-muted-foreground mt-2'>
                            @ {currentYear} Sandra. All rights reserved.
                        </p>
                    
                    </div>
                    {/* Links */}
                    <nav className='flex flex-wrap justify-center gap-6'>
                        {footerLinks.map((link) =>(
                            <a key={link.href} href={link.href} className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* social links */}
                    <div className='flex flex-items-center gap-4'>
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href}
                            className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary tranistion-all'>
                               <social.icon className='w-5 h-5' />
                               </a> 
                        ))}

                    </div>
            
                </div>
            </div>

        </footer>
    )
}

export default footer
