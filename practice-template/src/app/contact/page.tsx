import { RxSlash } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-7 sm:px-8 lg:px-12 2xl:px-24">
      {/* Bread Crum */}
      <div className="pb-8 md:pb-12 lg:pb-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-sm font-medium text-zinc-500"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground font-medium">
                Contact
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6">
        <div className="bg-background shadow-[2px_2px_6px_3px_rgba(0,0,0,0.06)] dark:shadow-[2px_2px_6px_3px_rgba(0,0,0,0.2)] py-9 px-7 space-y-7">
          <div className="flex justify-start items-center gap-3">
            <span className="bg-primary p-2 inline-block rounded-full">
              <FiPhone className="text-white text-xl" />
            </span>
            <p className="font-semibold">Call To Us</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>
          <hr />
          <div className="flex justify-start items-center gap-3">
            <span className="bg-primary p-2 inline-block rounded-full">
              <MdOutlineEmail className="text-white text-xl" />
            </span>
            <p className="font-semibold">Write To Us</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="text-right bg-background shadow-[2px_2px_6px_3px_rgba(0,0,0,0.06)] dark:shadow-[2px_2px_6px_3px_rgba(0,0,0,0.2)] py-9 px-7">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-3">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-zinc-100 dark:bg-black/25 placeholder:text-muted-foreground text-sm placeholder:text-sm rounded-sm px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Your Email *"
              className="bg-zinc-100 dark:bg-black/25 placeholder:text-muted-foreground text-sm placeholder:text-sm rounded-sm px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="bg-zinc-100 dark:bg-black/25 placeholder:text-muted-foreground text-sm placeholder:text-sm rounded-sm px-4 py-3 w-full"
            />
          </div>
          <textarea
            placeholder="Your Massage"
            rows={8}
            className="bg-zinc-100 dark:bg-black/25 placeholder:text-muted-foreground text-sm placeholder:text-sm rounded-sm px-4 py-3 w-full mt-6 mb-5 "
          ></textarea>

          <Button className="w-full sm:w-auto">Send Massage</Button>
        </div>
      </div>
    </div>
  );
}
