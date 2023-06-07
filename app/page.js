import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { data } from "@/data";

export default function Home({ services }) {
  
  return (
    <>
      <Intro />
      <Services services={services}/>
      <Testimonials />
    </>
  );
}


