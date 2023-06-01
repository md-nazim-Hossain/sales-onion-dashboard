import Filter from "@components/shared/Filter";
import Search from "@components/shared/Search";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <section className="bg-theme-base-2 flex items-center h-[89px]">
      <div className="w-[240px] padding-1">
        <Image
          alt="logo"
          src="/assets/images/logo.svg"
          width={100}
          height={30}
        />
      </div>
      <div className="flex-1 padding-1">
        <div className="flex justify-between items-center gap-x-10">
          <div className="w-max">
            <p>Welcome</p>
            <h3>Alex Homes</h3>
          </div>
          <div className="w-[370px]">
            <Search />
          </div>
          <div className="w-max">
            <div className="flex justify-between items-center gap-x-7">
              <div>
                <h5>Monday</h5>
                <p className="text-white italic">23 March, 2023</p>
              </div>
              <div>
                <h6>Viewing as</h6>
                <Filter />
              </div>
              <div className="flex items-center gap-x-5">
                <Image
                  alt="Glass Icons"
                  src={"/assets/images/glass.svg"}
                  width={34}
                  height={30}
                  className="object-cover"
                />
                <Image
                  alt="Metamask Icons"
                  src={"/assets/images/metamask.svg"}
                  width={34}
                  height={50}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
