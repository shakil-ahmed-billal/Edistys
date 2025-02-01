import Banner from "@/components/banner/Banner";
import Future from "@/components/future/Future";
import Innovation from "@/components/Innovation/Innovation";
import Technology from "@/components/technology/Technology";
import Trusted from "@/components/trusted/Trusted";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Future />
      <Innovation />
      <Technology />
      <Trusted />
    </div>
  );
}
