import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function LeftSideBar() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background transition-all duration-300 data-[collapsed=true]:w-16 sm:static sm:w-64">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="text-lg">Acme Inc</span>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full sm:hidden" data-collapsed-trigger>
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="dashboard">
              <AccordionTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted">
                <div className="flex items-center gap-3">
                  <HomeIcon className="h-5 w-5" />
                  <span>Dashboard</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-1 px-3 pt-2">
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Reporting
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="products">
              <AccordionTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted">
                <div className="flex items-center gap-3">
                  <PackageIcon className="h-5 w-5" />
                  <span>Products</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-1 px-3 pt-2">
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  All Products
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Categories
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Inventory
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="orders">
              <AccordionTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted">
                <div className="flex items-center gap-3">
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Orders</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-1 px-3 pt-2">
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  All Orders
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Pending
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Shipped
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Cancelled
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="customers">
              <AccordionTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted">
                <div className="flex items-center gap-3">
                  <UsersIcon className="h-5 w-5" />
                  <span>Customers</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-1 px-3 pt-2">
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  All Customers
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  VIP Customers
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Subscriptions
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Referrals
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="settings">
              <AccordionTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted">
                <div className="flex items-center gap-3">
                  <SettingsIcon className="h-5 w-5" />
                  <span>Settings</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-1 px-3 pt-2">
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  General
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Integrations
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Notifications
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  Billing
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
        <div className="border-t px-4 py-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="h-6 w-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">John Doe</div>
                <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <UserIcon className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOutIcon className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <div className="flex-1 sm:ml-64" />
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}