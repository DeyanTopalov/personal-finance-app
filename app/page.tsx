import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  PieChartIcon as ChartPieIcon,
  WalletIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <WalletIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Finance</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Take Control of Your Finances
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-gray-500 md:text-xl">
              Track expenses, manage budgets, and achieve your financial goals
              with our comprehensive personal finance dashboard.
            </p>
          </div>
        </section>
        <section id="features" className="container py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <ArrowUpIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-bold">Income Tracking</h3>
              <p className="mt-2 text-gray-500">
                Monitor your income sources and analyze earning patterns over
                time.
              </p>
            </Card>
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <ArrowDownIcon className="h-12 w-12 text-red-500" />
              <h3 className="mt-4 text-xl font-bold">Expense Management</h3>
              <p className="mt-2 text-gray-500">
                Categorize and track your expenses to understand your spending
                habits.
              </p>
            </Card>
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <ChartPieIcon className="h-12 w-12 text-blue-500" />
              <h3 className="mt-4 text-xl font-bold">Budget Planning</h3>
              <p className="mt-2 text-gray-500">
                Set and manage budgets with visual insights to stay on track.
              </p>
            </Card>
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <WalletIcon className="h-12 w-12 text-purple-500" />
              <h3 className="mt-4 text-xl font-bold">Savings Pots</h3>
              <p className="mt-2 text-gray-500">
                Create dedicated savings pots for your financial goals.
              </p>
            </Card>
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <CalendarIcon className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold">Recurring Bills</h3>
              <p className="mt-2 text-gray-500">
                Never miss a payment with automated bill tracking and reminders.
              </p>
            </Card>
            <Card className="p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <ChartPieIcon className="h-12 w-12 text-teal-500" />
              <h3 className="mt-4 text-xl font-bold">Visual Analytics</h3>
              <p className="mt-2 text-gray-500">
                Gain insights through intuitive charts and visual
                representations.
              </p>
            </Card>
          </div>
        </section>
        <section className="bg-muted/50 border-t">
          <div className="container py-12 md:py-24">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to take control of your finances?
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Join thousands of users who are already managing their money
                smarter.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/sign-up">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <WalletIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Finance</span>
          </div>
          <p className="text-sm text-gray-500">© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
