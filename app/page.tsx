import { Appbar } from "./components/Appbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Users,
  Radio,
  Heart,
  Zap,
  Upload,
  Headphones,
} from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Appbar />
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
            🎵 Fan-Curated Music Streaming
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Where Fans Shape
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Live Music
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            The first platform where fans curate playlists for artist live
            streams. Connect directly, stream together, create magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8"
            >
              <Upload className="w-5 h-5 mr-2" />
              Join as Artist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8"
            >
              <Headphones className="w-5 h-5 mr-2" />
              Join as Fan
            </Button>
          </div>

          {/* Quick Visual */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm">Artists Upload</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm">Fans Curate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm">Stream Live</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Topify?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  Fan-Curated Playlists
                </h3>
                <p className="text-white/70 text-sm">
                  Your fans vote on what plays during your live streams.
                  Democracy meets music.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  Real-Time Connection
                </h3>
                <p className="text-white/70 text-sm">
                  Chat, react, and connect with artists during live streams.
                  Build real relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Radio className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  Live Stream Magic
                </h3>
                <p className="text-white/70 text-sm">
                  High-quality streaming with interactive features that bring
                  artists and fans together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                1
              </div>
              <h3 className="text-white font-semibold">Upload Music</h3>
              <p className="text-white/60 text-sm">
                Artists share their tracks
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                2
              </div>
              <h3 className="text-white font-semibold">Fans Vote</h3>
              <p className="text-white/60 text-sm">
                Curate live stream playlists
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                3
              </div>
              <h3 className="text-white font-semibold">Go Live</h3>
              <p className="text-white/60 text-sm">Stream with fan playlists</p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                4
              </div>
              <h3 className="text-white font-semibold">Connect</h3>
              <p className="text-white/60 text-sm">
                Build lasting relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Music Streaming?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join artists and fans creating magical music moments together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white flex-1"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 flex-1"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center">
              <Music className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">Topify</span>
          </div>

          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
