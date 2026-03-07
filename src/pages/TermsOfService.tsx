import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const TermsOfService = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <PageHero
                    title="Terms of Service"
                    subtitle="The rules and guidelines for using our website and services"
                    breadcrumb={[{ label: "Terms of Service" }]}
                />

                <section className="py-16 md:py-24 bg-background">
                    <div className="container-wide max-w-4xl mx-auto prose prose-slate dark:prose-invert lg:prose-lg text-muted-foreground">
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                        <p className="mb-6">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and A-Robotics Services ("Company", "we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Intellectual Property Rights</h2>
                        <p className="mb-6">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. User Representations</h2>
                        <p className="mb-4">By using the Site, you represent and warrant that:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Prohibited Activities</h2>
                        <p className="mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content.</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Disclaimer</h2>
                        <p className="mb-6">
                            The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Limitations of Liability</h2>
                        <p className="mb-6">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
                        <p className="mb-6">
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br />
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

export default TermsOfService;
