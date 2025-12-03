import { SlashIcon } from "lucide-react";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadCrumbs?: Breadcrumb[];
}

export const CustomBreadCrumbs = ({ currentPage, breadCrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadCrumbs.map((crumb) => (
          <section className="flex items-center gap-2">
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </section>
        ))}

        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <BreadcrumbPage className="text-black font-extrabold">
              {currentPage}
            </BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
