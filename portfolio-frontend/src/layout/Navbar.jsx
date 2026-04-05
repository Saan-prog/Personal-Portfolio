import Button from "../components/Button"
import { Menu, X } from 'lucide-react';
import { useEffect } from "react";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
// import { Button } from '@/components/Button';

const navLinks = [
    {href: "#about", label:"About"},
    {href: "#projects", label:"Projects"},
    {href: "#experience", label:"Experience"},
    { href: "#contact", label: "Contact" },
    // {href: "#testimonials", label:"Testimonials"},
    

]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lightMode, setLightMode] = useState(false);

useEffect(() => {
  if (lightMode) {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
}, [lightMode]);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[])
   
    return (
       <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-stronger py-3" : "bg-transparent py-5"
      }  z-50`}>
        <nav className="container mx-auto px-6 flex item-center justify-between ">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary"> 
                PM <span className="text-primary">.</span>
            </a>
            {/* Desktop nav */}
            <div className="hidden md:flex item-center absolute left-1/2 transform -translate-x-1/2 gap-1">
                <div className="glass rounded-full px-2 py-1 flex item-center gap-1">
                    {navLinks.map((link, index) => (
                        <a  href={link.href} key={index}

                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                    ))}
                </div>
            </div>
            {/* Call to Action Button */}
            {/* <div className="hidden md:block">
                <a href="#contact">
                <Button size="sm" style={{scroll:'smooth'}}>Contact Me</Button>
                </a>
            </div> */}

            <div className="hidden md:block">
  <button
  onClick={() => setLightMode((prev) => !prev)}
  className="p-2 rounded-full glass hover:bg-surface transition flex items-center justify-center"
>
  {lightMode ? (
    <Sun size={18} className="text-yellow-400" />
  ) : (
    <Moon size={18} className="text-primary" />
  )}
</button>
</div>


            {/* Mobile menu Button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer animate-fade-in" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </nav>

        {/* Mobile Menu */}
        { isMobileMenuOpen && (
        <div className="md:hidden glass-stronger animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                        <a  href={link.href} key={index} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}</a>
                    ))}
                    {/* <a href="#contact">
                        <Button style={{scroll:'smooth'}}>Contact Me</Button>
                    </a> */}
                    <button
  onClick={() => setLightMode((prev) => !prev)}
  className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full glass w-fit"
>
  {lightMode ? (
    <>
      <Sun size={18} className="text-yellow-400" />
      <span>Light Mode</span>
    </>
  ) : (
    <>
      <Moon size={18} className="text-primary" />
      <span>Dark Mode</span>
    </>
  )}
</button>
                    
            </div>
        </div>
        )}
       </header>
    )
}

export default Navbar
