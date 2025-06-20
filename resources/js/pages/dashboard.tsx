import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ArrowRight, BarChart3, ChevronDown, DollarSign, IndianRupeeIcon, MoreHorizontal, Package2, Search, Users } from 'lucide-react';

// Dummy data
const analyticsData = {
    totalProducts: 254,
    totalUsers: 1823,
    totalCategories: 32,
    totalInventoryValue: 543920,
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(value);
};

const Dashboard = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500">Welcome back! Here's an overview of your store.</p>
                </div>

                {/* Analytics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Total Products Card */}
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
                                <div className="rounded-lg bg-blue-100 p-2">
                                    <Package2 size={18} className="text-blue-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData.totalProducts}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Link href={route('products.index')}>
                                <Button variant="link" className="cursor-pointer flex h-auto items-center p-0 text-blue-600">
                                    View details <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Total Users Card */}
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                                <div className="rounded-lg bg-green-100 p-2">
                                    <Users size={18} className="text-green-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData.totalUsers}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Link href={route('users.index')}>
                                <Button variant="link" className="cursor-pointer flex h-auto items-center p-0 text-green-600">
                                    View details <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Total Categories Card */}
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Categories</CardTitle>
                                <div className="rounded-lg bg-purple-100 p-2">
                                    <BarChart3 size={18} className="text-purple-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData.totalCategories}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Link href={route('categories.index')}>
                                <Button variant="link" className="cursor-pointer flex h-auto items-center p-0 text-purple-600">
                                    View details <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Total Inventory Value Card */}
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Inventory Value</CardTitle>
                                <div className="rounded-lg bg-amber-100 p-2">
                                    <IndianRupeeIcon size={18} className="text-amber-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatCurrency(analyticsData.totalInventoryValue)}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="cursor-pointer flex h-auto items-center p-0 text-amber-600">
                                View details <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
