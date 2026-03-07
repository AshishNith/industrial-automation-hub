import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <PageHero
                    title="Privacy Policy"
                    subtitle="How we collect, use, and protect your data"
                    breadcrumb={[{ label: "Privacy Policy" }]}
                />

                <section className="py-16 md:py-24 bg-background">
                    <div className="container-wide max-w-4xl mx-auto prose prose-slate dark:prose-invert lg:prose-lg text-muted-foreground">
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
                        <p className="mb-6">
                            Welcome to A-Robotics Services. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. The Data We Collect About You</h2>
                        <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How Is Your Personal Data Collected?</h2>
                        <p className="mb-4">We use different methods to collect data from and about you including through:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you apply for our products or services, request marketing to be sent to you, or give us feedback or contact us.</li>
                            <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. How We Use Your Personal Data</h2>
                        <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Security</h2>
                        <p className="mb-6">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Data Retention</h2>
                        <p className="mb-6">
                            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Your Legal Rights</h2>
                        <p className="mb-6">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                            <strong className="text-foreground">Email:</strong> info@industrialauto.in <br />
                            <strong className="text-foreground">Phone:</strong> +91 98765 43210 <br />
                            <strong className="text-foreground">Address:</strong> Industrial Area, Phase II, Pune, Maharashtra 411026, India
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
