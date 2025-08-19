import { FC } from "react";

const aboutItems = [
  {
    title: 'General Cleaning',
    description: 'We keep your environment clean, organized, and welcoming with routine cleaning tailored to your schedule.'
  },
  {
    title: 'Disinfection & Sanitization',
    description: 'Our targeted disinfection services help eliminate harmful germs and ensure a healthy, hygienic environment.'
  },
  {
    title: 'HVAC & Technical Maintenance',
    description: 'We provide reliable technical support to ensure your building’s core systems function efficiently and safely.'
  },
  {
    title: 'Waste & Recycling',
    description: 'We manage waste responsibly and promote eco-friendly recycling practices to support a cleaner planet.'
  },
  {
    title: 'Landscaping',
    description: 'Our team keeps your outdoor areas beautiful, well-groomed, and inviting all year round.'
  },
  {
    title: 'Pest & Hygiene Control',
    description: 'We prevent and eliminate infestations while maintaining the highest hygiene standards for your peace of mind.'
  },
  {
    title: 'Floor Care Services',
    description: 'Professional cleaning, polishing, and maintenance solutions that enhance appearance, ensure safety, and extend the lifespan of all floor types — from tiles to carpets and industrial surfaces.'
  },
  {
    title: 'Security Support',
    description: 'We help safeguard your facility with reliable access control and professional security support solutions.'
  },
  {
    title: 'Space & Relocation',
    description: 'From rearranging workspaces to full relocations, we ensure smooth moves with minimal disruption.'
  },
]
const Testimonials: FC = () => {
  return (
  <section className="section container max-w-[90%] space-y-12" id="testimonials">
    <div className="space-y-6">
    <div className="container space-y-4">
        <h2 className="text-center uppercase font-sfProDisplayBold  text-2xl">
            Our mission is simple yet profound.
        </h2> 
        <p className="text-[#71717A]">
          To deliver high-quality, reliable, and sustainable facilities management and cleaning services that enhance our clients’ environments, promote health and safety, and support the long-term performance of their buildings and operations.
        </p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 container">
          {
            aboutItems.map(item => (
              <div key={item.title} className="p-4 space-y-2 border rounded-2xl">
                <h4 className="font-bold text-sm md:text-base "> {item.title} </h4>
                <p className="text-xs md:text-sm text-[#71717A]">
                  { item.description}
                </p>
              </div>
            ))
          }
    </div>   
    </div>
  </section>);
};
export default Testimonials;
