import DashboardLayout from "@components/layout/DashboardLayout";
import Cards from "@components/views/Dashboard/Cards";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DashboardLayout>
        <div>
          <Cards />
        </div>
      </DashboardLayout>
    </main>
  );
}
