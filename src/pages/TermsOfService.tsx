import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Naya Hair Extensions";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-light text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 8, 2026</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-destructive/10 border border-destructive/30 p-6 rounded-sm">
              <h2 className="text-2xl font-semibold text-destructive mb-4">⚠ ALL SALES ARE FINAL — NO REFUNDS, NO RETURNS, NO EXCHANGES</h2>
              <p className="text-foreground leading-relaxed font-body font-medium">
                By placing an order with Naya Hair Extensions, you acknowledge and agree that ALL SALES ARE FINAL. We do NOT offer refunds, returns, or exchanges under any circumstances. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mt-4 font-body">
                <li>Change of mind or buyer's remorse</li>
                <li>Incorrect selection of length, color, texture, or weight</li>
                <li>Dissatisfaction with product appearance, feel, or quality</li>
                <li>Products that have been opened, worn, washed, cut, colored, or altered in any way</li>
                <li>Allergic reactions or sensitivities</li>
                <li>Damage caused by improper installation, care, or styling</li>
                <li>Packages marked as delivered by the carrier</li>
                <li>Orders shipped to an incorrect address provided by the customer</li>
              </ul>
              <p className="text-foreground leading-relaxed font-body font-medium mt-4">
                By completing your purchase, you confirm that you have reviewed and accepted this no-refund policy in its entirety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                By accessing and using the Naya Hair Extensions website and services, you accept and agree to be bound by the terms and provisions of this agreement. These Terms of Service govern your use of our website, products, and services. If you do not agree to these terms, you must not use our website or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Product Descriptions & Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                We make every effort to display our products as accurately as possible. However, due to variations in screen settings, lighting, and photography, the actual color, texture, and appearance of hair products may vary slightly from the images shown on our website. These minor variations do not constitute a defect and are not grounds for a return or refund. It is the customer's responsibility to review product descriptions, images, and specifications carefully before placing an order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Order Processing & Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed font-body mb-4">
                Orders are processed within 1–3 business days. Once an order has been placed and payment has been processed, it CANNOT be cancelled, modified, or altered. We reserve the right to refuse or cancel any order at our sole discretion, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 font-body">
                <li>Suspected fraudulent transactions</li>
                <li>Orders that appear to violate our terms</li>
                <li>Product unavailability or pricing errors</li>
                <li>Multiple orders placed to circumvent limits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Shipping & Delivery</h2>
              <p className="text-muted-foreground leading-relaxed font-body mb-4">
                Shipping times are estimates and not guarantees. Naya Hair Extensions is NOT responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 font-body">
                <li>Delays caused by shipping carriers, customs, weather, or other circumstances beyond our control</li>
                <li>Lost, stolen, or damaged packages after delivery confirmation by the carrier</li>
                <li>Packages returned to us due to incorrect or incomplete shipping addresses provided by the customer</li>
                <li>Additional customs duties, taxes, or import fees — these are the buyer's sole responsibility</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-body mt-4">
                Risk of loss and title for all products pass to the customer upon delivery to the shipping carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Chargebacks & Disputes</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                Filing a chargeback or payment dispute after receiving your order constitutes a breach of these Terms of Service. If a chargeback is filed, we reserve the right to: (a) provide all transaction evidence to the payment processor, (b) pursue the outstanding balance through collections, (c) ban the customer from future purchases, and (d) take any legal action necessary to recover funds and damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                To the fullest extent permitted by applicable law, Naya Hair Extensions, its owners, officers, employees, agents, and affiliates shall NOT be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or related to: the use or inability to use our products, any injury or damage resulting from product use or installation, any third-party actions or services, or any unauthorized access to your personal information. Our total liability for any claim shall not exceed the amount paid for the specific product in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                You agree to indemnify, defend, and hold harmless Naya Hair Extensions, its owners, officers, employees, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including attorney's fees) arising from your use of our products, your violation of these Terms of Service, or your violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                All content on this website, including text, graphics, logos, images, product photos, and software, is the exclusive property of Naya Hair Extensions and is protected by copyright, trademark, and other intellectual property laws. Unauthorized reproduction, distribution, or use of any content is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Governing Law & Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                These Terms of Service shall be governed by and construed in accordance with the laws of the applicable jurisdiction. Any disputes arising from these terms or your use of our website/products shall be resolved through binding arbitration, and you waive any right to participate in a class action lawsuit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                We reserve the right to modify, update, or revise these Terms of Service at any time without prior notice. Continued use of our website after changes are posted constitutes acceptance of the updated terms. It is your responsibility to review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-4 text-muted-foreground font-body">
                <p>Email: legal@nayahair.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
