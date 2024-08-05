import Header from './header/page';
import Footer from './footer/page';
import Image from 'next/image';
import Link from 'next/link';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GiThreeFriends, GiFarmer } from 'react-icons/gi';
import { GrRestroomWomen, GrBook } from 'react-icons/gr';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GiHealthNormal } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
    <div>
      <Header />
      <div className='mt-96 pt-40 relative z-10'>
          <Image src="/slider-bottom.png" alt="Rohit Pawar" className="rounded-lg" width={1800} height={400} />
          </div>
      <section>
        <div className="flex bg-white   overflow-hidden flex-col md:flex-row min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="p-6 md:w-1/2 ml-14">
            <h3 className="text-gray-800 font-bold text-xl mb-2">
              About the Personality
            </h3>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              ROHIT PAWAR
            </h2>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">
              MLA (Member of Legislative Assembly, Karjat – Jamkhed)
            </h4>
            <p className="text-gray-600 text-sm mb-6">
              Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics.
              He envisions building a better Maharashtra where everyone has a fair chance to succeed.
              As the CEO of Baramati Agro Pvt Ltd, Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics.
              He envisions building a better Maharashtra where everyone has a fair chance to succeed.
              As the CEO of Baramati Agro Pvt Ltd, Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics.
              He envisions building a better Maharashtra where everyone has a fair chance to succeed.
              As the CEO of Baramati Agro Pvt Ltd, Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics.
              He envisions building a better Maharashtra where everyone has a fair chance to succeed.
              As the CEO of Baramati Agro Pvt Ltd, he has made a remarkable contribution to the Agriculture Industry...
            </p>
            <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
          </div>

          <div className="relative w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto mr-14">
            <Link href="https://www.youtube.com/watch?v=YtJjw8sp2TA" legacyBehavior>
              <Link target="_blank" rel="noopener noreferrer">
                <Image
                  src="/about-video.png" // Replace with your actual image path
                  alt="Profile Picture"
                  width={700}  // Adjust these based on your image dimensions
                  height={500} // Adjust these based on your image dimensions
                  className="rounded-lg cursor-pointer"
                />
              </Link>
            </Link>
          </div>
        </div>
      </section>
      <div>
          <Image src="/feed-top.png" alt="Rohit Pawar" className="rounded-lg" width={1800} height={400} />
          </div>
      <section className='tabss'>
      <div className='text-center'>
          <p>Let’s Work Together</p>
          <h1 className='text-green-700 text-5xl font-extrabold pb-10'>Focus Areas</h1>
        </div>

        <Tabs defaultValue="youth" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-24">
            <TabsTrigger value="youth" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md active:bg-green-500 active:text-white">
              <GiThreeFriends className="text-2xl mb-2" />
              Youth
            </TabsTrigger>
            <TabsTrigger value="women" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <GrRestroomWomen className="text-2xl mb-2" />
              Women
            </TabsTrigger>
            <TabsTrigger value="farmer" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <GiFarmer className="text-2xl mb-2" />
              Farmer
            </TabsTrigger>
            <TabsTrigger value="education" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <GrBook className="text-2xl mb-2" />
              Education
            </TabsTrigger>
            <TabsTrigger value="healthcare" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <GiHealthNormal className="text-2xl mb-2" />
              Healthcare
            </TabsTrigger>
            <TabsTrigger value="governance" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <RiGovernmentLine className="text-2xl mb-2" />
              Good Governance
            </TabsTrigger>
            <TabsTrigger value="economy" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <FaMoneyBillAlt className="text-2xl mb-2" />
              Economy
            </TabsTrigger>
            <TabsTrigger value="water" className="flex flex-col items-center p-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
              <FaHandHoldingWater className="text-2xl mb-2" />
              Water
            </TabsTrigger>
          </TabsList>
          {/* Tabs content for each area */}
          <TabsContent value="youth">
            <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-youth.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar aims to unite the Youth from all sections of society, make them ready for employment and impart them with necessary skills training. He is always committed to providing space for setting up industries, providing loans through various Central and State Government schemes, and connecting the youth with successful entrepreneurs and experts in the business who can guide them effectively. Through Srujan Foundation Rohit Pawar has provided a platform for Youth that creates opportunities for them across the State and the country, it aims to recognize and value potential youth.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="women">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-women.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar is devoted to empowering women. He aims to develop an environment where women can live with dignity and contribute as equal partners in development, where they are free from violence and discrimination. He is concerned about women's safety. Considering the rise in criminal cases against women, Rohit Pawar started the ‘Bharosa Cell’ which strives for Women’s Justice. He also focused on strengthening women's SHGs and Upskilling women by Providing Skill Development Programmes and Infrastructure so that women can become financially Independent.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="farmer">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-farmers.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar strives to elevate farmers' living standards with the help of the latest technologies, innovations, and modern machinery in the field of Agriculture. He believes in working towards providing quality seeds, fertilizers, and basic implements and conducting new research in agriculture universities to reach farmers' fields and make their life prosperous. To uplift Farming, he worked on the Mechanisation of Agriculture, Improvising Drip Irrigation, and Vaccination camps for Animals to tackle Lumpy Skin disease.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-education.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar believes that the purpose of education is not only to make a person literate but also to make him/her Self-Reliant and Self-Sufficient. He aims to transcend Caste, Religion, and language through education and bring everyone together on humanitarian grounds. His Motto towards Education is; Equal opportunities and Highest Quality Education for all. Rohit Pawar always emphasizes that Modernization should be done in educational institutions in every corner of Maharashtra, whether it is government or private.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="healthcare">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-Health.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar stressed 'Free Healthcare with Better Amenities' as his priority; During the sudden outbreak of COVID 19, where the whole world was put behind doors; Rohit showed his comprehensive approach by helping people as he preferred to walk around Karjat-Jamkhed. From starting Jumbo Covid Centers to Providing Healthcare Camps to 17009 pilgrims going to Pandharpur for Ashadhi Ekadashi he always stepped in front. His efforts made COVID-19 deaths in Karjat Jamkhed Constituency the lowest in the Ahmednagar district.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-governance.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar’s idea for Good Governance involves Modern Technology and Modern Infrastructure which can bring administrative functions in urban and rural areas more transparent, fast, and accurate. He strongly believes in the concept of governing rather than the Idea of Ruling. For him, prompt delivery of the Central and State Governments Schemes is essential and it should reach the last person in society
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="economy">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-economy.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">
                      Rohit Pawar is insistent on building a Modern Industrialized Maharashtra. He is putting efforts to establish Maharashtra as a Global Industrial State. He is focused on empowering micro, small and medium enterprises (MSMEs). According to him, if the state’s industrial economy is to gain momentum, the government must empower MSMEs. Only then can millions of young people get jobs, and we can rebuild Maharashtra as an industrial state. His dream is to establish Maharashtra as the priority state to set up industries and start ups nationally and globally.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="water">
          <Card className="border-0">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/focus-section-water.png" alt="Rohit Pawar" className="rounded-lg" width={600} height={400} />
                  </div>
                  <div className="w-full md:w-1/2 md:mt-0 md:ml-6">
                    <p className="text-gray-700 mb-4 mt-24">

                      Rohit Pawar believes, a drought-free and prosperous Maharashtra can only be created by fostering social unity and providing scale to proven solutions and technologies, ensuring water conservation, planned management, and sustainable use of every drop of water. He aims to overcome the water stress situation and support welfare work for the farmer’s fraternity for which an ambitious sustainable watershed development program ‘Parivartan Parva’ launched by him to make Karjat and Jamkhed talukas water self-reliant.
                    </p>
                    <Link
              href="#"
              className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
            >
              READ MORE
            </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </section>


      <section>
      <div
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center p-8 formbg"
      style={{
        backgroundImage: 'url(/form-bg.png)',
        backgroundPosition: 'top',
        backgroundSize: '100%', // Scale the image horizontally to make it appear half
        backgroundClip: 'border-box',
      }}
    >
      {/* Form Section */}
      <div className="bg-yellow-500 text-black p-8   mb-8 md:mb-0 mt-20 mx-40 border-2 rounded-3xl w-1/3">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-6">Write a message (grievance or suggestion) to share it with MLA Rohit Pawar.</p>
        <form>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="fullName">Full Name *</label>
            <input type="text" id="fullName" placeholder="Enter Your Full Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="mobileNumber">Mobile Number *</label>
            <input type="text" id="mobileNumber" placeholder="Enter Your Mobile Number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="email">Email ID (Optional)</label>
            <input type="email" id="email" placeholder="Enter Your Email ID" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" />
          </div>
          <div className="mb-6">
            <label className="block text-black font-bold mb-2" htmlFor="message">Your Message *</label>
            <textarea id="message" placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:from-orange-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600">Submit</button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="text-white text-center md:text-left md:w-1/2 w-full">
        <div className="mb-4 md:mb-0 flex flex-col justify-center h-full">
          <div className="flex items-center justify-center md:justify-start mb-4">
          <Image src="/call-icon.png" alt="Rohit Pawar" className="rounded-lg" width={100} height={40} />
            <div>
              <h3 className="text-2xl font-bold pl-3 text-yellow-500 pt-10">Call on</h3>
            </div>
          </div>
          <p className="text-4xl font-bold">+91 96963 30330</p>
          <p className="text-3xl mt-4 font-bold text-yellow-500">
            to directly connect with the office of 
          </p>
          <p className="text-4xl mt-4 font-bold underline hover:underline-offset-4">MLA Rohit Pawar.</p>
        </div>
      </div>
    </div>
      </section>

      <div className='gallery'>
          <Image src="/slider-bottom.png" alt="Rohit Pawar" className="rounded-lg" width={1800} height={400} />
          </div>
      <section className=''>
      <div className='text-center'>
          <p>Best moments with public</p>
          <h1 className='text-green-700 text-5xl font-extrabold pb-10'>Photos & Videos Gallery</h1>
        </div>
        <div className="gal flex flex-col items-center justify-center py-8">
         <Gallery />
        </div>
        
      </section>



      <div className='social z-20'>
          <Image src="/feed-top.png" alt="Rohit Pawar" className="rounded-lg" width={1800} height={400} />
          </div>

      <section >
        <div className='flex space-x-10 pb-36' 
        style={{

          backgroundImage: 'url(/feed-bg.jpg)',
          paddingTop: 20,
          backgroundPosition: 'center top', // Center the image horizontally and push it upwards
          backgroundSize: '100% 110%', // Increase the height of the background image slightly
          backgroundClip: 'border-box',
        }} >
          <div className='pl-40 shadow-2xl'>
          <Link className="twitter-timeline" data-width="400" data-height="500" href="https://twitter.com/RRPSpeaks?ref_src=twsrc%5Etfw">Tweets by RRPSpeaks</Link> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div className='shadow-2xl'>
          <iframe 
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FRohit-Rajendra-Pawar-100044164193097%2F&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  width="400" 
  height="500" 
  style={{ border: 'none', overflow: 'hidden', borderRadius: '10px' }} 
  scrolling="no" 
  frameBorder="0" 
  allowFullScreen={true} 
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
/>
 </div>
        </div>
      </section>

      
      <section className='news'
      style={{
        backgroundImage: 'url(/news-bg.png)',
        backgroundPosition: 'top',
        backgroundSize: '100%', // Scale the image horizontally to make it appear half
        backgroundClip: 'border-box',
      }}>
      <div className='text-center pt-24'>
      
          <p className='text-white'>Resources & Latest News</p>
          <h1 className='text-green-700 text-5xl font-extrabold pb-10'>
            News & Media</h1>
        </div>

        <div className='flex'>
          <div className='pl-28'>
          <Image src="/old-man.png" alt="Rohit Pawar" className="rounded-lg" width={500} height={300} />
          </div>
          <div>
            

          </div>
        </div>
        </section>
      <Footer />
    </div>
    </>
  );
}
