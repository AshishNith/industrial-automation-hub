import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Logo.png";

type NavLink = {
	label: string;
	href: string;
	dropdown?: { label: string }[];
};

const navLinks: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Previous Projects", href: "/previous-projects" },
	{
		label: "Spare Parts",
		href: "/spare-parts",
		dropdown: [
			{ label: "Lubrication" },
			{ label: "Controller" },
			{ label: "Manipulator" },
			{ label: "Harness" },
			{ label: "Control & Power Cable" },
		],
	},
	{ label: "Contact", href: "/contact" },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	// On scroll -> update state
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		// Check on mount as well
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Determine if we are on the home page hero which is very dark
	const isHome = location.pathname === "/";
	const transparentMode = isHome && !isScrolled;

	// With the bright background, we always use standard text colors.
	const themeText = "text-foreground";
	const themeTextMuted = "text-muted-foreground";
	const themeTextHover = "hover:text-foreground";
	const themeBgGlass = transparentMode
		? "bg-transparent border-transparent"
		: "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm";

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				themeBgGlass
			)}
		>
			<div className="container-wide">
				<div className="flex items-center justify-between h-20 md:h-24">
					{/* ── Logo ── */}
					<Link to="/" className="flex items-center gap-3 group">
						<img
							src={logo}
							alt="Industrial Automation Hub Logo"
							className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform group-hover:scale-105"
						/>
						<div className="hidden sm:flex flex-col">
							<span
								className={cn(
									"font-heading font-extrabold text-xl tracking-tight transition-colors",
									themeText
								)}
							>
								Industrial<span className="text-accent">Auto</span>
							</span>
							<span
								className={cn(
									"text-xs font-medium tracking-wide transition-colors",
									themeTextMuted
								)}
							>
								Engineering Solutions
							</span>
						</div>
					</Link>

					{/* ── Desktop Navigation ── */}
					<nav className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) =>
							link.dropdown ? (
								<div key={link.label} className="relative group">
									<Link
										to={link.href}
										className={cn(
											"flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors rounded-full",
											location.pathname === link.href || location.pathname.startsWith(link.href)
												? "text-accent bg-accent/10"
												: cn(themeTextMuted, themeTextHover, "hover:bg-accent/5")
										)}
									>
										{link.label}
										<ChevronDown className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" />
									</Link>
									{/* Dropdown Menu */}
									<div className="absolute left-0 top-full pt-3 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all z-50">
										<div className="bg-card border border-border shadow-2xl rounded-xl p-2 relative flex flex-col gap-1">
											<Link
												to={link.href}
												className="block px-4 py-2 text-sm font-bold text-foreground hover:bg-accent hover:text-white rounded-lg transition-colors"
											>
												All {link.label}
											</Link>
											<div className="h-px bg-border/50 my-1 mx-2"></div>
											{link.dropdown.map((subItem) => (
												<Link
													key={subItem.label}
													to={`${link.href}?category=${encodeURIComponent(subItem.label)}`}
													className="block px-4 py-2 text-sm text-foreground/70 hover:bg-accent hover:text-white hover:font-medium rounded-lg transition-colors"
												>
													{subItem.label}
												</Link>
											))}
										</div>
									</div>
								</div>
							) : (
								<Link
									key={link.href}
									to={link.href}
									className={cn(
										"px-4 py-2 text-sm font-semibold transition-colors rounded-full",
										location.pathname === link.href
											? "text-accent bg-accent/10"
											: cn(themeTextMuted, themeTextHover, "hover:bg-accent/5")
									)}
								>
									{link.label}
								</Link>
							)
						)}
					</nav>

					{/* ── CTA / Actions ── */}
					<div className="hidden md:flex items-center gap-5">
						<a
							href="tel:+919876543210"
							className={cn(
								"flex items-center gap-2 text-sm font-semibold transition-colors",
								themeTextMuted,
								themeTextHover
							)}
						>
							<Phone className="w-4 h-4" />
							<span>+91 98765 43210</span>
						</a>

						{/* Glowing Order Button Style */}
						<div className="relative group">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-orange-400 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
							<Button
								variant="accent"
								size="lg"
								className="relative rounded-full shadow-lg font-bold tracking-wide"
								asChild
							>
								<Link to="/contact">
									<Zap className="w-4 h-4 mr-1.5 fill-current" />
									Get a Quote
								</Link>
							</Button>
						</div>
					</div>

					{/* ── Mobile Menu Button ── */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className={cn(
							"lg:hidden p-2 transition-colors rounded-full hover:bg-accent/10",
							themeTextMuted,
							themeTextHover
						)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* ── Mobile Navigation Drawer ── */}
				{mobileMenuOpen && (
					<div className="lg:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-4 animate-in slide-in-from-top-2">
						<nav className="flex flex-col gap-2">
							{navLinks.map((link) => (
								<div key={link.label}>
									<Link
										to={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className={cn(
											"flex items-center justify-between px-4 py-3 text-base font-bold rounded-xl transition-colors",
											location.pathname === link.href
												? "text-accent bg-accent/10"
												: "text-foreground/80 hover:text-foreground hover:bg-muted"
										)}
									>
										{link.label}
									</Link>
									{link.dropdown && (
										<div className="pl-6 py-2 flex flex-col gap-1 border-l-2 border-border ml-6 mt-1 mb-2">
											{link.dropdown.map((subItem) => (
												<Link
													key={subItem.label}
													to={`${link.href}?category=${encodeURIComponent(subItem.label)}`}
													onClick={() => setMobileMenuOpen(false)}
													className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/5 rounded-lg transition-colors"
												>
													{subItem.label}
												</Link>
											))}
										</div>
									)}
								</div>
							))}
							<div className="mt-6">
								<Button
									variant="accent"
									size="lg"
									className="w-full rounded-xl font-bold shadow-lg shadow-accent/20"
									asChild
								>
									<Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
										Get a Quote
									</Link>
								</Button>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
