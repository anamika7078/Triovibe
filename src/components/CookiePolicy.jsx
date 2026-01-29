"use client";
import React from 'react';
import { ArrowRight, Shield, Cookie, Settings, Eye, Mail, Phone, MapPin } from 'lucide-react';

const CookiePolicy = ({ setCurrentPage }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                                <Cookie className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Last updated 21 January 2026
                        </p>
                        <div className="bg-white rounded-2xl shadow-xl p-8 text-left">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This Cookie Policy explains how TRIOVIBE SOFTWARE LTD. ('Company', 'we', 'us', and 'our') uses cookies and similar technologies to recognise you when you visit our website at https://encycam.com ('Website'). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* What are cookies? */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Cookie className="w-6 h-6 text-teal-500" />
                                What are cookies?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Cookies set by the website owner (in this case, TRIOVIBE SOFTWARE LTD.) are called 'first-party cookies'. Cookies set by parties other than the website owner are called 'third-party cookies'. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g. advertising, interactive content, and analytics). The parties that set these third-party cookies can recognise your computer both when it visits the website in question and also when it visits certain other websites.
                            </p>
                        </div>

                        {/* Why do we use cookies? */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Settings className="w-6 h-6 text-teal-500" />
                                Why do we use cookies?
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
                            </p>
                        </div>

                        {/* How can I control cookies? */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-teal-500" />
                                How can I control cookies?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The Cookie Consent Manager can be found in the notification banner and on our Website. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
                            </p>
                        </div>

                        {/* Essential website cookies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential website cookies:</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Expires in</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">test_cookie</td>
                                            <td className="py-3 px-4">A session cookie used to check if the user's browser supports cookies.</td>
                                            <td className="py-3 px-4">.doubleclick.net</td>
                                            <td className="py-3 px-4">server_cookie</td>
                                            <td className="py-3 px-4">15 minutes</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">handl_landing_page</td>
                                            <td className="py-3 px-4">-</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">2 months 29 days</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">__stripe_sid</td>
                                            <td className="py-3 px-4">Fraud prevention and detection</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">30 minutes</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">_ga_#</td>
                                            <td className="py-3 px-4">Used to distinguish individual users by means of designation of a randomly generated number as client identifier, which allows calculation of visits and sessions</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">1 year 1 month 4 days</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">__stripe_mid</td>
                                            <td className="py-3 px-4">Fraud prevention and detection</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">11 months 30 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Analytics and customisation cookies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics and customisation cookies:</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customise our Website for you.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Expires in</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">handl_ip</td>
                                            <td className="py-3 px-4">-</td>
                                            <td className="py-3 px-4">.com</td>
                                            <td className="py-3 px-4">server_cookie</td>
                                            <td className="py-3 px-4">2 months 29 days</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">s7</td>
                                            <td className="py-3 px-4">Gather data regarding site usage and user behavior on the website.</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">2 months 29 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Advertising cookies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advertising cookies:</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Expires in</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">gaclientid</td>
                                            <td className="py-3 px-4">-</td>
                                            <td className="py-3 px-4">encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">session</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">_ga</td>
                                            <td className="py-3 px-4">Records a particular ID used to come up with data about website usage by the user</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">http_cookie</td>
                                            <td className="py-3 px-4">1 year 1 month 4 days</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">cfz_facebook-pixel</td>
                                            <td className="py-3 px-4">-</td>
                                            <td className="py-3 px-4">.encycam.com</td>
                                            <td className="py-3 px-4">server_cookie</td>
                                            <td className="py-3 px-4">11 months 30 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Browser control section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">How can I control cookies on my browser?</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                                <li>Chrome</li>
                                <li>Internet Explorer</li>
                                <li>Firefox</li>
                                <li>Safari</li>
                                <li>Edge</li>
                                <li>Opera</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Digital Advertising Alliance</li>
                                <li>Digital Advertising Alliance of Canada</li>
                                <li>European Interactive Digital Advertising Alliance</li>
                            </ul>
                        </div>

                        {/* Other tracking technologies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">What about other tracking technologies, like web beacons?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Cookies are not the only way to recognise or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called 'tracking pixels' or 'clear gifs'). These are tiny graphics files that contain a unique identifier that enables us to recognise when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
                            </p>
                        </div>

                        {/* Flash cookies section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Do you use Flash cookies or Local Shared Objects?</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Websites may also use so-called 'Flash Cookies' (also known as Local Shared Objects or 'LSOs') to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to 'information' on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
                            </p>
                        </div>

                        {/* Targeted advertising */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Do you serve targeted advertising?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.
                            </p>
                        </div>

                        {/* Updates */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">How often will you update this Cookie Policy?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                The date at the top of this Cookie Policy indicates when it was last updated.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Where can I get further information?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have any questions about our use of cookies or other technologies, please email us at info@encycam.com or by post to:
                            </p>
                            <div className="bg-white rounded-xl p-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Address</h3>
                                            <p className="text-gray-700">
                                                TRIOVIBE SOLUTIONS LTD.<br />
                                                F-411, Siddharth Magnum Plus,
                                                <br />
                                                Tarsali
                                                Vadodara - 390009, Gujarat, INDIA
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-700">+91 9930181825
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <p className="text-gray-700"> info@triovibesolutions.com </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home Button */}
                        <div className="text-center pt-8">
                            <button
                                onClick={() => setCurrentPage('home')}
                                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors font-semibold"
                            >
                                Back to Home
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookiePolicy;
