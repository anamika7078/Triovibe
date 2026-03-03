"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
    LogOut, Mail, Search, Trash2, Eye, 
    Calendar, Phone, Globe, Building, User,
    ChevronLeft, ChevronRight, RefreshCw
} from 'lucide-react';

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState({ total: 0, totalPages: 1 });
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(null);

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem('adminToken');
        const adminUser = localStorage.getItem('adminUser');

        if (!token || !adminUser) {
            router.push('/admin/login');
            return;
        }

        setUser(JSON.parse(adminUser));
        fetchSubmissions();
    }, [router, currentPage, searchTerm]);

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
            const url = `${backendUrl}/api/contact?page=${currentPage}&limit=10${searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                router.push('/admin/login');
                return;
            }

            const data = await response.json();
            setSubmissions(data.submissions || []);
            setPagination(data.pagination || { total: 0, totalPages: 1 });
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin/login');
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this submission?')) {
            return;
        }

        setDeleteLoading(id);
        try {
            const token = localStorage.getItem('adminToken');
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

            const response = await fetch(`${backendUrl}/api/contact/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                fetchSubmissions();
            } else {
                alert('Failed to delete submission');
            }
        } catch (error) {
            console.error('Error deleting submission:', error);
            alert('Failed to delete submission');
        } finally {
            setDeleteLoading(null);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-black text-slate-900">Admin Dashboard</h1>
                            <p className="text-sm text-slate-600 font-medium">Welcome, {user.fullName}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">Total Submissions</p>
                                <p className="text-4xl font-black text-slate-900">{pagination.total}</p>
                            </div>
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
                                <Mail size={32} className="text-teal-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">This Page</p>
                                <p className="text-4xl font-black text-slate-900">{submissions.length}</p>
                            </div>
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Eye size={32} className="text-blue-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">Total Pages</p>
                                <p className="text-4xl font-black text-slate-900">{pagination.totalPages}</p>
                            </div>
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                                <Calendar size={32} className="text-purple-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Search and Actions */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search by name, email, or organization..."
                                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                            />
                        </div>
                        <button
                            onClick={fetchSubmissions}
                            className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                        >
                            <RefreshCw size={18} />
                            Refresh
                        </button>
                    </div>
                </div>

                {/* Submissions Table */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-teal-500"></div>
                            <p className="mt-4 text-slate-600 font-medium">Loading submissions...</p>
                        </div>
                    ) : submissions.length === 0 ? (
                        <div className="p-12 text-center">
                            <Mail size={48} className="mx-auto text-slate-300 mb-4" />
                            <p className="text-slate-600 font-medium">No submissions found</p>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Phone</th>
                                            <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Country</th>
                                            <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-4 text-right text-xs font-black text-slate-700 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {submissions.map((submission) => (
                                            <tr key={submission.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-slate-900">
                                                        {submission.first_name} {submission.last_name}
                                                    </div>
                                                    {submission.organization && (
                                                        <div className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                                                            <Building size={14} />
                                                            {submission.organization}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                        <Mail size={16} className="text-slate-400" />
                                                        {submission.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                        <Phone size={16} className="text-slate-400" />
                                                        {submission.phone}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                        <Globe size={16} className="text-slate-400" />
                                                        {submission.country}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 font-medium text-sm">
                                                    {formatDate(submission.created_at)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => setSelectedSubmission(submission)}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                            title="View Details"
                                                        >
                                                            <Eye size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(submission.id)}
                                                            disabled={deleteLoading === submission.id}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
                                                            title="Delete"
                                                        >
                                                            {deleteLoading === submission.id ? (
                                                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent"></div>
                                                            ) : (
                                                                <Trash2 size={18} />
                                                            )}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {pagination.totalPages > 1 && (
                                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                                    <div className="text-sm text-slate-600 font-medium">
                                        Page {currentPage} of {pagination.totalPages}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="p-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            onClick={() => setCurrentPage(p => Math.min(pagination.totalPages, p + 1))}
                                            disabled={currentPage === pagination.totalPages}
                                            className="p-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Submission Detail Modal */}
            {selectedSubmission && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setSelectedSubmission(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900">Submission Details</h2>
                                <button
                                    onClick={() => setSelectedSubmission(null)}
                                    className="text-slate-400 hover:text-slate-600"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">First Name</p>
                                        <p className="text-slate-900 font-bold">{selectedSubmission.first_name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Last Name</p>
                                        <p className="text-slate-900 font-bold">{selectedSubmission.last_name}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Email</p>
                                    <p className="text-slate-900 font-bold flex items-center gap-2">
                                        <Mail size={16} />
                                        {selectedSubmission.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Phone</p>
                                    <p className="text-slate-900 font-bold flex items-center gap-2">
                                        <Phone size={16} />
                                        {selectedSubmission.phone}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Country</p>
                                        <p className="text-slate-900 font-bold flex items-center gap-2">
                                            <Globe size={16} />
                                            {selectedSubmission.country}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Enquiry Type</p>
                                        <p className="text-slate-900 font-bold">{selectedSubmission.enquiry_type}</p>
                                    </div>
                                </div>

                                {selectedSubmission.organization && (
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Organization</p>
                                        <p className="text-slate-900 font-bold flex items-center gap-2">
                                            <Building size={16} />
                                            {selectedSubmission.organization}
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Industry Focus</p>
                                    <p className="text-slate-900 font-bold">{selectedSubmission.industry_focus}</p>
                                </div>

                                {selectedSubmission.message && (
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Message</p>
                                        <p className="text-slate-900 font-medium whitespace-pre-wrap bg-slate-50 p-4 rounded-xl">
                                            {selectedSubmission.message}
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Privacy Accepted</p>
                                        <p className="text-slate-900 font-bold">
                                            {selectedSubmission.accept_privacy ? 'Yes' : 'No'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Marketing Updates</p>
                                        <p className="text-slate-900 font-bold">
                                            {selectedSubmission.receive_updates ? 'Yes' : 'No'}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Submitted At</p>
                                    <p className="text-slate-900 font-bold flex items-center gap-2">
                                        <Calendar size={16} />
                                        {formatDate(selectedSubmission.created_at)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

