import BeautifulRoom from "@/components/beautifulRoom/beautifulRoom";
import Browserange from  "@/components/browserrang/Browserrange"
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/ourproducts/OurProducts";
import PhotoGallery from "@/components/photogallery/PhotoGallery";
import ProductCards from "./products/page";
import OurProductsPreview from "@/components/OurProductsPreview/OurProductsPreview";


export default function Home() {
  return (
    <>
    <Hero/>
    <Browserange/>
    <OurProductsPreview/>
    <BeautifulRoom/>
    {/* <ProductCards/> */}
    <PhotoGallery/>
    </>
  );
}
