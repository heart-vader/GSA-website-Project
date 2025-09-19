import { Button } from "@/components/ui/button"
import { Shield, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export function QualityHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-secondary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Uncompromising
            <span className="text-secondary block">Quality Standards</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            Our ISO 9001:2015 certified quality management system ensures every product meets the highest standards of
            precision, reliability, and performance. Quality isn't just our goal—it's our guarantee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Award className="h-12 w-12 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold">ISO 9001:2015</div>
              <div className="text-sm text-primary-foreground/80">Certified Quality Management</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-primary-foreground/80">Quality Rating</div>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold">Zero Defects</div>
              <div className="text-sm text-primary-foreground/80">Quality Goal</div>
            </div>
          </div>

          <div className="pt-8">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/resources">Download Quality Manual</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
