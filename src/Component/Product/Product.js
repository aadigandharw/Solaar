// Product.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ThunderboltOutlined,
  HomeOutlined,
  SafetyOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  StarOutlined,
  StarFilled,
  FilterOutlined,
  CloseOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ToolOutlined,
  EnvironmentOutlined,
  CarOutlined,
  ApartmentOutlined
} from "@ant-design/icons";
import "./Product.css";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Product Categories
  const categories = [
    { id: "all", label: "All Products", icon: <ThunderboltOutlined />, count: 0 },
    { id: "panels", label: "Solar Panels", icon: <ThunderboltOutlined />, count: 0 },
    { id: "inverters", label: "Inverters", icon: <ToolOutlined />, count: 0 },
    { id: "batteries", label: "Batteries", icon: <SafetyOutlined />, count: 0 },
    { id: "accessories", label: "Accessories", icon: <HomeOutlined />, count: 0 },
    { id: "ev-chargers", label: "EV Chargers", icon: <CarOutlined />, count: 0 }
  ];

  // Products Data
  const products = [
    // Solar Panels
    {
      id: 1,
      name: "Premium Monocrystalline Solar Panel",
      category: "panels",
      price: 12500,
      originalPrice: 15999,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
      description: "High-efficiency 550W monocrystalline solar panel with 25-year performance warranty. Ideal for residential and commercial installations.",
      features: [
        "Power Output: 550W",
        "Efficiency: 21.5%",
        "Warranty: 25 Years",
        "Cell Type: Monocrystalline",
        "Dimensions: 2278 x 1134 x 35mm"
      ],
      badge: "Best Seller",
      inStock: true,
      savings: "Save ₹35,000/year"
    },
    {
      id: 2,
      name: "Bifacial Solar Panel",
      category: "panels",
      price: 15900,
      originalPrice: 18999,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600",
      description: "Advanced bifacial technology captures sunlight from both sides, increasing energy yield by up to 25%.",
      features: [
        "Power Output: 600W",
        "Efficiency: 22.3%",
        "Bifacial Technology",
        "Durable Glass-Glass Design",
        "30-Year Warranty"
      ],
      badge: "New",
      inStock: true,
      savings: "Save ₹45,000/year"
    },
    {
      id: 3,
      name: "Flexible Solar Panel",
      category: "panels",
      price: 8900,
      originalPrice: 11999,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600",
      description: "Lightweight flexible solar panels perfect for curved surfaces, RVs, and boats.",
      features: [
        "Power Output: 200W",
        "Flexible Design",
        "Easy Installation",
        "Lightweight: 3.5kg",
        "5-Year Warranty"
      ],
      badge: "Portable",
      inStock: true,
      savings: "Save ₹15,000/year"
    },
    // Inverters
    {
      id: 4,
      name: "Hybrid Solar Inverter",
      category: "inverters",
      price: 45900,
      originalPrice: 54999,
      rating: 4.7,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600",
      description: "Smart hybrid inverter with battery backup capability. Works with or without grid connection.",
      features: [
        "Power: 5kW",
        "MPPT Technology",
        "Battery Ready",
        "Wi-Fi Monitoring",
        "10-Year Warranty"
      ],
      badge: "Smart",
      inStock: true,
      savings: "Save ₹25,000/year"
    },
    {
      id: 5,
      name: "Grid-Tie Inverter",
      category: "inverters",
      price: 32900,
      originalPrice: 39999,
      rating: 4.5,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
      description: "High-efficiency grid-tie inverter for on-grid solar systems with net metering capability.",
      features: [
        "Power: 5kW",
        "Efficiency: 98%",
        "Net Metering Ready",
        "LCD Display",
        "5-Year Warranty"
      ],
      badge: "Popular",
      inStock: true,
      savings: "Save ₹22,000/year"
    },
    // Batteries
    {
      id: 6,
      name: "Lithium-Ion Battery 5kWh",
      category: "batteries",
      price: 125000,
      originalPrice: 149999,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600",
      description: "Advanced lithium-ion battery storage system for reliable backup power and energy independence.",
      features: [
        "Capacity: 5kWh",
        "Lithium Iron Phosphate",
        "Depth of Discharge: 90%",
        "10-Year Warranty",
        "Wall-Mountable"
      ],
      badge: "Premium",
      inStock: true,
      savings: "100% Backup"
    },
    {
      id: 7,
      name: "Lead Acid Battery 150Ah",
      category: "batteries",
      price: 18900,
      originalPrice: 22999,
      rating: 4.3,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600",
      description: "Reliable tubular lead-acid battery for solar applications with long life and maintenance-free operation.",
      features: [
        "Capacity: 150Ah",
        "Tubular Technology",
        "Maintenance Free",
        "5-Year Warranty",
        "Deep Cycle"
      ],
      badge: "Value",
      inStock: true,
      savings: "Backup Power"
    },
    // Accessories
    {
      id: 8,
      name: "Solar Mounting Structure",
      category: "accessories",
      price: 12500,
      originalPrice: 15999,
      rating: 4.6,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
      description: "Heavy-duty aluminum mounting structure for rooftop solar panel installation.",
      features: [
        "Material: Aluminum",
        "Corrosion Resistant",
        "Easy Installation",
        "Adjustable Tilt",
        "10-Year Warranty"
      ],
      badge: "Essential",
      inStock: true,
      savings: "Secure Installation"
    },
    {
      id: 9,
      name: "Solar Charge Controller",
      category: "accessories",
      price: 8900,
      originalPrice: 11999,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600",
      description: "MPPT solar charge controller for optimal battery charging and system protection.",
      features: [
        "MPPT Technology",
        "60A Capacity",
        "LCD Display",
        "Battery Protection",
        "5-Year Warranty"
      ],
      badge: "Smart",
      inStock: true,
      savings: "Extended Battery Life"
    },
    // EV Chargers
    {
      id: 10,
      name: "EV Charging Station",
      category: "ev-chargers",
      price: 45900,
      originalPrice: 54999,
      rating: 4.8,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600",
      description: "Fast EV charger compatible with all electric vehicles. Solar-ready with smart charging features.",
      features: [
        "Power: 7.2kW",
        "Type 2 Connector",
        "Smart App Control",
        "Solar Integration",
        "3-Year Warranty"
      ],
      badge: "Eco",
      inStock: true,
      savings: "Free Charging"
    }
  ];

  // Update category counts
  categories.forEach(cat => {
    if (cat.id === "all") {
      cat.count = products.length;
    } else {
      cat.count = products.filter(p => p.category === cat.id).length;
    }
  });

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Wishlist handlers
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? 
          <StarFilled key={i} className="star-filled" /> : 
          <StarOutlined key={i} className="star-outline" />
      );
    }
    return stars;
  };

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero-overlay"></div>
        <div className="product-hero-content">
          <div className="hero-badge animate-fade-in" style={{marginTop:"100px"}}>
            <span>⚡ Premium Solar Products</span>
          </div>
          <h1 className="animate-fade-in-up">
            High-Quality <span className="gradient-text">Solar Products</span> for Every Need
          </h1>
          <p className="animate-fade-in-up delay-1">
            Discover our range of premium solar panels, inverters, batteries, and accessories. 
            All products come with manufacturer warranty and professional installation support.
          </p>
          <div className="hero-stats animate-fade-in-up delay-2">
            <div className="stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Product Categories</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Trusted Brands</div>
            </div>
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <div className="search-box">
              <SearchOutlined className="search-icon" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <CloseOutlined 
                  className="clear-search" 
                  onClick={() => setSearchTerm("")}
                />
              )}
            </div>
            <button 
              className="filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FilterOutlined />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className={`categories-grid ${isFilterOpen ? "expanded" : ""}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <span className="category-name">{category.label}</span>
                  <span className="category-count">{category.count} Products</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div>
              <h2>Our <span className="gradient-text">Products</span></h2>
              <p>Showing {filteredProducts.length} products</p>
            </div>
            <div className="products-sort">
              <select className="sort-select">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
              <button onClick={() => { setSelectedCategory("all"); setSearchTerm(""); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="product-card animate-on-scroll"
                  id={`product-${product.id}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {product.badge && (
                    <div className="product-badge">{product.badge}</div>
                  )}
                  <button 
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    {wishlist.includes(product.id) ? (
                      <HeartFilled className="wishlist-filled" />
                    ) : (
                      <HeartOutlined />
                    )}
                  </button>
                  <div className="product-image" onClick={() => setSelectedProduct(product)}>
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button className="quick-view">Quick View</button>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      {renderStars(product.rating)}
                      <span>({product.reviews})</span>
                    </div>
                    <h3 onClick={() => setSelectedProduct(product)}>{product.name}</h3>
                    <p className="product-description">{product.description.substring(0, 80)}...</p>
                    <div className="product-price">
                      <div>
                        <span className="current-price">{formatPrice(product.price)}</span>
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      </div>
                      <div className="product-savings">
                        <DollarOutlined />
                        <span>{product.savings}</span>
                      </div>
                    </div>
                    <div className="product-features-preview">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="feature-preview">
                          <CheckCircleOutlined />
                          <span>{feature.split(":")[0]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="product-actions">
                      <button className="add-to-cart">
                        <ShoppingCartOutlined />
                        Add to Cart
                      </button>
                      <button className="view-details" onClick={() => setSelectedProduct(product)}>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><CheckCircleOutlined /></div>
              <h3>Genuine Products</h3>
              <p>100% authentic products with manufacturer warranty</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><SafetyOutlined /></div>
              <h3>Safe & Secure</h3>
              <p>Certified products with safety standards</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><ClockCircleOutlined /></div>
              <h3>Fast Delivery</h3>
              <p>Free shipping across India within 3-5 days</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><ToolOutlined /></div>
              <h3>Expert Support</h3>
              <p>Professional installation & after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-icon">🌞</div>
            <h2>Need Help Choosing the Right Product?</h2>
            <p>Our solar experts are here to guide you with personalized recommendations</p>
            <button className="cta-button" onClick={() => window.location.href = "/contact"}>
              Talk to Expert <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {selectedProduct.badge && (
                  <div className="modal-badge">{selectedProduct.badge}</div>
                )}
              </div>
              <div className="modal-details">
                <div className="modal-rating">
                  {renderStars(selectedProduct.rating)}
                  <span>{selectedProduct.reviews} reviews</span>
                </div>
                <h2>{selectedProduct.name}</h2>
                <div className="modal-price">
                  <span className="current">{formatPrice(selectedProduct.price)}</span>
                  <span className="original">{formatPrice(selectedProduct.originalPrice)}</span>
                  <span className="savings-tag">
                    Save {formatPrice(selectedProduct.originalPrice - selectedProduct.price)}
                  </span>
                </div>
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="modal-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircleOutlined />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-actions">
                  <button className="modal-cart">
                    <ShoppingCartOutlined />
                    Add to Cart
                  </button>
                  <button className="modal-buy" onClick={() => window.location.href = "/contact"}>
                    Buy Now
                  </button>
                </div>
                <div className="modal-guarantee">
                  <CheckCircleOutlined />
                  <span>25-Year Performance Warranty | Free Installation | Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;