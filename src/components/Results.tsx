
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import ChipBadge from "@/components/ui/ChipBadge";
import AnimatedContainer from "@/components/AnimatedContainer";

const data = [
  { name: "Jan", traffic: 400, leads: 240, conversions: 100 },
  { name: "Feb", traffic: 500, leads: 285, conversions: 120 },
  { name: "Mar", traffic: 600, leads: 350, conversions: 150 },
  { name: "Apr", traffic: 675, leads: 390, conversions: 175 },
  { name: "May", traffic: 760, leads: 440, conversions: 200 },
  { name: "Jun", traffic: 850, leads: 490, conversions: 230 },
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="text-center mb-16" animation="fade-up">
          <ChipBadge className="mb-4">Client Results</ChipBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Driving Measurable Growth with Yashika Infotech Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">At Yashika Infotech Services, we help businesses grow by delivering digital marketing solutions that drive real results. As the Best Digital Marketing Agency in India, we specialize in comprehensive strategies that include SEO services, PPC management, social media marketing, content creation, and more. Our data-driven approach ensures that every strategy we implement is tailored to your goals, whether you&#39;re based in Jaipur or any part of the world.


          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatedContainer className="lg:col-span-7" animation="fade-right" delay={200}>
            <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6">6-Month Performance Growth</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="traffic" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="leads" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="conversions" fill="#0369a1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer className="lg:col-span-5" animation="fade-left" delay={400}>
            <div className="grid grid-cols-1 gap-8 h-full">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Organic Traffic</h3>
                  <span className="text-green-500 text-sm font-medium">+112%</span>
                </div>
                <p className="text-3xl font-bold text-marketing-700">167,492</p>
                <p className="text-gray-500 text-sm mt-2">Monthly visitors</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Conversion Rate</h3>
                  <span className="text-green-500 text-sm font-medium">+38%</span>
                </div>
                <p className="text-3xl font-bold text-marketing-700">7.4%</p>
                <p className="text-gray-500 text-sm mt-2">Industry avg: 3.2%</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">ROI</h3>
                  <span className="text-green-500 text-sm font-medium">+237%</span>
                </div>
                <p className="text-3xl font-bold text-marketing-700">412%</p>
                <p className="text-gray-500 text-sm mt-2">Return on ad spend</p>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

export default Results;
