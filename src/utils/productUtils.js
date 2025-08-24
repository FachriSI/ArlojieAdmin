// utils/productUtils.js
// Utilitas untuk manage produk data

// Convert data admin ke format yang dibutuhkan halaman user
export const convertToUserFormat = (adminProduct) => {
  return {
    id: adminProduct.id,
    name: adminProduct.namaProduk,
    description: adminProduct.deskripsi,
    price: adminProduct.harga,
    rating: adminProduct.rating,
    image: adminProduct.foto,
    category: adminProduct.kategori,
    stock: adminProduct.stok,
    status: adminProduct.status
  };
};

// Convert data user ke format yang dibutuhkan halaman admin
export const convertToAdminFormat = (userProduct) => {
  return {
    id: userProduct.id,
    namaProduk: userProduct.name,
    deskripsi: userProduct.description,
    kategori: userProduct.category,
    harga: userProduct.price,
    stok: userProduct.stock,
    status: userProduct.status || 'Active',
    rating: userProduct.rating || 5.0,
    foto: userProduct.image
  };
};

// Fungsi untuk validasi data produk
export const validateProduct = (product) => {
  const errors = {};
  
  if (!product.namaProduk?.trim()) {
    errors.namaProduk = 'Nama produk wajib diisi';
  }
  
  if (!product.deskripsi?.trim()) {
    errors.deskripsi = 'Deskripsi produk wajib diisi';
  }
  
  if (!product.kategori) {
    errors.kategori = 'Kategori wajib dipilih';
  }
  
  if (!product.harga || parseInt(product.harga.replace(/\D/g, '')) <= 0) {
    errors.harga = 'Harga harus lebih dari 0';
  }
  
  if (product.stok < 0) {
    errors.stok = 'Stok tidak boleh negatif';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Format harga untuk display
export const formatPrice = (price) => {
  if (typeof price === 'string' && price.includes('Rp')) {
    return price;
  }
  
  const numericPrice = typeof price === 'string' ? 
    parseInt(price.replace(/\D/g, '')) : price;
    
  return `Rp ${numericPrice.toLocaleString('id-ID')}`;
};

// Format rating untuk display
export const formatRating = (rating) => {
  const stars = '⭐'.repeat(Math.floor(rating));
  return `${rating} ${stars}`;
};

// Generate product slug untuk URL
export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

// Check if product is in stock
export const isInStock = (product) => {
  return product.stok > 0 && product.status === 'Active';
};

// Get low stock products (kurang dari 10)
export const getLowStockProducts = (products) => {
  return products.filter(product => 
    product.stok < 10 && product.status === 'Active'
  );
};

// Search products
export const searchProducts = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.namaProduk.toLowerCase().includes(term) ||
    product.deskripsi.toLowerCase().includes(term) ||
    product.kategori.toLowerCase().includes(term)
  );
};

// Filter products by category
export const filterByCategory = (products, category) => {
  if (!category || category === 'All') return products;
  return products.filter(product => product.kategori === category);
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.namaProduk.localeCompare(b.namaProduk));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.namaProduk.localeCompare(a.namaProduk));
    case 'price-asc':
      return sortedProducts.sort((a, b) => {
        const priceA = parseInt(a.harga.replace(/\D/g, ''));
        const priceB = parseInt(b.harga.replace(/\D/g, ''));
        return priceA - priceB;
      });
    case 'price-desc':
      return sortedProducts.sort((a, b) => {
        const priceA = parseInt(a.harga.replace(/\D/g, ''));
        const priceB = parseInt(b.harga.replace(/\D/g, ''));
        return priceB - priceA;
      });
    case 'rating-desc':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'stock-asc':
      return sortedProducts.sort((a, b) => a.stok - b.stok);
    case 'newest':
      return sortedProducts.sort((a, b) => b.id - a.id);
    default:
      return sortedProducts;
  }
};
