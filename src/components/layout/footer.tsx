import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              bydaniellealexzandra
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Premium fashion for the modern individual. Quality craftsmanship meets contemporary design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections" className="text-sm text-gray-600 hover:text-black transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/collections/new-arrivals" className="text-sm text-gray-600 hover:text-black transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/best-sellers" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} bydaniellealexzandra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
