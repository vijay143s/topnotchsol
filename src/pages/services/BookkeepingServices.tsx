import Header from "@/components/Header";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent } from "@/data/serviceContent";


const BookkeepingServices = () => {
  const content = serviceContent["bookkeeping-services"];

  return (
      <>
      <Header />
      
        <section
          className="relative w-full h-[320px] md:h-[420px] flex items-end justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://www.remotebooksonline.com/images/nlp/new-bookkeeping-services-banner.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          
        >
      </section>
      
      <ServicePageLayout {...content} />
      
    </>
  );
};

export default BookkeepingServices;