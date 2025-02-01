import Banner from "@/components/banner/Banner";
import Future from "@/components/future/Future";
import Innovation from "@/components/Innovation/Innovation";
import Technology from "@/components/technology/Technology";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Future />
      <Innovation></Innovation>
      <Technology />
    </div>
  );
}
