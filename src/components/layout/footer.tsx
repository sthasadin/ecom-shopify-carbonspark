import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-warm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-h3 font-semibold text-text-primary tracking-tight">
              bydaniellealexzandra
            </Link>
            <p className="mt-4 text-body-sm text-text-secondary max-w-md">
              Premium fashion for the modern individual. Quality craftsmanship meets contemporary design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-body-sm font-semibold text-text-primary mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/collections/new-arrivals" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/best-sellers" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-body-sm font-semibold text-text-primary mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-body-sm text-text-muted text-center">
            &copy; {new Date().getFullYear()} bydaniellealexzandra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
