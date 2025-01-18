import BeautifulRoom from "@/components/beautifulRoom/beautifulRoom";
import Browserange from  "@/components/browserrang/Browserrange"
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/ourproducts/OurProducts";
import PhotoGallery from "@/components/photogallery/PhotoGallery";


export default function Home() {
  return (
    <>
    <Hero/>
    <Browserange/>
     <OurProducts/>
    <BeautifulRoom/>
    <PhotoGallery/>
    </>
  );
}
