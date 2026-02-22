import gpLogo from "@/assets/gp-logo.png";
import { ArrowLeft, Mail, RefreshCw, Download, Trash2, Headphones, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-hero-gradient py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
            <img src={gpLogo} alt="Gemma Partners Logo" className="w-14 h-14" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            Support
          </h1>
          <p className="text-primary-foreground/80 text-lg">Art of Noise — Help & FAQ</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-10">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Intro */}
        <div className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Welcome to the official support page for <strong className="text-foreground">Art of Noise</strong>, your minimalist companion for focus, sleep, and relaxation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Developed by Gemma Partners, Art of Noise provides high-quality pink and white noise generation in a simple, intuitive interface.
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary flex items-center gap-3">
                  <Volume2 className="h-5 w-5 flex-shrink-0" />
                  What is the difference between White Noise and Pink Noise?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  <strong className="text-foreground">White Noise:</strong> Contains all frequencies across the spectrum of audible sound in equal measure. It sounds like a "hissing" radio or a fan.
                </p>
                <p>
                  <strong className="text-foreground">Pink Noise:</strong> Contains all audible frequencies, but with more power at lower frequencies. This creates a deeper, more balanced sound that many find more natural, similar to steady rain or rustling leaves.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 flex-shrink-0" />
                  Does Art of Noise play in the background?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Yes. You can lock your device or switch to other apps, and the audio will continue to play seamlessly.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary flex items-center gap-3">
                  <Volume2 className="h-5 w-5 flex-shrink-0" />
                  The app is open, but I don't hear any sound. What should I do?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc list-inside">
                  <li>Ensure your device's physical "Mute" switch is turned off.</li>
                  <li>Check that your system volume is turned up.</li>
                  <li>Ensure no other media apps (like Spotify or YouTube) are overriding the audio output.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary flex items-center gap-3">
                  <Headphones className="h-5 w-5 flex-shrink-0" />
                  Can I use Art of Noise with Bluetooth headphones or speakers?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Absolutely. Art of Noise is fully compatible with all iOS-supported Bluetooth audio devices and AirPlay.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Troubleshooting</h2>
          <p className="text-muted-foreground mb-6">If the app is not performing as expected, we recommend the following steps:</p>

          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Update</h4>
                <p className="text-muted-foreground">Ensure you are running the latest version of Art of Noise from the App Store.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <RefreshCw className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Restart</h4>
                <p className="text-muted-foreground">Close the app completely and restart your device.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Trash2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Reinstall</h4>
                <p className="text-muted-foreground">Delete the app and download it again from the App Store (this will not charge you again).</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-6">
            Found a bug? We are committed to a polished experience. Please report any technical glitches to our support team with your device model and iOS version.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Us</h2>
          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Support Email</h4>
                  <a href="mailto:info@gemma-partners.com" className="text-primary hover:underline">
                    info@gemma-partners.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">We strive to respond to all inquiries within 48 hours.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal */}
        <section>
          <p className="text-muted-foreground text-sm">
            <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
            {" · "}
            © 2026 Gemma Partners. All rights reserved.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg opacity-80 mb-6">
            Transforming businesses through expert IT and management consulting
          </p>
          <div className="flex justify-center space-x-8 text-lg opacity-70">
            <span>© 2014-2025 Gemma Partners. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
