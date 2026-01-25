import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Logo.png";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Industries", href: "/industries" },
	{ label: "Technologies", href: "/technologies" },
	{ label: "Projects", href: "/projects" },
	{ label: "Contact", href: "/contact" },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
			<div className="container-wide">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-3">
						<img
							src={logo}
							alt="Industrial Automation Hub Logo"
							className="w-14 h-14 object-contain"
						/>
						<div className="hidden sm:block">
							<span className="font-heading font-semibold text-lg text-foreground">
								IndustrialAuto
							</span>
							<span className="text-xs text-muted-foreground block -mt-1">
								Engineering Solutions
							</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								className={cn(
									"px-3 py-2 text-sm font-medium transition-colors",
									location.pathname === link.href
										? "text-primary"
										: "text-muted-foreground hover:text-foreground"
								)}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center gap-3">
						<a
							href="tel:+919876543210"
							className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
						>
							<Phone className="w-4 h-4" />
							<span>+91 98765 43210</span>
						</a>
						<Button variant="accent" size="sm" asChild>
							<Link to="/contact">Get a Quote</Link>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<div className="lg:hidden py-4 border-t border-border">
						<nav className="flex flex-col gap-1">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									onClick={() => setMobileMenuOpen(false)}
									className={cn(
										"px-4 py-3 text-base font-medium rounded-md transition-colors",
										location.pathname === link.href
											? "text-primary bg-primary/10"
											: "text-muted-foreground hover:text-foreground hover:bg-muted"
									)}
								>
									{link.label}
								</Link>
							))}
							<div className="mt-4 px-4">
								<Button variant="accent" className="w-full" asChild>
									<Link to="/contact">Get a Quote</Link>
								</Button>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
