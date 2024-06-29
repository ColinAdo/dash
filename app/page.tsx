import Card, { CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitile";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { CardContent } from "@/components/Card";
import Chart from "@/components/Chart";

const CardData: CardProps[] = [
  {
    lebal: "Sales",
    icon: CreditCard,
    amount: "+246,340.00",
    description: "Sales for the whole month",
  },
  {
    lebal: "Users",
    icon: Users,
    amount: "+24,000.00",
    description: "Users signed up this month",
  },
  {
    lebal: "Activity",
    icon: Activity,
    amount: "-10,000.00",
    description: "Website engagement with the whole month",
  },
  {
    lebal: "Total Revenue",
    icon: DollarSign,
    amount: "+350,000.00",
    description: "Revenue of the whole month",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dasboard" />
      <section className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 transition-all">
        {CardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            icon={d.icon}
            lebal={d.lebal}
            description={d.description}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 transition-all">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <Chart />
        </CardContent>
      </section>
    </div>
  );
}
