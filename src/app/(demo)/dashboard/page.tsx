import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const cardData = [
  { title: "Storage Capacity", backgroundColor: "#efefef" },
  { title: "Seal Containment", backgroundColor: "#88c999" },
  { title: "Storage Development Plan", backgroundColor: "#9bc1de" },
  { title: "Repository Platform", backgroundColor: "#cccccc" },
  { title: "Storage Economic Model", backgroundColor: "#b8c2cc" },
  { title: "Submission Report", backgroundColor: "#d5e6ea" }
];

const quickLookData = [
  { title: "Bidding Round 2020", backgroundColor: "bg-green-500" },
  { title: "Peninsular Malaysia Offshore", backgroundColor: "bg-blue-500" },
  { title: "New Innovation in O&G", backgroundColor: "bg-pink-500" }
];


export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem> 
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 md:p-6">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <Card key={index} style={{ backgroundColor: card.backgroundColor }} className="flex items-center justify-center h-40">
              <CardContent className="text-center">
                <CardTitle className="text-lg ">{card.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* <PlaceholderContent /> */}
    </ContentLayout>
  );
}
