'use client';
import React, { useState, useEffect } from 'react';
import {
  getCategoriesActivity,
  createCategoryActivity,
  editCategoryActivity,
  deleteCategoryActivity,
} from '@/lib/service/categoryActivity'; // adjust path according to your project

// --- Icon components ---
const PlusIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const EditIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);
const TrashIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

// --- Main Component ---
export default function ManageCategoryPage() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<{ id: number; name: string } | null>(null);
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<{ id: number; name: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Load Categories ---
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await getCategoriesActivity();
      setCategories(data);
    } catch (err) {
      console.error('Failed to fetch categories', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // --- Handlers ---
  const handleAdd = () => {
    setCurrentCategory(null);
    setCategoryName('');
    setError('');
    setIsModalOpen(true);
  };

  const handleEdit = (category: { id: number; name: string }) => {
    setCurrentCategory(category);
    setCategoryName(category.name);
    setError('');
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!categoryName.trim()) {
      setError('Category name cannot be empty.');
      return;
    }

    // Prevent duplicates locally before sending request
    const isDuplicate = categories.some(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase() && cat.id !== currentCategory?.id
    );
    if (isDuplicate) {
      setError('This category name already exists.');
      return;
    }

    try {
      if (currentCategory) {
        // --- EDIT ---
        const res = await editCategoryActivity(currentCategory.id, categoryName.trim());
        if (!res.success) throw new Error(res.error || 'Failed to edit category');
      } else {
        // --- ADD ---
        const res = await createCategoryActivity(categoryName.trim());
        if (!res.success) throw new Error(res.error || 'Failed to create category');
      }
      await fetchCategories(); // refresh list
      setIsModalOpen(false);
      setCurrentCategory(null);
      setCategoryName('');
      setError('');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }
  };

  const handleDelete = (category: { id: number; name: string }) => {
    setCategoryToDelete(category);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!categoryToDelete) return;
    try {
      const res = await deleteCategoryActivity(categoryToDelete.id);
      if (!res.success) throw new Error(res.error || 'Failed to delete category');
      await fetchCategories();
      setIsDeleteModalOpen(false);
      setCategoryToDelete(null);
    } catch (err: any) {
      alert(err.message || 'An unexpected error occurred.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setError('');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- Render ---
  return (
    <>
      <div className='h-[6.5vh]'></div>
      <div className="bg-gray-50 w-full min-h-[93.5vh] font-sans text-gray-800">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Categories</h1>
              <p className="mt-1 text-gray-600">Add, edit, or delete categories for activities.</p>
            </div>
            <button onClick={handleAdd} className="mt-4 sm:mt-0 flex items-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700">
              <PlusIcon className="w-5 h-5" /> Add New Category
            </button>
          </div>

          {/* Category List Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Category Name</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={2} className="text-center py-10 text-gray-500">Loading...</td>
                    </tr>
                  ) : categories.length > 0 ? (
                    categories.map((category) => (
                      <tr key={category.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{category.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-end gap-4">
                            <button onClick={() => handleEdit(category)} className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                              <EditIcon /> Edit
                            </button>
                            <button onClick={() => handleDelete(category)} className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200">
                              <TrashIcon /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="text-center py-10 text-gray-500">
                        No categories found. Add one to get started!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold mb-6">{currentCategory ? 'Edit Category' : 'Add New Category'}</h2>
              <div>
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input type="text" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" placeholder="e.g., Outdoor Adventures" autoFocus />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <div className="mt-8 flex justify-end gap-4">
                <button onClick={closeModal} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                <button onClick={handleSave} className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700">Save Category</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete the category "<strong>{categoryToDelete?.name}</strong>"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button onClick={closeModal} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                <button onClick={confirmDelete} className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
