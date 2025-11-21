import React from 'react'

const HomePage = () => {
    const GITHUB_URL = 'https://github.com/your-username';
const LINKEDIN_URL = 'https://linkedin.com/in/your-profile';
const RESUME_URL = '/resume.pdf'; // change to your resume route or external link
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
            <p className="text-gray-600 mt-2">A few highlights — click to view source or demo.</p>


            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example project card - in a real app you'd map over data fetched from your backend */}
                <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold">AI Tutor (Final Year Project)</h3>
                    <p className="text-sm text-gray-600 mt-2">MERN app with FAISS-based search + LLM integration to provide tutoring and code help.</p>
                    <div className="mt-3 flex items-center justify-between">
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm hover:underline">Source</a>
                        <a href="#" className="text-sm text-indigo-600">Live demo</a>
                    </div>
                </article>


                <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold">Health Tracker</h3>
                    <p className="text-sm text-gray-600 mt-2">Track sleep, water, mood, and nutrition with analytics and reminders.</p>
                    <div className="mt-3 flex items-center justify-between">
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm hover:underline">Source</a>
                        <a href="#" className="text-sm text-indigo-600">Live demo</a>
                    </div>
                </article>


                <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold">Portfolio CMS</h3>
                    <p className="text-sm text-gray-600 mt-2">Admin panel to manage projects, blog posts and assets (Node + Mongo + React Admin).</p>
                    <div className="mt-3 flex items-center justify-between">
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm hover:underline">Source</a>
                        <a href="#" className="text-sm text-indigo-600">Live demo</a>
                    </div>
                </article>


            </div>



            {/* About */}
            <section id="about" className="mt-16 bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold">About me</h2>
                <p className="mt-3 text-gray-700">I'm a Master's student in Computer Applications with a focus on web development and AI. I enjoy building usable tools, learning new systems, and collaborating on open-source projects.</p>


                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold">Tech</h4>
                        <p className="text-sm text-gray-600 mt-2">MERN, FAISS, Python, Docker, GitHub Actions, JWT Auth, Node, Express, Mongoose.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">What I bring</h4>
                        <p className="text-sm text-gray-600 mt-2">Practical problem solving, clean APIs, and user-centred UI design.</p>
                    </div>
                </div>
            </section>


            {/* Contact */}
            <section id="contact" className="mt-16">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <p className="text-gray-600 mt-2">I’m open for internships, collaborations and freelance work.</p>


                <form action="/routes/contact" method="POST" className="mt-6 max-w-xl">
                    <div className="grid sm:grid-cols-2 gap-3">
                        <input name="name" placeholder="Your name" required className="p-3 border rounded-md" />
                        <input name="email" type="email" placeholder="Email" required className="p-3 border rounded-md" />
                    </div>
                    <textarea name="message" placeholder="Message" rows={5} required className="mt-3 p-3 border rounded-md w-full" />
                    <div className="mt-3 flex items-center space-x-3">
                        <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send message</button>
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm hover:underline">Or message me on GitHub</a>
                    </div>
                </form>
            </section>


            <footer className="mt-20 py-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Aswin Krishna M — Built with React + Tailwind
            </footer>

        </div >
    )
}

export default HomePage