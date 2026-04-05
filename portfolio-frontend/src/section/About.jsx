import { Code2, Lightbulb, Rocket, Users} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Learnign & Growth",
        description: "Continuously building my skills in React.js, Node.js, and MongoDB through hands-on projects." 
    },
    {
    icon: Rocket,
    title: "Project Focus",
    description: "Creating responsive and user-friendly web applications with clean and maintainable code.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Leveraging teamwork and communication skills from my previous HR experience to work effectively in development projects.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Innovation",
    description: "Exploring new technologies and techniques to grow as a full-stack developer and deliver meaningful applications.",
  },

];



const About = () => {
    return (
        <section id='about' className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-col-2 gap-16 items-center">
        {/* left col */}
        <div className="space-y-6 md:space-y-8">
            <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground  ">
                Building the future,
                <span className="font-serif italic font-normal text-foreground">
        {" "} one Component at a time.
                </span>
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m an aspiring software developer transitioning into full-stack development, 
                with a strong foundation in the MERN stack. My interest in web development 
                started with curiosity and has grown into a passion for building real-world 
                applications and continuously improving my skills.
              </p>
              <p>
                I work with React.js, Node.js, and MongoDB to build responsive and user-friendly 
                web applications. I focus on writing clean, maintainable code while strengthening 
                both my frontend and backend development skills through hands-on projects.
              </p>
              <p>
                Previously, I worked as an Assistant Manager (HR) for over 4 years, where I 
                developed strong communication, problem-solving, and organizational skills. 
                I’m now seeking opportunities to transition into a developer role and grow 
                as a full-stack developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-md font-medium italic text-foreground">
                "My mission is to turn ideas into meaningful digital experiences, building 
                clean and reliable applications while constantly improving my skills 
                as a developer."
              </p>
            </div>
            {/* Right Colum Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                    <div key={index} className="glass p-6 rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${(index + 1) * 100}ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
                ))}

            </div>
        </div>
                </div>
            </div>

        </section>
    )
}

export default About
